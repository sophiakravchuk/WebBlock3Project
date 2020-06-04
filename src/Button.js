import React from "react";


export class PropsButton{
    OnChange = (page) => {};
    Caption = "";
    PageName = "";
    Disabled = false;
}

export default class Button extends React.Component/*PropsButton*/ {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div key={"button".concat(this.props.PageName)}
                     className={"button"} onClick={() => this.props.OnChange(this.props.PageName)}>
                    {this.props.Caption}
                </div>
        );
    }
}
