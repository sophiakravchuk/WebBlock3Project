import React from "react";
import {connect} from "react-redux";


export class PropsMenu{
    OnChange = (page) => {};
    CurrPage = 0;
}

class Menu extends React.Component/*PropsMenu*/ {
    static PAGE_WHYDOG = "whydog";
    static PAGE_HOME = "home";
    static PAGE_POPDOGS = "popdogs";
    static PAGE_COMPARE = "comparedogs";
    static PAGE_LOST_DOG = "lostdog";
    static ANNOUNCEMENTS = "announcement";

    constructor(props) {
        super(props);
        this.names = {};
        this.engNames = {};
        this.names[Menu.PAGE_HOME] = "Головна";
        this.names[Menu.PAGE_WHYDOG] = "Чому собачка?";
        this.names[Menu.PAGE_POPDOGS] = "Популярні породи";
        this.names[Menu.PAGE_COMPARE] = "Порівняти";
        this.names[Menu.PAGE_LOST_DOG] = "Загубилася собака";
        this.names[Menu.ANNOUNCEMENTS] = "Останні оголошення";
        this.engNames[Menu.PAGE_HOME] = "Home";
        this.engNames[Menu.PAGE_WHYDOG] = "Why dog?";
        this.engNames[Menu.PAGE_POPDOGS] = "Popular breeds";
        this.engNames[Menu.PAGE_COMPARE] = "Compare";
        this.engNames[Menu.PAGE_LOST_DOG] = "I lost my dog";
        this.engNames[Menu.ANNOUNCEMENTS] = "Latest announcements";
        console.log("MENU " + this.props.language);

        if (this.props.language !== "UKR" && this.props.language !== "ENG"){
            this.props.onChangeLanguage("UKR" );
        }
    }

    getClassName(p) {
        return p.concat("MenuButton");
    }

    renderSubMenus(curPage) {
        let result = [];
        for (let p in this.names) {
            if (p === Menu.PAGE_LOST_DOG || p === Menu.ANNOUNCEMENTS){
                continue;
            }else {
                result.push(
                        (
                                <div key={p} className={this.getClassName(p)} onClick={() => this.props.OnChange(p)}>
                                    {this.props.language === "ENG" ? this.engNames[p] : this.names[p]}
                                </div>
                        )
                );
            }
        }
        result.push(this.renderDropdown());
        result.push(this.renderLanguage());
        return result;
    }

    renderDropdown(){
        return (
                <li className="dropdown">
                    <div className="dropbtn">
                        {this.props.language === "ENG" ? this.engNames[Menu.PAGE_LOST_DOG] : this.names[Menu.PAGE_LOST_DOG]}
                    </div>
                    <div className="dropdown-content">
                        <div className={this.getClassName(Menu.PAGE_LOST_DOG)}
                             onClick={() => this.props.OnChange(Menu.PAGE_LOST_DOG)}>
                            {this.props.language === "ENG" ? "File a missing dog" : "Подати оголошення"} </div>
                        <div className={this.getClassName(Menu.ANNOUNCEMENTS)}
                             onClick={() => this.props.OnChange(Menu.ANNOUNCEMENTS)}>
                            {this.props.language === "ENG" ? "See the latest announcements" : "Подивитися останні заявки"}  </div>
                    </div>
                </li>
        );
    }

    renderLanguage(){
        return (
                <div key={"lang"} className={this.getClassName("lang")} onClick={() => {
                    if (this.props.language === "UKR"){
                        this.props.onChangeLanguage("ENG" );
                }else {
                        this.props.onChangeLanguage("UKR" );
                    }
                }}>
                    {this.props.language }
                </div>
        );
    }



    render() {
        return (
                <div className={"main-nav"}>
                    {this.renderSubMenus(this.props.CurrPage)}
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
)(Menu);
