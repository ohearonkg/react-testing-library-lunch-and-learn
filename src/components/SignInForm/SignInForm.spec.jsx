import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignInForm from "./";

const usernameInputLabel = /username/i;
const sampleUsername = "SAMPLEUSERNAME";

const passwordInputLabel = /password/i;
const samplePassword = "SAMPLEPASSWORD";

const setup = () => render(<SignInForm />);

describe("Sign In Form", () => {
  /**
   * Finding Username Field
   */
  it("Should display the username field", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(usernameInputLabel));
  });

  /**
   * Enter Text Into Username Field
   */
  it("Should allow the user to enter their username", () => {
    const { getByLabelText, getByDisplayValue } = setup();
    const usernameInput = getByLabelText(usernameInputLabel);

    // Enter Text Into Userename Field
    fireEvent.change(usernameInput, { target: { value: sampleUsername } });

    // Expect text to be displayed
    expect(getByDisplayValue(sampleUsername));
  });

  /**
   * Finding Password Field
   */
  it("Should dispaly the password field", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(passwordInputLabel));
  });

  /**
   * Entering Text Into Password Field
   */
  it("Should allow the user to enter text into the password field", () => {
    const { getByLabelText, getByDisplayValue } = setup();
    const passwordInput = getByLabelText(passwordInputLabel);

    // Enter Text Into Passowrd Field
    fireEvent.change(passwordInput, { target: { value: sampleUsername } });

    // Expect text to be displayed
    expect(getByDisplayValue(samplePassword));
  });
});
