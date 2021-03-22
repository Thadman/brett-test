import React, { useState } from "react";

export default function PhoneBook({ onSubmit }) {
  const [newNumber, setNewNumber] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewNumber({
      ...newNumber,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newNumber);
    setNewNumber({
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>First Name</label>
      <input
        type="text"
        onChange={handleChange}
        value={newNumber.firstName}
        name="firstName"
      />
      <label>Last Name</label>
      <input
        type="text"
        onChange={handleChange}
        value={newNumber.lastName}
        name="lastName"
      />
      <label>Phone Number</label>
      <input
        type="text"
        onChange={handleChange}
        value={newNumber.phone}
        name="phone"
      />
      <button>Submit</button>
    </form>
  );
}
