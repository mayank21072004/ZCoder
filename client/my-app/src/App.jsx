/*cmkd*/
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import Messenger from "./components/Messenger";
import AccountProvider from "./components/constants/contexts/AccountProvider";

function App(){
    const clientId='964616523530-1iqic32sqjbjqf90qb3m4sobmvfe4nfd.apps.googleusercontent.com';
    return (<GoogleOAuthProvider clientId={clientId}>
            <AccountProvider  > 

            <Messenger/>  {/*here messenger is pur whole project so we need to wrap it and children is messeneger for the accountprovider context api and we know what props are  */}
            </AccountProvider>
               
            </GoogleOAuthProvider>);
}
   
export default App;