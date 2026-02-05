// s

// type User = {
//   firstName: string;
//   lastName?: string;
//   theme?: "light" | "dark";
// };

const getFullName = (user: User): string => {
  return user.lastName ? `${user.firstName} ${user.lastName}` : user.firstName;
};

const getTheme = (user: User): "light" | "dark" => {
  return user.theme ?? "light";
};

const people: User[] = [
  {
    firstName: "Dan",
    lastName: "K",
  },
  {
    firstName: "Sarah",
    lastName: "L",
  },
];

// function doubleNumbers(nums) {
//   return nums.map((n) => n * 2);
// }

const doubleNumbers = (nums: number[]): number[] => {
  return nums.map((n) => n * 2);
};

type User = {
  name: string;
  age: number;
};

const formatUser = (user: User): string => {
  return `${user.name} (${user.age})`;
};

type User2 = {
  id: number;
  email: string;
};

const users: User2[] = [
  { id: 1, email: "a@test.com" },
  { id: 2, email: "b@test.com" },
];

type User3 = {
  name: string;
  nickname?: string;
};

const getDisplayName = (user: User3): string => {
  return user.nickname ?? user.name;
};

type User4 = {
  isAdmin?: boolean;
  isOwner?: boolean;
};

const canAccess = (user: User4): boolean => {
  return !!user.isAdmin || !!user.isOwner;
};
