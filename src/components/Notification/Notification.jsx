import PropTypes from 'prop-types';
import styled from "styled-components";

const Notification = ({ message }) => {
    return (
       <Message>{message }</Message> 
    )
    
}
 
Notification.propTypes = {
    message: PropTypes.string.isRequired

}
export default Notification
    
const Message = styled.p`
    font-size: 25px;
`