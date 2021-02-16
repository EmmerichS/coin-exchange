import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    color: #61DBFB;
    text-align: center;
    padding: 10px;
    font-size: 1.5em;
`

export default class AccountBalance extends Component {

    render() {
        const buttonText = this.props.showBalance ? "Hide Balance" : "Show balance";
        let content = null;
        if (this.props.showBalance) {
            content = <>Balance: ${this.props.amount}</>
        }
        return (
            <Section>
                {content}
                <button onClick={this.props.hideBalance} >
                    {buttonText}
                </button>
            </Section>
        )
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}