import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const FeedbackOptions  = ({ onGood, onNeutral, onBad}) => (
        <div>
        <BtnGood type="button" onClick = {onGood}>Good</BtnGood>
        <BtnNeutral type="button" onClick = {onNeutral}>Neutral</BtnNeutral>
        <BtnBad type="button" onClick = {onBad}>Bad</BtnBad>
        </div> 
       
)
FeedbackOptions.propTypes = {
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired,

}
export default FeedbackOptions 



const BtnGood = styled.button`
    width: 25%;
    margin-right: 20px;
    border-radius: 2px;
    border: none;
    text-align: center;
    background-color: #4fbc4f;
    cursor: pointer;
    font-size: 20px;
`;

const BtnNeutral = styled.button`
    width: 25%;
    margin-right: 20px;
    border-radius: 2px;
    border: none;
    text-align: center;
    background-color: whitesmoke;
    cursor: pointer;
    font-size: 20px;
`;

const BtnBad = styled.button`
    width: 25%;
    margin-right: 20px;
    border-radius: 2px;
    border: none;
    text-align: center;
    background-color: #fb5050;
    cursor: pointer;
    font-size: 20px;
`;