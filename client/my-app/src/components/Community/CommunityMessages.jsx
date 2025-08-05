import { Box, styled } from "@mui/material";
import Footer from "./communityFooter.jsx";
import SingleMessage from "./communitySingleMessage.js";
import { useState, useRef, useContext, useEffect } from "react";
import { getCMessages, newCMessage } from "../../service/api.js";
import { AccountContext } from "../constants/contexts/AccountProvider.jsx";

const Container = styled(Box)`
    background-size: 50%;
    background-color: black;
`;

const Contai = styled(Box)`
    padding: 1px 30px;
`;

const Component = styled(Box)`
    height: 65vh;
    overflow-y: scroll;
`;

function CommunityMessages() {
    const { account, socket } = useContext(AccountContext);
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const scrollRef = useRef();

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getCMessages();
            setMessages(data);
        };
        getMessageDetails();
    }, [newMessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' });
    }, [messages]);

    useEffect(() => {
        socket.current.on('getCommunityMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            });
        });
    }, [socket]);

    useEffect(() => {
        incomingMessage && setMessages((prev) => [...prev, incomingMessage]);
    }, [incomingMessage]);

    async function sendText(e) {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                senderId: account.sub,
                name: account.name,
                text: value,
                type: 'text'
            };

            socket.current.emit('sendCommunityMessage', message);
            await newCMessage(message);

            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    }

    return (
        <Container>
            <Component>
                {messages && messages.map((message, index) => (
                    <Contai key={index} ref={scrollRef}>
                        <SingleMessage message={message} />
                    </Contai>
                ))}
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
            />
        </Container>
    );
}

export default CommunityMessages;
