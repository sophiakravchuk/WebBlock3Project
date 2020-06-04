import React from 'react';
import './App.css';
import {Page} from "./Page";
import {BrowserRouter} from "react-router-dom";
import Menu from "./Menu";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";

function App() {
    return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"+Menu.PAGE_HOME}
                               component={() => {return (<Page CurrPage={Menu.PAGE_HOME}/>)
                               }}/>
                        <Route path={"/"+Menu.PAGE_WHYDOG}
                               component={() => {return (<Page CurrPage={Menu.PAGE_WHYDOG}/>)
                               }}/>
                        <Route path={"/"+Menu.PAGE_POPDOGS}
                               component={() => {return (<Page CurrPage={Menu.PAGE_POPDOGS}/>)
                               }}/>
                        <Route path={"/"+Menu.PAGE_COMPARE}
                               component={() => {return (<Page CurrPage={Menu.PAGE_COMPARE}/>)
                               }}/>
                        <Route path="/"
                               component={() => {return (<Redirect to={"/"+Menu.PAGE_HOME}/>)
                               }}/>
                    </Switch>

                </BrowserRouter>
            </div>

    );
}

export default App;

