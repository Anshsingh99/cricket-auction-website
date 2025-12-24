import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Player } from "../types/auction"

interface PlayerCardProps {
  player: Player
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card className="w-[300px] bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300">
      <CardHeader>
        <CardTitle>{player.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative w-full aspect-square">
          <Image
            src={player.image}
            alt={player.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="space-y-2 text-lg">
          <div>Type: {player.type}</div>
          <div>Current Bid: <span className="font-bold text-xl">{player.currentBid} points</span></div>
        </div>
      </CardContent>
    </Card>
  )
}

