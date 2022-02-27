import React from "react";
import { ReactDOM } from "react-dom";
import Button from "../button";
import {isTSAnyKeyword} from "@babel/types";
import { render, screen } from '@testing-library/react';

it("renders without crashing", () => {
    render(<Button label="test" fun={()=>{}}/>);
    const button = screen.getByText("test");
});
