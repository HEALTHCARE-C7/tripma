'use client'
import React, { useState, FormEvent } from 'react';
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  location: string;
  phoneNumber: number;
  role: string;

}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
    gender: '',
    location: '',
    phoneNumber: 0,
    role: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Here you can submit the form data to your backend API
    console.log(formData); // For testing
    // Example of submitting data to an API endpoint using fetch
    const response = await fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
       <input
        type="text"
        placeholder="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
        <input
        type="number"
        placeholder="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
        <input
        type="text"
        placeholder="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
        <input
        type="number"
        placeholder="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
        <input
        type="text"
        placeholder="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
