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
        return (
            <Section>
                Balance: ${this.props.amount}
            </Section>
        )
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}