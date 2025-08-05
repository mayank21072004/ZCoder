
import { Box, styled,Typography,  Divider } from '@mui/material';



const Component = styled(Box)`
    background: black;
    padding: 30px 0;
    text-align: center;
    height: 50%;

`;

const Container = styled(Box)`
    padding: 0 200px;
`;
    
// const Image = styled('img')({
//     marginTop: 100,
//     width: 400
// })
   
const Title = styled(Typography)`
    font-size: 32px;
    
    font-weight: 200;
    color: #FFF;
    margin-top: 25px 0 10px 0;
    
`;

// const SubTitle = styled(Typography)`
//     font-size: 14px;
//     color: #667781;
//     font-weight: 400;
//     font-family: inherit;
// `;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;

const EmptyChat = () => {
    
    return (
        <Component>
            <Container>
                
                <Title>Click on user to start chatting</Title>
            </Container>
        </Component>
    )
}

export default EmptyChat;