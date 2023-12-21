"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useClubs } from "@/hooks/use-clubs";

export function ClubSelect() {
  const {} = useClubs();

  function onSelectChange() {}

  return (
    <Select onValueChange={onSelectChange}>
      <SelectTrigger className="max-w-fit gap-4">Club</SelectTrigger>
      <SelectContent>
        <SelectItem value={"haslevTT"} key={"haslevTT"}></SelectItem>
      </SelectContent>
    </Select>
  );
}
