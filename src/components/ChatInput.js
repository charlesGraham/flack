import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import {db} from "../firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId, chatRef }) {

    const [input, setInput] = useState("");

    const sendMessage = e => {
        e.preventDefault(); // prevents refresh

        if (!channelId) {
            return false;
        }

        // pulls in message data
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Charles Graham",
            userImage: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/12017523_10153210777834157_2813023791713451007_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ujkZiO6mKcgAX96lImp&_nc_ht=scontent-lax3-1.xx&oh=49315975301875d1e051289f1d0fc059&oe=6173EAEA', 
        });

        //auto scroll to newest message
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput('');
    }

    return (
        <ChatInputContainer>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;
