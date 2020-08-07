import * as React from "react";

import styled from "styled-components";
import { elfGreen, lemon, darkGrey, paleMagenta } from "../colours";
import { buttonText, smallInstruction } from "../styles";

const Label = styled('div')`
    ${smallInstruction};
    color: ${darkGrey};
`

export const GreenButton = styled('button')`
    ${buttonText};
    align-items: center;
    user-select: none;
    display: inline-flex;
    justify-content: left;
    flex-shrink: 0;
    border-radius: 3px;
    background: ${paleMagenta};
    color: ${darkGrey};
    border: 1px solid ${darkGrey};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
    width: 100%;
    padding: 4px 6px;
    cursor: pointer;
    &:hover {
        background-color: ${lemon}
    }
`

const Wrapper = styled('div')`
    margin: 10px 0;
`

export class ButtonBox extends React.PureComponent {
    render() {
        const { label, description } = this.props;
        return (
            <Wrapper>
                <Label>{label}</Label>
                <GreenButton>
                    {description}
                </GreenButton>
            </Wrapper>
        )
    }
}