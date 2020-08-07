import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components";

import { denim } from "./colours";

import { ButtonBox } from "./ui/ButtonBox";
import { Input } from "./ui/InputBox";
import { Title } from "./ui/Title";
import { Subtitle } from "./ui/Subtitle";

export default function Home() {
  const [show, toggleShow] = useState(true);
  return (
      <Wrapper>
        <GlobalStyle/>
        <Title>
          Bertha <i>online</i>
        </Title>
        <Subtitle>
          “An ab initio relativistic molecular electronic structure program”
        </Subtitle>
        <div>
          <ButtonBox
            label="Perhaps you already have a file..."
            description="Upload an existing input file"
          />
          <Input
            label="Enter your input file name"
            type="text"
            name="input-file-name"
            placeholder="MOLCL"
            // value={email}
            // onChange={this.handleChange}
          />
          <Input
            label="Calculation tree"
            type="text"
            name="calculation-tree"
            placeholder="TREE"
            // value={email}
            // onChange={this.handleChange}
          />
          <Input
            label="Hamiltonian"
            type="text"
            name="hamiltonian"
            placeholder="HMLT"
            // value={email}
            // onChange={this.handleChange}
          />
          <Input
            label="Continuing calculation?"
            type="boolean"
            name="continuing-calculation"
            placeholder="READIN"
            // value={email}
            // onChange={this.handleChange}
          />
          <ButtonBox
            label="Think you're finished?"
            description="Download this input file"
          />
        </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 1280px;
  width: 80vw;
`

// Affects this and all pages
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${denim};
  }
  *:focus {
    outline: 0;
  }
`;