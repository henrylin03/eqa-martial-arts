import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, userEvent, waitFor } from "../../../test-utils";
import emailjs from "@emailjs/browser";
import ContactForm from ".";

vi.mock("@emailjs/browser");

const TEST_DATA_VALID = [
  {
    firstName: "John",
    message: "This is a test message, please ignore",
    email: "john@example.com",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    message: "This is a test message. Ignore.",
    email: "jane@example.com",
  },
];

const TEST_DATA_INVALID_EMAIL = [
  {
    firstName: "Joe",
    message: "I don't have a valid email",
    email: "invalid email",
  },
  {
    firstName: "Poppy",
    message: "hello, i don't have an email",
  },
];

describe("Contact Form", () => {
  beforeEach(() => render(<ContactForm />));

  const setupTest = async (userData) => {
    const user = userEvent.setup();
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const messageInput = screen.getByLabelText(/message/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", { name: /send/i });

    await user.type(firstNameInput, userData.firstName);
    // last name is optional and shouldn't block submission
    userData.lastName && (await user.type(lastNameInput, userData.lastName));
    await user.type(messageInput, userData.message);
    userData.email && (await user.type(emailInput, userData.email));

    return {
      user,
      firstNameInput,
      lastNameInput,
      messageInput,
      emailInput,
      submitButton,
    };
  };

  it("renders form fields and submit button", () => {
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /message/i }),
    ).toBeInTheDocument();
  });

  it.each(TEST_DATA_INVALID_EMAIL)(
    "does not submit form with invalid email, and displays error message instead",
    async (testData) => {
      const { user, emailInput, submitButton } = await setupTest(testData);

      testData.email && (await user.type(emailInput, testData.email));
      await user.click(submitButton);

      await waitFor(() => {
        const emailErrorMessage = screen.getByText(/enter a valid email/i);
        expect(emailjs.send).not.toHaveBeenCalled();
        expect(emailErrorMessage).toBeInTheDocument();
      });
    },
  );

  it.each(TEST_DATA_VALID)(
    "shows loading state while sending email",
    async (testData) => {
      const {
        user,
        firstNameInput,
        lastNameInput,
        messageInput,
        emailInput,
        submitButton,
      } = await setupTest(testData);

      await user.click(submitButton);

      expect(firstNameInput).toBeDisabled();
      expect(lastNameInput).toBeDisabled();
      expect(messageInput).toBeDisabled();
      expect(emailInput).toBeDisabled();
      expect(submitButton).toBeDisabled();
    },
  );

  it.each(TEST_DATA_VALID)(
    "submits the form with valid data",
    async (testData) => {
      const { user, submitButton } = await setupTest(testData);

      await user.click(submitButton);

      await waitFor(() => {
        expect(emailjs.send).toHaveBeenCalledWith(
          expect.any(String),
          expect.any(String),
          {
            from_name: testData.lastName
              ? `${testData.firstName} ${testData.lastName}`
              : testData.firstName,
            message_html: testData.message,
            email: testData.email,
            phone: testData.phone || "Not provided",
          },
          { publicKey: expect.any(String) },
        );
      });
    },
  );

  it.each(TEST_DATA_VALID)(
    "shows success message on form submission",
    async (testData) => {
      const { user, submitButton } = await setupTest(testData);

      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText("Thank you!")).toBeInTheDocument();
        expect(submitButton).not.toBeInTheDocument();
      });
    },
  );
});
