import create from "zustand";
import { IUser } from "./user.type";

const userStore = create((set: any) => ({
  users: [
    {
      id: 1,
      fullName: "John",
      username: "John123",
      email: "john@hotmail.com",
      password: "123456",
      acceptTerms: true,
    },
    {
      id: 2,
      fullName: "Terry",
      username: "Terry123",
      email: "terry@hotmail.com",
      password: "123456",
      acceptTerms: true,
    },
  ],
  addUser: (user: IUser) =>
    set((state: any) => ({
      users: [
        ...state.users,
        {
          fullName: user.fullName,
          id: Math.random(),
          username: user.username,
          password: user.password,
          email: user.email,
          acceptTerms: user.username,
        },
      ],
    })),
  removeUser: (user: IUser) =>
    set((state: any) => ({
      users: state.users.filter((u: any) => u.id !== user.id),
    })),
}));

export const useUserStore = userStore;
