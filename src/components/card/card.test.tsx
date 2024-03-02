import React from "react";
import { render, screen } from '@testing-library/react';
import Card from "./card";

test('renders header', () => {
  render(<Card title="card title"/>);
  const headerElement = screen.getByText(/card title/i);
  expect(headerElement).toBeInTheDocument();
})