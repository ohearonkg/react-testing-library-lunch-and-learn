import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignInForm from "./";

const usernameInputLabel = /username/i;
const sampleUsername = "SAMPLEUSERNAME";

const passwordInputLabel = /password/i;
const samplePassword = "SAMPLEPASSWORD";

const submitButtonText = /submit/i;

const sampleOnSubmitFunction = jest.fn();

const setup = () =>
  render(<SignInForm onSubmitFunction={sampleOnSubmitFunction} />);

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

    // Enter Text Into Username Field
    fireEvent.change(usernameInput, { target: { value: sampleUsername } });

    // Expect Text To Be Displayed
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

    // Enter Text Into Password Field
    fireEvent.change(passwordInput, { target: { value: samplePassword } });

    // Expect Text To Be Displayed
    expect(getByDisplayValue(samplePassword));
  });

  /**
   * Submitting The Form
   */
  it("Should allow the user to submit the form", () => {
    const { getByLabelText, getByText } = setup();

    // Items We Need
    const usernameInput = getByLabelText(usernameInputLabel);
    const passwordInput = getByLabelText(passwordInputLabel);
    const submitButton = getByText(submitButtonText);

    // Enter Text Into Username Field
    fireEvent.change(usernameInput, { target: { value: sampleUsername } });

    // Enter Text Into Password Field
    fireEvent.change(passwordInput, { target: { value: samplePassword } });

    // Click The Submit Button
    fireEvent.click(submitButton);

    // Expectations
    expect(sampleOnSubmitFunction).toHaveBeenCalledTimes(1);
    expect(sampleOnSubmitFunction).toHaveBeenCalledWith({
      username: sampleUsername,
      password: samplePassword
    });
  });
});
