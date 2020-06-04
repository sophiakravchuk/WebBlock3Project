import React from "react";
import Menu from "./Menu";
import PagesContent from "./PagesContent";



export class Page extends React.Component {
    constructor(p) {
        super(p);
        console.log(this.props.CurrPage)
        // this.state = {
        //     CurrPage: 0
        // };
    }

    OnCnangePage(pageId) {
        window.location = pageId
    }

    getRootClassName() {
        return this.props.CurrPage;
    }

    render() {
        return (
                <div
                        className={this.getRootClassName()}
                >
                    <Menu
                            OnChange={(p) => {
                                this.OnCnangePage(p)
                            }}
                            CurrPage={this.props.CurrPage}
                    >
                    </Menu>

                    <PagesContent
                            OnChange={(p) => {
                                this.OnCnangePage(p)
                            }}
                            pageName={this.props.CurrPage}/>
                </div>
        );
    }
}
