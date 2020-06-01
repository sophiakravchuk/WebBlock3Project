import React from "react";


export class PropsMenu{
    OnChange = (page) => {};
    CurrPage = 0;
}

export default class Menu extends React.Component/*PropsMenu*/ {
    static PAGE_WHYDOG = "whydog";
    static PAGE_HOME = "home";
    static PAGE_POPDOGS = "popdogs";
    static PAGE_COMPARE = "comparedogs";
    static PAGE_LOST_DOG = "lostdog";
    static ANNOUNCEMENTS = "announcement";
    constructor(props) {
        super(props);
        this.names = {};
        this.names[Menu.PAGE_HOME] = "Головна";
        this.names[Menu.PAGE_WHYDOG] = "Чому собачка?";
        this.names[Menu.PAGE_POPDOGS] = "Популярні породи";
        this.names[Menu.PAGE_COMPARE] = "Порівняти";
        this.names[Menu.PAGE_LOST_DOG] = "Загубилася собака";
        this.names[Menu.ANNOUNCEMENTS] = "Останні оголошення";
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
                                    {this.names[p]}
                                </div>
                        )
                );
            }
        }
        result.push(this.renderDropdown());
        return result;
    }

    renderDropdown(){
        return (
                <li className="dropdown">
                    <div className="dropbtn"> Загубилася собака </div>
                    <div className="dropdown-content">
                        <div className={this.getClassName(Menu.PAGE_LOST_DOG)}
                             onClick={() => this.props.OnChange(Menu.PAGE_LOST_DOG)}>
                            Подати оголошення </div>
                        <div className={this.getClassName(Menu.ANNOUNCEMENTS)}
                             onClick={() => this.props.OnChange(Menu.ANNOUNCEMENTS)}>
                            Подивитися останні заявки </div>
                    </div>
                </li>
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
