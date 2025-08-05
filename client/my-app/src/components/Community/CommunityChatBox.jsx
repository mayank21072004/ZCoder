import CommunityChatHeader from "./CommunityChatHeader";
import CommunityMessages from "./CommunityMessages";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100vh; /* Full height to demonstrate alignment */
    justify-content: flex-end; /* Align items from the bottom */
`;

function CommunityChatBox() {
    return (
        <Container>
            <CommunityChatHeader />
            <CommunityMessages />
        </Container>
    );
}

export default CommunityChatBox;
