import styled from "styled-components";

export const Quantity = styled.div`
    width: 100px;
    display: flex;
`

export const Button = styled.button`
    height: 30px;
    width: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0px 1px;
    font-weight: 700;
    font-size: .9rem;

    &:first-child {
        border-radius: 10px 0px 0px 10px;
    }

    &:last-child {
        border-radius: 0px 10px 10px 0px;
    }
`

export const Value = styled.input`
    width: 40px;
    height: 30px;
    text-align: center;
    border: none;
    outline: none;
    font-weight: 700;
`