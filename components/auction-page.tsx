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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          SLS Cricket Auction - Round {state.currentRound}
        </h1>

        {isAuctionComplete(state.teams) ? (
          <FinalTeamsList teams={state.teams} />
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-semibold">
                Players to be Auctioned: {state.playersToAuction}
              </div>
              <div className="text-lg font-semibold">
                Unsold Players: {state.unsoldPlayers}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="bg-white rounded-lg p-8 shadow-lg aspect-square">
                {state.currentPlayer ? (
                  <div className="flex flex-col items-center justify-center h-full gap-8">
                    <PlayerCard player={state.currentPlayer} />
                    <BiddingControls />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="text-xl">Click 'Start Auction' to begin</div>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button
                        onClick={handleStartAuction}
                        disabled={isAnimating || availablePlayers.length === 0}
                      >
                        Start Auction
                      </Button>
                      <ManualSoldModal />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TeamCard key={state.teams[0].id} team={state.teams[0]} />
                  <TeamCard key={state.teams[1].id} team={state.teams[1]} />
                </div>
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TeamCard key={state.teams[2].id} team={state.teams[2]} />
                  <TeamCard key={state.teams[3].id} team={state.teams[3]} />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <TeamCard key={state.teams[4].id} team={state.teams[4]} />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              {state.transactions.length > 0 && (
                <Button
                  variant="outline"
                  onClick={() => dispatch({ type: 'UNDO_TRANSACTION' })}
                >
                  Undo Last Transaction
                </Button>
              )}
            </div>

            {unsoldPlayers.length > 0 && (
              <div className="bg-white rounded-lg p-8 shadow-lg mt-8">
                <h2 className="text-2xl font-bold mb-4">Unsold Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {unsoldPlayers.map(player => (
                    <div key={player.id} className="text-sm">
                      {player.name} ({player.type})
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

