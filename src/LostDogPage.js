import React from "react";
import Button from "./Button";
import Menu from "./Menu";
import LostDogForm from "./LostDogForm";


export default class LostDogPage extends React.Component {
    announcementKEY = "announcements10";

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

    onSub(an) {
        this.props.DataStorage.readData(this.announcementKEY,
                (announcements) => {
                    if (!announcements || !(announcements instanceof Array)) {announcements = [];}
                    if(announcements.length) {
                        const newLen = Math.min(3, announcements.length + 1);
                        for (let i = newLen - 1; i > 0; i--) {
                            announcements[i] = announcements[i - 1];
                        }
                        announcements = announcements.slice(0, newLen);
                    }
                    announcements[0] = an;
                    this.props.DataStorage.writeData(this.announcementKEY, announcements, () => {
                                this.OnPageChange(Menu.ANNOUNCEMENTS)
                            },
                            (req) => {
                                this.setState({uploading: false});
                            }
                    )
                },
                (req) => {

                    this.setState({uploading: false});
                });
    }

    getContentClassName() {
        const totnString = this.props.CurrPage;
        return (totnString || "").concat("Content");
    }

    render() {
        return (
                <div className={this.getRootClassName()}>
                    <div className={this.getContentClassName()}>
                        <h1 className={"ann"}>Заповни анкету для створення оголошення</h1>
                        <LostDogForm DataStorage={this.props.DataStorage}  onSub={(e) => this.onSub(e)}/>
                    </div>
                </div>
        );
    }
}
