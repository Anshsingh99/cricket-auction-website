import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Team } from "../types/auction";

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Card className="w-full md:w-[calc(70%-0.5rem)] lg:w-[calc(80%-0.5rem)] xl:w-[calc(90%-0.5rem)] bg-green-100">
      <CardHeader>
        <CardTitle>{team.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-xl font-medium">Budget: {team.budget} points</div>
        <div className="text-lg">Players Bought: <span className="font-bold">{team.playersBought}</span>/9</div>
        <div className="text-xl font-medium">Players:</div>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {team.players.map((player) => (
            <div key={player.id} className="text-sm">
              <span className="font-bold text-xl">{player.name}</span>
              <span className="text-xl"> ({player.currentBid} points)</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

