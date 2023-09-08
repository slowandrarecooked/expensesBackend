import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Button, Input } from "@chakra-ui/react";
import { Navigate, useSearchParams } from "react-router-dom";
import { handleLogged } from "../Redux/action";
const baseURL = "http://localhost:8000";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  let handleLogin = async (e) => {
    e.preventDefault();
    let payload = {
      email,
      password,
    };
    dispatch(handleLogged(payload));
  };
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="blue" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};
