import React from 'react'
import styled from 'styled-components'
import { FontSize2 } from '../../../GlobalStyles'
import { FaChevronDown } from "react-icons/fa";

const Wrapper = styled.div`
    padding: 1rem 10px; 
    border-radius: 10px;
    background-color: #343547;
    cursor: pointer;
`
const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h1 {
        font-size: ${FontSize2};
        margin-right: 3rem;
        text-transform: capitalize;
    }
`
const ChevronRotate = styled(FaChevronDown)`
    font-size: ${FontSize2};
    color: ${({theme}) => theme.body};
    transform: rotate(${({$opened, index}) => $opened === index ? '-180deg' : '0'});
    transition: transform 0.5s ease;
`
const Dropdown = styled.p`
    max-width: fit-content;
    padding: 10px 10px 0;
    font-size: ${FontSize2};
    color: ${({theme}) => theme.body};
`

export default function FaqAccordion({showAnswer, opened, item, index}) {
  return (
    <Wrapper onClick={() => showAnswer(index)}>
        <Wrap>
            <h1>{item.question}</h1>
            <ChevronRotate $opened={opened} index={index} />
        </Wrap>
        { opened === index && <Dropdown>{item.answer}</Dropdown> }
    </Wrapper>
  )
}
