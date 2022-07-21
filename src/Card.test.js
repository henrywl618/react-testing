import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
    render(<Card src="./image1.jpg" caption="Photo by Richard Pasquarella on Unsplash" currNum={1} totalNum={3}/>)
});

it("matches the snapshot", function() {
    const {asFragment} = render(<Card src="./image1.jpg" caption="Photo by Richard Pasquarella on Unsplash" currNum={1} totalNum={3}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("matches the snapshot", function() {
    const {asFragment} = render(<Card src="./image2.jpg" caption="Photo by Pratik Patel on Unsplash" currNum={2} totalNum={3}/>);
    expect(asFragment()).toMatchSnapshot();
});
