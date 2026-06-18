import { render, screen } from "@testing-library/react";
import Home from "../pages/Home/Home";

test("renders welcome message", () => {
    render(<Home />);

    expect(
        screen.getByText(
            "Welcome to User Management App"
        )
    ).toBeInTheDocument();
});