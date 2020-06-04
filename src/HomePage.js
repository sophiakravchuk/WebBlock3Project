import React from "react";
import Button from "./Button";
import Menu from "./Menu";


export default class HomePage extends React.Component {
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
                        <h1>Хочеш собачку?</h1>
                        <div className="btns">
                            <Button
                                    Caption={"Чому собачка?"}
                                    PageName={Menu.PAGE_WHYDOG}
                                    Disabled={false}
                                    OnChange={(p) => {
                                        this.OnPageChange(p)
                                    }}
                            />
                            <Button
                                    Caption={"Дізнатися більше"}
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
