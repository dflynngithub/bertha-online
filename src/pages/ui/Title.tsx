import styled from "styled-components";
import { title } from "../styles";
import { paleMagenta, black } from "../colours";

export const Title = styled('div')`
    ${title};
    color: ${paleMagenta};
    text-align: center;
    margin: 30px;
    -webkit-text-stroke: 2px ${black};
`