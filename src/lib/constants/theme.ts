export const themes = ["Light", "Dark", "System"] as const;

export type Theme = (typeof themes)[number];
