import React from "react";


export class PropsButton{
    OnChange = (page) => {};
    Caption = "";
    PageId = 0;
    Disabled = false;
}

export default class Button extends React.Component/*PropsButton*/ {
    constructor(props) {
        super();
    }

    render() {
        return (
                <div className={"button"}>
                    {this.props.Caption}
                </div>
        );
    }
}
