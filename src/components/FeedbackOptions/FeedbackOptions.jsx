import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const FeedbackOptions  = ({ options, onLeaveFeedback}) => (
    <BtnList>
        {
            options.map(option => 
                <li key={option}>
              <Btn type="button" onClick = {onLeaveFeedback} id={option} >{option}</Btn> </li>
            )
        }
        
        </BtnList> 
       
)
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,

}
export default FeedbackOptions 

const BtnList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const backColor = option => {
  switch (option) {
    case 'good':
      return '#4fbc4f';
    case 'neutral':
      return 'whitesmoke';
    case 'bad':
      return '#fb5050';
    default:
      return '#fff';
  }
};

const Btn = styled.button`
    text-transform: capitalize;
    margin-right: 30px;
    border-radius: 2px;
    border: none;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    background-color:  ${({ id }) => backColor(id)};;
`;