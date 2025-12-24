'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useAuction } from "../context/auction-context"
import { toast } from "@/components/ui/use-toast"

export function BiddingControls() {
  const { state, dispatch } = useAuction()
  const { currentPlayer, teams } = state

  if (!currentPlayer) return null

  const [inputValue, setInputValue] = useState(currentPlayer.currentBid.toString())
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)

  const handleIncrement = () => {
    const currentBid = parseInt(inputValue)
    let increment = 5
    if (currentBid >= 200) increment = 20
    else if (currentBid >= 100) increment = 10
    
    const newBid = currentBid + increment
    dispatch({ type: 'UPDATE_BID', amount: newBid })
    setInputValue(newBid.toString())
  }

  const handleDecrement = () => {
    const currentBid = parseInt(inputValue)
    let decrement = 5
    if (currentBid > 200) decrement = 20
    else if (currentBid > 100) decrement = 10
    
    const newBid = Math.max(currentPlayer.basePrice, currentBid - decrement)
    dispatch({ type: 'UPDATE_BID', amount: newBid })
    setInputValue(newBid.toString())
  }

  const handleSell = () => {
    if (!selectedTeam) {
      toast({
        title: "No Team Selected",
        description: "Please select a team before selling the player.",
        variant: "destructive",
      })
      return
    }

    const team = teams.find(t => t.id === selectedTeam)
    if (!team) return

    if (team.playersBought >= 9) {
      toast({
        title: "Team Full",
        description: `${team.name} already has 9 players and cannot buy more.`,
        variant: "destructive",
      })
      return
    }

    if (team.budget < currentPlayer.currentBid) {
      toast({
        title: "Insufficient Balance",
        description: `${team.name} does not have sufficient balance to purchase this player.`,
        variant: "destructive",
      })
      return
    }

    dispatch({ type: 'SELL_PLAYER', teamId: selectedTeam })
    setSelectedTeam(null)
  }

  return (
    <div className="space-y-4 ">
      <div className="flex gap-2">
        <Button onClick={handleDecrement}>-</Button>
        <Input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => {
            const newBid = Math.max(currentPlayer.basePrice, parseInt(inputValue) || 0)
            dispatch({ type: 'UPDATE_BID', amount: newBid })
            setInputValue(newBid.toString())
          }}
          className="w-24 text-center"
        />
        <Button onClick={handleIncrement}>+</Button>
      </div>
      <div className="flex gap-2">
        <Select onValueChange={setSelectedTeam} value={selectedTeam || undefined}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select team" />
          </SelectTrigger>
          <SelectContent>
            {teams.map(team => (
              <SelectItem
                key={team.id}
                value={team.id}
                disabled={team.budget < currentPlayer.currentBid || team.playersBought >= 9}
              >
                {team.name} ({team.budget} points)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="default"
          className="bg-green-500 hover:bg-green-600 text-white"
          onClick={handleSell}
        >
          Sell
        </Button>
        <Button
          variant="destructive"
          onClick={() => dispatch({ type: 'MARK_UNSOLD' })}
        >
          Unsold
        </Button>
      </div>
    </div>
  )
}

