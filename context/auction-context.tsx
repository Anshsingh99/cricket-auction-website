'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Player, Team, Transaction } from '../types/auction'
import { initialPlayers, initialTeams } from '../data/mock-data'

interface AuctionState {
  players: Player[]
  teams: Team[]
  currentRound: number
  currentPlayer: Player | null
  transactions: Transaction[]
  playersToAuction: number
  unsoldPlayers: number
}

type AuctionAction =
  | { type: 'SELECT_PLAYER'; player: Player }
  | { type: 'UPDATE_BID'; amount: number }
  | { type: 'SELL_PLAYER'; teamId: string }
  | { type: 'MARK_UNSOLD' }
  | { type: 'START_NEW_ROUND' }
  | { type: 'UNDO_TRANSACTION' }
  | { type: 'MANUAL_SELL'; player: Player; teamId: string; amount: number }

const initialState: AuctionState = {
  players: initialPlayers,
  teams: initialTeams,
  currentRound: 1,
  currentPlayer: null,
  transactions: [],
  playersToAuction: initialPlayers.length,
  unsoldPlayers: 0
}

function auctionReducer(state: AuctionState, action: AuctionAction): AuctionState {
  switch (action.type) {
    case 'SELECT_PLAYER': {
      return {
        ...state,
        currentPlayer: action.player
      }
    }
    case 'UPDATE_BID': {
      if (!state.currentPlayer) return state
      return {
        ...state,
        currentPlayer: {
          ...state.currentPlayer,
          currentBid: action.amount
        }
      }
    }
    case 'SELL_PLAYER': {
      if (!state.currentPlayer) return state
      const team = state.teams.find(t => t.id === action.teamId)
      if (!team) return state

      if (team.playersBought >= 9 || team.budget < state.currentPlayer.currentBid) {
        return state
      }

      const transaction: Transaction = {
        type: 'sold',
        player: state.currentPlayer,
        team,
        amount: state.currentPlayer.currentBid,
        timestamp: Date.now()
      }

      return {
        ...state,
        players: state.players.map(p =>
          p.id === state.currentPlayer?.id
            ? { ...p, status: 'sold', soldTo: action.teamId }
            : p
        ),
        teams: state.teams.map(t =>
          t.id === action.teamId
            ? {
                ...t,
                budget: t.budget - state.currentPlayer.currentBid,
                playersBought: t.playersBought + 1,
                players: [...t.players, state.currentPlayer]
              }
            : t
        ),
        currentPlayer: null,
        transactions: [...state.transactions, transaction],
        playersToAuction: state.playersToAuction - 1
      }
    }
    case 'MARK_UNSOLD': {
      if (!state.currentPlayer) return state
      const transaction: Transaction = {
        type: 'unsold',
        player: state.currentPlayer,
        timestamp: Date.now()
      }
      return {
        ...state,
        players: state.players.map(p =>
          p.id === state.currentPlayer?.id
            ? { ...p, status: 'unsold' }
            : p
        ),
        currentPlayer: null,
        transactions: [...state.transactions, transaction],
        playersToAuction: state.playersToAuction - 1,
        unsoldPlayers: state.unsoldPlayers + 1
      }
    }
    case 'START_NEW_ROUND': {
      return {
        ...state,
        currentRound: state.currentRound + 1,
        players: state.players.map(p =>
          p.status === 'unsold'
            ? { ...p, status: 'available', currentBid: p.basePrice }
            : p
        ),
        playersToAuction: state.unsoldPlayers,
        unsoldPlayers: 0
      }
    }
    case 'UNDO_TRANSACTION': {
      const lastTransaction = state.transactions[state.transactions.length - 1]
      if (!lastTransaction) return state

      if (lastTransaction.type === 'sold') {
        return {
          ...state,
          players: state.players.map(p =>
            p.id === lastTransaction.player.id
              ? {
                  ...p,
                  status: 'available',
                  currentBid: p.basePrice,
                  soldTo: undefined
                }
              : p
          ),
          teams: state.teams.map(t =>
            t.id === lastTransaction.team.id
              ? {
                  ...t,
                  budget: t.budget + lastTransaction.amount,
                  playersBought: t.playersBought - 1,
                  players: t.players.filter(p => p.id !== lastTransaction.player.id)
                }
              : t
          ),
          transactions: state.transactions.slice(0, -1),
          playersToAuction: state.playersToAuction + 1
        }
      } else if (lastTransaction.type === 'unsold') {
        return {
          ...state,
          players: state.players.map(p =>
            p.id === lastTransaction.player.id
              ? {
                  ...p,
                  status: 'available',
                  currentBid: p.basePrice
                }
              : p
          ),
          transactions: state.transactions.slice(0, -1),
          playersToAuction: state.playersToAuction + 1,
          unsoldPlayers: state.unsoldPlayers - 1
        }
      }
      return state
    }
    case 'MANUAL_SELL': {
      const team = state.teams.find(t => t.id === action.teamId)
      if (!team) return state

      const transaction: Transaction = {
        type: 'sold',
        player: action.player,
        team,
        amount: action.amount,
        timestamp: Date.now()
      }

      return {
        ...state,
        players: state.players.map(p =>
          p.id === action.player.id
            ? { ...p, status: 'sold', soldTo: action.teamId, currentBid: action.amount }
            : p
        ),
        teams: state.teams.map(t =>
          t.id === action.teamId
            ? {
                ...t,
                budget: t.budget - action.amount,
                playersBought: t.playersBought + 1,
                players: [...t.players, action.player]
              }
            : t
        ),
        transactions: [...state.transactions, transaction],
        playersToAuction: state.playersToAuction - 1
      }
    }
    default:
      return state
  }
}

const AuctionContext = createContext<{
  state: AuctionState
  dispatch: React.Dispatch<AuctionAction>
} | null>(null)

export function AuctionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(auctionReducer, initialState)

  return (
    <AuctionContext.Provider value={{ state, dispatch }}>
      {children}
    </AuctionContext.Provider>
  )
}

export function useAuction() {
  const context = useContext(AuctionContext)
  if (!context) {
    throw new Error('useAuction must be used within an AuctionProvider')
  }
  return context
}

