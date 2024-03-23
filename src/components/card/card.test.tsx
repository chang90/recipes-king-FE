import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card';

describe('Card', () => {
  test('renders header', () => {
    render(<Card title="card title" />);
    const headerElement = screen.getByText(/card title/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders description', () => {
    render(<Card title="card title" description="card description" />);
    const descriptionElement = screen.getByText(/card description/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
