import React from "react";


export class PropsMenu{
    OnChange = (page) => {};
    CurrPage = 0;
}

export default class Menu extends React.Component/*PropsMenu*/ {
    constructor(props) {
        super();
    }

    getClassName(p) {
        let classNames = ["holpage", "whydog", "poppage", "comparepage"];
        return classNames[p];
    }

    renderSubMenus(curPage) {
        let names = ["Головна", "Чому пес?", "Популярні породи", "Порівняти"];
        let result = [];
        for (let p in names) {
            result.push(
                (
                    <div className={this.getClassName(p)} onClick={() => this.props.OnChange(p)}>
                        {names[p]}
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
