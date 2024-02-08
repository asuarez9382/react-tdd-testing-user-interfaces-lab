import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />)
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of myself with alt text indentifying content of image", ()=>{
    //Arrange
    render(<App />)
    //Act
    const image = screen.getByRole("img")
    //Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'myself');
  })

  test("displays a second-level heading with the text 'About Me'",()=> {
    //Arrange
    render(<App />)
    //Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/,
        exact: true,
        level: 2
    })
    //Assert
    expect(secondLevelHeading).toBeInTheDocument();
  })

  test("displays a paragraph for my biography", ()=>{
    //Arrange
    render(<App />)
    //Act
    const paragraph = document.querySelector("p")
    //Assert
    expect(paragraph).toBeInTheDocument();
  })

  test("displays a link to my github page", ()=> {
    //Arrange
    render(<App />)
    //Act
    const githubLink = screen.getByRole("link", { name: /github/i });
  
    //Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.href).toMatch(/github\.com/i); // Optional: Check if the href matches the GitHub domain
});
  