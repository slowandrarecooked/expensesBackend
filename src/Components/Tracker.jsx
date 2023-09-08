import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const Tracker = () => {
  const [tag, setTag] = useState("Income");
  const [date, setDate] = useState("");
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");
  const [value, setValue] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      date,
      tag,
      expense,
      income,
      value,
    };

    try {
      await axios.post("http://localhost:8000/trackers", payload);
      alert("tracker added");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <select name="" id="" onClick={(e) => setTag(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        {tag === "Expense" ? (
          <select onClick={(e) => setExpense(e.target.value)}>
            Category
            <option value="foodAndDrinks">Food and drinks </option>
            <option value="shopping">Shopping</option>
            <option value="housing">Housing</option>
            <option value="bills">Bills</option>
            <option value="vehicleAndTransport">Vehicle and Transport</option>
            <option value="lifeStyle">Lifestyle</option>
          </select>
        ) : (
          <select onClick={(e) => setIncome(e.target.value)}>
            Category
            <option value="salary">Salary</option>
            <option value="Gifts">Gifts</option>
            <option value="Refunds">Refunds</option>
            <option value="Other">Other</option>
          </select>
        )}
        <Input
          type="number"
          placeholder="Amount in rupees"
          onChange={(e) => setValue(e.target.value)}
        />
        <Input type="Date" onClick={(e) => setDate(e.target.value)} />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
