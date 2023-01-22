import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./index";

describe("Reservation form", () => {
  test("Adds one guest", () => {
    // render the App component
    render(<BookingForm />);

    // save the heading in a variable
    const guestsInput = screen.getByTestId("guests");

    guestsInput.value = +guestsInput.value + 1;

    // test assumption
    expect(guestsInput.value).toBe("2");
  });
  test("Adds 9 guest", () => {
    // render the App component
    render(<BookingForm />);

    // save the heading in a variable
    const guestsInput = screen.getByTestId("guests");

    guestsInput.value = 9;

    // test assumption
    expect(guestsInput.value).toBe("9");
  });
  test("The submit button is visible", () => {
    // render the App component
    render(<BookingForm />);

    expect(screen.getByTestId("modal-text")).toHaveTextContent("Make Your reservation");
  });
  test("The title is visible", () => {
    // render the App component
    render(<BookingForm />);
    const title = screen.getByText("Table reservation");
    expect(title).toBeInTheDocument();
  });
  test("Cant send form without Date set", () => {
    // render the App component
    render(<BookingForm />);
    const button = screen.getByTestId("modal-btn");
    const buttonText = screen.getByTestId("modal-text");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(buttonText).toBeInTheDocument();
  });
  test("Button is disabled", () => {
    // render the App component
    render(<BookingForm />);
    const button = screen.getByTestId("modal-btn");

    expect(button).toHaveProperty("disabled", true);
  });
});
