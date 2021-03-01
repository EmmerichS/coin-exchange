import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    color: #61DBFB;
    text-align: center;
    padding: 10px;
    font-size: 1.5em;
`

export default function AccountBalance(props) {
   
        const buttonText = props.showBalance ? "Hide Balance" : "Show balance";
        let content = null;
        if (props.showBalance) {
            content = <>Balance: ${props.amount}</>
        }
        return (
            <Section>
                {content}
                <button onClick={props.hideBalance} >
                    {buttonText}
                </button>
            </Section>
        )
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}