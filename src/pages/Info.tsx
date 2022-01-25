import React from "react";
import { useUserStore } from "../stores/user.store";
import { IUser } from "../stores/user.type";

export const Info: React.FC = () => {
  const users: readonly IUser[] = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);

  const deleteUser = (user: IUser): void => {
    removeUser(user);
  };

  return (
    <div>
      {users.map((user: IUser) => (
        <div className="User" key={user.id}>
          <div>
            <h1>{user.fullName}</h1>
            <p>{user.username}</p>
          </div>
          <button onClick={() => deleteUser(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
