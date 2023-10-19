"use client";

import { Badge } from "@/components/ui/badge";
import { useCompetitionStore } from "@/stores/competition-store";

export function StatusBadge() {
  const { isFinished } = useCompetitionStore();

  return (
    <Badge
      variant={isFinished ? "success" : "destructive"}
      className="h-fit mt-4 sm:mt-0"
    >
      {isFinished ? "Ready to score" : "In progress"}
    </Badge>
  );
}
