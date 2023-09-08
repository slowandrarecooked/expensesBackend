import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Tracker } from "./Tracker";
export const Dashboard = () => {
  const [UI, setUI] = useState("Tracker");
  console.log("asd");
  return (
    <div>
      <Button>Tracker</Button>
      <Button>Analytics</Button>
      <Button>History</Button>
      <Tracker />
    </div>
  );
};
