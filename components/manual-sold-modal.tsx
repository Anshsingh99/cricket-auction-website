'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useAuction } from "../context/auction-context"

export function ManualSoldModal() {
  const { state, dispatch } = useAuction()
  const [selectedPlayer, setSelectedPlayer] = useState("")
  const [selectedTeam, setSelectedTeam] = useState("")
  const [amount, setAmount] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const availablePlayers = state.players.filter(p => p.status === 'available')

  const handleSell = () => {
    const player = state.players.find(p => p.id === selectedPlayer)
    if (!player || !selectedTeam || !amount) return

    // Ensure that the entered amount is used and converted to a number
    const parsedAmount = Number(amount)

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount")
      return
    }

    const team = state.teams.find(t => t.id === selectedTeam)
    if (!team) return

    if (team.budget < parsedAmount) {
      alert("Not enough budget to buy this player.")
      return
    }

    // Update the player's current bid with the entered amount
    const updatedPlayer = { ...player, currentBid: parsedAmount }

    // Dispatch the manual sell action with the updated player
    dispatch({
      type: 'MANUAL_SELL',
      player: updatedPlayer,
      teamId: selectedTeam,
      amount: parsedAmount
    })

    // After selling, subtract the amount from the team's budget
    dispatch({
      type: 'UPDATE_TEAM_BUDGET',
      teamId: selectedTeam,
      amount: parsedAmount
    })

    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">Manual Sold</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manual Player Sale</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Select onValueChange={setSelectedPlayer}>
            <SelectTrigger>
              <SelectValue placeholder="Select player" />
            </SelectTrigger>
            <SelectContent>
              {availablePlayers.map(player => (
              <SelectItem key={player.id} value={player.id}>
                {player.name}
              </SelectItem>
            ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectedTeam}>
            <SelectTrigger>
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent>
              {state.teams.map(team => (
                <SelectItem
                  key={team.id}
                  value={team.id}
                  disabled={team.budget < Number(amount)}
                >
                  {team.name} ({team.budget} points)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <Button onClick={handleSell}>Sell Player</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

