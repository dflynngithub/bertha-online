import * as React from "react";
import styled from "styled-components";
import { darkGrey, paleMagenta } from "../colours";
import { smallInstruction, directInput } from "../styles";

interface Props 
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>, 
        HTMLInputElement
        > {
    label: string;
}

const Label = styled('div')`
    ${smallInstruction};
    color: ${darkGrey};
`

const InputContainer = styled('div')`
    ${directInput};
    display: flex;
    align-items: center;
    width: 100%;
    padding: 4px 0;
    border-radius: 3px;
    border: 1px solid ${darkGrey};
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, 
        rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
    background: rgb(255, 255, 255);
    cursor: textl
    margin-top: 4px;
    margin-bottom: 4px;
`

const InputWithoutBorder = styled('input')`
    font-size: inherit;
    font-family: 'Monaco';
    line-height: inherit;
    border: none;
    background: none;
    width: 100%;
    display: block;
    resize: none;
    padding: 0 6px;
    &::placeholder {
        color: ${paleMagenta};
        opacity: 1;
    }
`

const Wrapper = styled('div')`
    margin: 10px 0;
`

export class Input extends React.PureComponent {
    render() {
        const { label, ...inputProps } = this.props;
        return (
            <Wrapper>
                <Label>{label}</Label>
                <InputContainer>
                    <InputWithoutBorder {...inputProps as any}/>
                </InputContainer>
            </Wrapper>
        )
    }
}