import { render, screen } from "@testing-library/react";
import { Users } from "./users";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          name: "Bruce Wayne",
        },
        {
          name: "Clark Kent",
        },
        {
          name: "Princess Diana",
        },
      ]),
  }),
) as jest.Mock;

describe("Users", () => {
  test("renders correctly", async () => {
    await render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    await render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
