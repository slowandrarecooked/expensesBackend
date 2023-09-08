import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };

    try {
      await axios.post(`http://localhost:8000/users`, payload);
      alert("user added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter full name"
          onChange={(e) => setName(e.target.value)}
        />
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};
