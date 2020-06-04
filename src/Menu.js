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
    constructor(props) {
        super(props);
        this.names = {};
        this.names[Menu.PAGE_HOME] = "Головна";
        this.names[Menu.PAGE_WHYDOG] = "Чому собачка?";
        this.names[Menu.PAGE_POPDOGS] = "Популярні породи";
        this.names[Menu.PAGE_COMPARE] = "Порівняти";
    }

    getClassName(p) {
        // let classNames = [Menu.PAGE_HOME, Menu.PAGE_WHYDOG, Menu.PAGE_POPDOGS, Menu.PAGE_COMPARE];

        return p.concat("MenuButton");
    }

    renderSubMenus(curPage) {
        let result = [];
        for (let p in this.names) {
            result.push(
                (
                    <div key={p} className={this.getClassName(p)} onClick={() => this.props.OnChange(p)}>
                        {this.names[p]}
                    </div>
                )
            );
        }
        return result;
    }


    render() {
        return (
                <div className={"main-nav"}>
                    {this.renderSubMenus(this.props.CurrPage)}
                </div>
        );
    }
}
