import React, { Fragment, useContext } from "react";
import { AppBar, Box, Toolbar, styled } from '@mui/material';
import LoginDialog from "./Accounts/LoginDialog";
import ChatDialog from "./chat/chatdialog";
import { AccountContext } from "./constants/contexts/AccountProvider"; // imported the context
import ContestMain from "./Contest/ContestMain";
import Community from "./Community/Community";
import EditProfile from "./EditProfile/editProfile";
import Profile from "./Profile/profile";
import CodeCompiler from "./codeCompiler/codeCompiler";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: black;
  }
`;

const LoginHeader = styled(AppBar)({
  height: "220px",
  boxShadow: "none",
  backgroundColor: "black"
});

const ChatHeader = styled(AppBar)({
  height: "125px",
  boxShadow: "none",
  backgroundColor: "black"
});

const Component = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
});

const Content = styled(Box)({
  flexGrow: 1,
  overflowY: "auto"
});

function Messenger() {
  const { account } = useContext(AccountContext); // using account variable
  const { page } = useContext(AccountContext);
  //const { profile } = useContext(AccountContext);


  function renderComponent() {
    switch (page) {
      case 1:
        return <Profile />;
      case 2:
        return <ContestMain />;
      case 3:
        return <Community />;
      case 4:
        return <ChatDialog />;
      case 5:
        return <EditProfile />;
      case 6: 
        return <CodeCompiler/>;
      default:
        return <ContestMain />;
    }
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Component>
        {account ? (
          <Fragment>
            {page === 4 ? (
              <ChatHeader>
                <Toolbar>
                  <ChatDialog />
                </Toolbar>
              </ChatHeader>
            ) : (
              <Content>
                {renderComponent()}
              </Content>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <LoginHeader>
              <Toolbar>
                <LoginDialog />
              </Toolbar>
            </LoginHeader>
            <Content>
              {/* <LoginDialog /> */}
            </Content>
          </Fragment>
        )}
      </Component>
    </Fragment>
  );
}

export default Messenger;
