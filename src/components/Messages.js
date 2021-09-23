import React from "react";
import styled from "styled-components"; 

function Messages({ message, timestamp, user, userImage }) {
    return (
        <MessageContainer>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                    <p>{message}</p>
                </h4>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Messages;

const MessageContainer = styled.div`
    
`;

const MessageInfo = styled.div`

`;