import React from "react";
import Menu from "./Menu";
import PagesContent from "./PagesContent";


export class Page extends React.Component {
    constructor() {
        super();

        this.state = {
            CurrPage: 0
        };
    }

    getRootClassName(){
        var totn_string = 'page';
        return totn_string.concat(this.state.CurrPage);
    }

    render() {
        return (
                <div
                    className={this.getRootClassName()}
                >
                    <Menu
                            OnChange={(p) => {
                                this.setState({CurrPage: p});
                            }}
                            CurrPage={this.state.CurrPage}
                    >
                    </Menu>
                    <PagesContent
                            OnChange={(p) => {
                                this.setState({CurrPage: p});
                            }}
                            pageNumber={this.state.CurrPage}/>
                </div>
        );
    }
}
