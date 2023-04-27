import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from './SignUp';

describe('SignUp component', () => {
  it('should submit form with valid data', async () => {
    const { getByLabelText, getByText, queryByText } = render(<SignUp />);

    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });

    const passwordInput = getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const roleInput = getByLabelText('role');
    fireEvent.change(roleInput, { target: { value: 'user' } });

    const submitButton = getByText('Signup');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText('Signed up successfully')).toBeInTheDocument();
    });
  });
});
