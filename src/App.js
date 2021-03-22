import React, { useState } from "react";
import "./App.css";
import PhoneBook from "./PhoneBook";
import Contact from "./Contact";

function App() {
  const [phoneNumber, setPhoneNumber] = useState([
    {
      firstName: "Thad",
      lastName: "Hoskin",
      phone: "0424097567",
    },
  ]);

  const handleSubmit = (newNumber) => {
    setPhoneNumber([...phoneNumber, newNumber]);
  };

  return (
    <>
      <h2>Phone Book</h2>
      <PhoneBook onSubmit={handleSubmit} />
      <Contact phoneNumber={phoneNumber} />
    </>
  );
}

export default App;
