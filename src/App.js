import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Menu from "./Menu";
import HomePage from "./HomePage";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import WhyDogPage from "./WhyDogPage";
import PopDogsPage from "./PopDogsPage";
import ComparePage from "./ComparePage";
import LostDogPage from "./LostDogPage";
import DataStorage from "./DataStorage";
import AnnsPage from "./AnnsPage";
import { connect } from "react-redux";


export default class App extends React.Component {
    render() {
        const dataStorage = new DataStorage();

        return (

                <div className="App">
                    <Menu

                            OnChange={(p) => {
                                window.location = p
                            }}
                    >
                    </Menu>
                    <BrowserRouter>
                        <Switch>
                            <Route path={"/" + Menu.PAGE_HOME}
                                   component={() => {
                                       return (<HomePage CurrPage={Menu.PAGE_HOME}/>)
                                   }}/>
                            <Route path={"/" + Menu.PAGE_WHYDOG}
                                   component={() => {
                                       return (<WhyDogPage CurrPage={Menu.PAGE_WHYDOG}/>)
                                   }}/>
                            <Route path={"/" + Menu.PAGE_POPDOGS}
                                   component={() => {
                                       return (<PopDogsPage CurrPage={Menu.PAGE_POPDOGS}/>)
                                   }}/>
                            <Route path={"/" + Menu.PAGE_COMPARE}
                                   component={() => {
                                       return (<ComparePage CurrPage={Menu.PAGE_COMPARE}/>)
                                   }}/>
                            <Route path={"/" + Menu.PAGE_LOST_DOG}
                                   component={() => {
                                       return (<LostDogPage DataStorage={dataStorage} CurrPage={Menu.PAGE_LOST_DOG}/>)
                                   }}/>
                            <Route path={"/" + Menu.ANNOUNCEMENTS}
                                   component={() => {
                                       return (<AnnsPage DataStorage={dataStorage} CurrPage={Menu.ANNOUNCEMENTS}/>)
                                   }}/>
                            <Route path="/"
                                   component={() => {
                                       return (<Redirect to={"/" + Menu.PAGE_HOME}/>)
                                   }}/>
                        </Switch>
                    </BrowserRouter>
                </div>

        );
    }
}

// export default connect(
//         state => ({
//             language: state
//         }),
//         dispatch => ({})
// )(App);