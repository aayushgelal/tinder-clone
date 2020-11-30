import React,{useEffect,useState} from 'react';
import Body from './Body';
import Footer from './Footer';
import Chats from "./Chats";
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatScreen from './ChatScreen';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

function App() {
  const [peopl,setpeopl]=useState([]);
  async function setfnc(){
 await axios.get("/api").then(function (response) {
    setpeopl(response.data);
  });
}
useEffect(() => setfnc(),[]);
    return (
        <div >
            <Router>

                <Switch>

                    <Route path="/" exact="true">
                        <Header />

                        <Body people={peopl}/>

                        <Footer />
                    </Route>
                    <Route path="/chat" exact="true">
                        <Header backbutton="/" />

                        <Chats people={peopl} />
                    </Route>
                    <Route path="/chat/:person">

                        <Header backbutton="/chat" />
                        <ChatScreen people={peopl}/>

                    </Route>

                </Switch>
            </Router>

        </div>
    )
  }


export default App
