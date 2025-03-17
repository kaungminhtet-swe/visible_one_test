import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function fallbackName(fullname: string): string {
  if (!fullname || fullname.trim() === "") {
    return "";
  }

  const names = fullname.trim().split(" ");

  // For single names, return the first two characters
  if (names.length === 1) {
    return names[0].substring(0, 2).toUpperCase();
  }

  // For multiple names, take first character of first and last name
  const firstInitial = names[0][0] || "";
  const lastInitial = names[names.length - 1][0] || "";

  return (firstInitial + lastInitial).toUpperCase();
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
