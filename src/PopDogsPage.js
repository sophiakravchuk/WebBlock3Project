import React from "react";


export default class PopDogsPage extends React.Component {
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
                        <p className={"comingSoon"}>Coming Soon...</p>
                    </div>
                </div>
        );
    }
}
