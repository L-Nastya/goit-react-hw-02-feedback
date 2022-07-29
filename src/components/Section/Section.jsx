import PropTypes from 'prop-types';
// import { Fragment } from 'react';
import styled from 'styled-components';


function Section({ title, children }) {
  
    return (
      <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
        {children}      
       </SectionContainer>
    )
 
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section;

const SectionContainer = styled.div`
    text-align: center;
`;

const SectionTitle = styled.h2`
    font-size: 30px;
`;