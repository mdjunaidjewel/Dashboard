import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  range: "30d",
  userType: "all",

  setRange: (range) => set({ range }),
  setUserType: (userType) => set({ userType }),
}));
