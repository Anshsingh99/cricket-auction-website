'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuction } from "../context/auction-context"
import { TeamCard } from "./team-card"
import { PlayerCard } from "./player-card"
import { BiddingControls } from "./bidding-controls"
import { ManualSoldModal } from "./manual-sold-modal"
import type { Team } from "@/types/team";

const isAuctionComplete = (teams: Team[]): boolean => {
  return teams.every(team => team.playersBought === 9);
};

const FinalTeamsList: React.FC<{ teams: Team[] }> = ({ teams }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-center">Final Team Compositions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teams.map(team => (
        <div key={team.id} className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">{team.name}</h3>
          <p className="mb-2">Remaining Budget: {team.budget} points</p>
          <ul className="space-y-2">
            {team.players.map(player => (
              <li key={player.id}>
                {player.name} - {player.currentBid} points
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export function AuctionPage() {
  const { state, dispatch } = useAuction()
  const [isAnimating, setIsAnimating] = useState(false)

  const availablePlayers = state.players.filter(p => p.status === 'available')
  const unsoldPlayers = state.players.filter(p => p.status === 'unsold')

  // Use sessionStorage to persist state across page refreshes
  useEffect(() => {
    const savedState = sessionStorage.getItem('auctionState')
    if (savedState) {
      dispatch({ type: 'LOAD_STATE', state: JSON.parse(savedState) })
    }
  }, [dispatch])

  useEffect(() => {
    // Store state in sessionStorage when it changes
    sessionStorage.setItem('auctionState', JSON.stringify(state))
  }, [state])

  const handleStartAuction = () => {
    setIsAnimating(true)
    const animationDuration = 2000 // 2 seconds
    const animationInterval = 100 // Switch players every 100ms

    const startTime = Date.now()
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availablePlayers.length)
      dispatch({ type: 'SELECT_PLAYER', player: availablePlayers[randomIndex] })

      if (Date.now() - startTime >= animationDuration) {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, animationInterval)
  }

  useEffect(() => {
    if (availablePlayers.length === 0 && unsoldPlayers.length > 0) {
      const startNewRound = window.confirm('Start new round with unsold players?')
      if (startNewRound) {
        dispatch({ type: 'START_NEW_ROUND' })
      }
    }
  }, [availablePlayers.length, unsoldPlayers.length, dispatch])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6 text-white">
  <div className="max-w-7xl mx-auto space-y-8">

    {/* Header */}
    <h1 className="text-4xl font-extrabold text-center tracking-wide">
      🏏 <span className="text-yellow-400">SLS Cricket Auction</span>
      <span className="block text-lg mt-2 text-blue-200">
        Round {state.currentRound}
      </span>
    </h1>

    {isAuctionComplete(state.teams) ? (
      <FinalTeamsList teams={state.teams} />
    ) : (
      <>
        {/* Scoreboard */}
        <div className="flex justify-center gap-6">
          <div className="bg-black/40 px-6 py-3 rounded-xl shadow-md border border-blue-500">
            <span className="text-sm text-blue-300">Players Left</span>
            <div className="text-2xl font-bold text-yellow-400">
              {state.playersToAuction}
            </div>
          </div>

          <div className="bg-black/40 px-6 py-3 rounded-xl shadow-md border border-red-500">
            <span className="text-sm text-red-300">Unsold</span>
            <div className="text-2xl font-bold text-red-400">
              {state.unsoldPlayers}
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Auction Stage */}
          <div className="bg-gradient-to-br from-black/60 to-blue-900/60 rounded-2xl p-8 shadow-2xl border border-blue-500 aspect-square flex items-center justify-center">
            {state.currentPlayer ? (
              <div className="flex flex-col items-center gap-8 animate-pulse">
                <div className="ring-4 ring-yellow-400/40 rounded-xl p-4">
                  <PlayerCard player={state.currentPlayer} />
                </div>
                <BiddingControls />
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold text-yellow-400">
                  Ready for the next bid?
                </div>
                <p className="text-blue-200 text-sm">
                  Start the auction and let the bidding war begin 🔥
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <Button
                    className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 rounded-xl font-bold shadow-lg active:scale-95 transition"
                    onClick={handleStartAuction}
                    disabled={isAnimating || availablePlayers.length === 0}
                  >
                    🚨 Start Auction
                  </Button>
                  <ManualSoldModal />
                </div>
              </div>
            )}
          </div>

          {/* Teams */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/50 rounded-xl border border-blue-500 shadow-lg hover:scale-[1.02] transition">
                <TeamCard team={state.teams[0]} />
              </div>
              <div className="bg-black/50 rounded-xl border border-blue-500 shadow-lg hover:scale-[1.02] transition">
                <TeamCard team={state.teams[1]} />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/50 rounded-xl border border-blue-500 shadow-lg hover:scale-[1.02] transition">
                <TeamCard team={state.teams[2]} />
              </div>
              <div className="bg-black/50 rounded-xl border border-blue-500 shadow-lg hover:scale-[1.02] transition">
                <TeamCard team={state.teams[3]} />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 bg-black/50 rounded-xl border border-blue-500 shadow-lg hover:scale-[1.02] transition">
              <TeamCard team={state.teams[4]} />
            </div>
             <div className="col-span-1 md:col-span-2 bg-black/50 rounded-xl border border-blue-500 shadow-lg hover:scale-[1.02] transition">
              <TeamCard team={state.teams[5]} />
            </div>
          </div>
        </div>

        {/* Undo */}
        {state.transactions.length > 0 && (
          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black font-semibold transition"
              onClick={() => dispatch({ type: 'UNDO_TRANSACTION' })}
            >
              ⏪ Undo Last Bid
            </Button>
          </div>
        )}

        {/* Unsold Players */}
        {unsoldPlayers.length > 0 && (
          <div className="bg-black/50 rounded-xl p-8 shadow-lg mt-8 border border-red-500">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              ❌ Unsold Players
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unsoldPlayers.map(player => (
                <div
                  key={player.id}
                  className="bg-red-900/40 px-4 py-2 rounded-lg text-sm border border-red-400 shadow"
                >
                  {player.name} <span className="text-red-300">({player.type})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )}
  </div>
</div>

  )
}

