import type { User } from "../types/types";

export async function fetchUser(premium: boolean) {
  const response = await fetch("/mock-data/profiles.json"); // mock api call

  if (!response) {
    throw new Error("could not fetch user data");
  }

  const profiles = await response.json();
  const user = profiles.find(function (u: User) {
    return u.isPremium === premium;
  });

  if (!user) {
    const prem = premium ? "premium" : "non premium";
    throw new Error("could not find " + prem + " user in database");
  }

  return user;
}
