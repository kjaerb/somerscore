import { create } from "zustand";

interface CompetitionStore {
  isFinished: boolean;
  setIsFinished: (isFinished: boolean) => void;
}

export const useCompetitionStore = create<CompetitionStore>((set) => ({
  isFinished: true,
  setIsFinished: (isFinished) => set({ isFinished }),
}));
