import React from "react";
import { useUserStore } from "../stores/user.store";
import { IUser } from "../stores/user.type";

export const Register: React.FC = () => {
  const [user, setUser] = React.useState<IUser | {}>();
  const addUser = useUserStore((state) => state.addUser);

  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(user as IUser);
  };

  const reset = () => {};
  return (
    <div className="register-form">
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            id="fullName"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            id="email"
            type="text"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            type="password"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group form-check">
          <input
            id="acceptTerms"
            type="checkbox"
            className={`form-check-input`}
            onChange={handleUserData}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
        </div>

        <div className="form-group buttons-group">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
