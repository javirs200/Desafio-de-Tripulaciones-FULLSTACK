import React from "react";
import { shallow } from "enzyme";
import Pdf from "./Pdf";

describe("Pdf", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pdf />);
    expect(wrapper).toMatchSnapshot();
  });
});
