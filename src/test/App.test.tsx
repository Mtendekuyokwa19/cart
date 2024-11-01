
// App.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
describe("App component", () => {
  it("renders correct heading", () => {
    const{container}=render(<App />);
    expect(container).toMatchSnapshot();
  }


  );
 it("clicke buttone",async()=>{

    const user=userEvent.setup()
    render(<App/>)
   await user.click(screen.getByTestId("button")) 
    let header=screen.getByRole("heading");
    expect(header.textContent).toMatch(/Radical Rhinos/i)

  }) 
});

