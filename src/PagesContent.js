import React from "react";
import Button from "./Button";



export default class PagesContent extends React.Component {
    constructor() {
        super();
    }

    getClassName(){
        var totn_string = 'page';
        totn_string = totn_string.concat(this.props.pageNumber);
        return totn_string.concat("Content");
    }

    render() {
        let listOfFunctions = [this.renderHome()];
        return listOfFunctions[this.props.pageNumber];
    }

    renderHome(){
        return (
                <div
                        className={this.getClassName()}
                >

                    <h1>Хочеш собачку?</h1>
                    <div className="btns">
                        <Button
                            Caption={"Чому собачка?"}
                            PageId={1}
                            Disabled={false}
                            OnChange={(p) => {
                                this.props.OnChange(p)
                            }}
                        />
                        <Button
                                Caption={"Дізнатися більше"}
                                PageId={2}
                                Disabled={false}
                                OnChange={(p)=>{this.props.OnChange(p)}}
                        />
                    </div>

                </div>
        );
    }
}
