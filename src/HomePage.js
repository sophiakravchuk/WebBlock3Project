import React from "react";
import Button from "./Button";
import Menu from "./Menu";
import {connect} from "react-redux";


class HomePage extends React.Component {
    constructor(p) {
        super(p);
        console.log(this.props.CurrPage)
    }

    OnPageChange(pageId) {
        window.location = pageId
    }

    getRootClassName() {
        return this.props.CurrPage;
    }

    getContentClassName() {
        const totnString = this.props.CurrPage;
        return (totnString || "").concat("Content");
    }

    render() {
        return (
                <div className={this.getRootClassName()}>
                    <div className={this.getContentClassName()}>
                        <h1>{this.props.language === "ENG" ? "Do you want a dog?" : "Хочеш собачку?" }</h1>
                        <div className="btns">
                            <Button
                                    Caption={this.props.language === "ENG" ? "Why a dog?" : "Чому собачка?"}
                                    PageName={Menu.PAGE_WHYDOG}
                                    Disabled={false}
                                    OnChange={(p) => {
                                        this.OnPageChange(p)
                                    }}
                            />
                            <Button
                                    Caption={this.props.language === "ENG" ? "Learn more" : "Дізнатися більше"}
                                    PageName={Menu.PAGE_POPDOGS}
                                    Disabled={false}
                                    OnChange={(p) => {
                                        this.OnPageChange(p)
                                    }}
                            />
                        </div>
                    </div>
                </div>
        );
    }
}


export default connect(
        state => ({
            language: state
        }),
        dispatch => ({
            onChangeLanguage: (lang) => {
                dispatch({ type: 'LANGUAGE', payload: lang })
            }})
)(HomePage);
