import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive feedback: {good > 0 ? positivePercentage : 0} % </StatItem>
    </StatList>
       
);
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}

export default Statistics

const StatList = styled.ul`
    list-style: none;
    padding-inline-start: 0px;
`;

const StatItem = styled.li`
    margin-bottom: 10px;
    font-size: 25px;
`;