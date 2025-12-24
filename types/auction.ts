export interface Player {
  id: string
  name: string
  type: string
  basePrice: number
  currentBid: number
  image: string
  status: 'available' | 'sold' | 'unsold'
  soldTo?: string
}

export interface Team {
  id: string
  name: string
  budget: number
  playersBought: number
  players: Player[]
}

export interface Transaction {
  player: Player
  team: Team
  amount: number
  timestamp: number
}

