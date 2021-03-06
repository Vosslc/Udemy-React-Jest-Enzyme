import React from "react";
// import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders hello world", () => {
//   const { getByText } = render(<App />);
//   const helloWorldElent = getByText(/hello world/i);
//   expect(helloWorldElent).toBeInTheDocument();
// });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeTruthy();
  // expect(wrapper).toBeFalsy();
});
