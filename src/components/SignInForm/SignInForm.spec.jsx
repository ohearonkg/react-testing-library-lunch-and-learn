import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import SignInForm from "./";
import { signInUser as mockSignInUser } from "../../api/signInUser";

const usernameInputLabel = /username/i;
const sampleUsername = "SAMPLEUSERNAME";

const passwordInputLabel = /password/i;
const samplePassword = "SAMPLEPASSWORD";

const submitButtonText = /submit/i;
const sampleUserID = "123";

jest.mock("../../api/signInUser", () => {
  const sampleUserID = "123";
  return {
    signInUser: jest.fn(() => Promise.resolve({ id: sampleUserID }))
  };
});

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
   * Should attempt to sign the user in once they
   * have submitted the form
   */
  it("Should attempt to sign in the user once they have submitted the form", () => {
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

    expect(mockSignInUser).toHaveBeenCalledWith({
      username: sampleUsername,
      password: samplePassword
    });
  });

  /**
   * It should redirect the user to their profile
   * page after sigin
   */
  it.only("Should redirect the user to their profile page after login", async () => {
    const { getByLabelText, getByText, history } = setup();

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

    await wait(() => expect(history).toHaveLength(2));
    expect(history.entries[1].pathname).toEqual(`/user/${sampleUserID}`);
    expect(history.action).toEqual("PUSH");
  });
});
