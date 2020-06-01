import React from "react";
import Button from "./Button";
import Menu from "./Menu";
import LostDogForm from "./LostDogForm";
import AnnouncementData from "./AnnouncementData";

import load from "./images/original.gif";

export default class AnnsPage extends React.Component {
    SECRET_KEY = "5ec85a212e188977295aefec";
    announcementKEY = "announcements10";
    constructor(p) {
        super(p);
        this.state = {
            loaded:false,
            announcements:[]
        }


    }

    componentDidMount() {
        this.props.DataStorage.readData(this.announcementKEY,
                (announcements) => {
                    console.log("announcements:");
                    console.log(announcements);
                    this.setState({announcements: announcements, loaded:true});
                },
                (req) => {
                    // error
                });

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

    // renderAnn(ann){
    //     return (<div>{ann}</div>)
    // }

    renderAnns(lst){
        let res = []
        for (let a of this.state.announcements) {
            res.push(this.renderOneAnn(a))
        }
        return res
    }

    renderOneAnn(ann){
        // console.log(ann["filename"])
        // console.log(ann)
        // return (<div>{JSON.stringify(ann["filename"])}<br/></div>)
        //         // .slice(this.state.announcements[2]["filename"] - 3, this.state.announcements[2]["filename"])
        return (
                <div className={"Ann"}>
                    <img className={"annImg"} src={ann["imgSource"]} />

                    {ann["name"]!=="" ? <div className={"statement"}>
                        <h4>Ім'я:</h4><p className={"annText"}>{ann["name"]}</p></div> : ""}

                    {ann["phoneNumber"]!=="" ? <div className={"statement"}>
                        <h4>Контактний номер телефону:</h4><p className={"annText"}>{ann["phoneNumber"]}</p></div> : ""}

                    {ann["email"]!=="" ? <div className={"statement"}>
                        <h4>Email:</h4><p className={"annText"}>{ann["email"]}</p></div> : ""}

                    {ann["dogsname"]!=="" ? <div className={"statement"}>
                        <h4>Кличка собаки:</h4><p className={"annText"}>{ann["dogsname"]}</p></div> : ""}

                    {ann["dogsbread"]!=="" ? <div className={"statement"}>
                        <h4>Порода собаки:</h4><p className={"annText"}>{ann["dogsbread"]}</p></div> : ""}

                    {ann["location"]!=="" ? <div className={"statement"}>
                        <h4>Локація:</h4><p className={"annText"}>{ann["location"]}</p></div> : ""}

                    {ann["message"]!=="" ? <div className={"statement"}>
                        <h4>Що трапилося:</h4><p className={"annText"}>{ann["message"]}</p></div> : ""}

                    {ann["date"]!=="" ? <div className={"statement"}>
                        <h4>Дата:</h4><p className={"annText"}>{ann["date"].slice(0, 10)}</p></div> : ""}

                </div>
        );

    }


    render() {

        if (this.state.loaded) {
            console.log("this.state.announcements: "+this.state.announcements);
            const result = [];
            for (const ann of this.state.announcements){
                result.push(<div>{JSON.stringify(ann)}<br/></div>);
            }

            return (
                    <div className={this.getRootClassName()}>
                        <div className={this.getContentClassName()}>
                            <h1 className={"ann"}>Останні оголошення</h1>
                            {this.renderAnns()}
                            {/*<div className="parent">*/}
                            {/*    <Slider>*/}
                            {/*        {data.map(value => {*/}
                            {/*            return (*/}
                            {/*                    <div key={value} className="child">*/}
                            {/*                        {value}*/}
                            {/*                    </div>*/}
                            {/*            );*/}
                            {/*        })}*/}
                            {/*    </Slider>*/}
                            {/*</div>*/}

                        </div>
                    </div>
            );
        } else {
            return (
                    <div className={this.getRootClassName()}>
                        <div className={this.getContentClassName()}>
                            <img className={"loadingImg"} src={load}/>
                                    {/*// src={"data:image/gif;base64,R0lGODlhEAAQAPMAAP////Dw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaCH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAEcRBIEOg7dWow0AiGMVCbNBhI0IjBqA2jYAgrnEkBMYPNcXymzEDXULhwQFwg4TjiNAKCj1GiBK5RAoFaul6tisItqAkIFgRnyzgpIBhmAWyQoLA5o4FDkWAM5E8TAQcFAAxUA3AlAwUjhxIKYyUKClURACH5BAkKAAAALAAAAAAQABAAAARwEEgQaHm1zjnICIgxDEuySYPhgM0QKtsICAaDLIxBbMGBBwvHxWDIaAYHlQyg+HwmgUDCc9JIEo9CAXaiRAOMw+PBrX69A4ZVEuVNDwNe4CkREBLgxEg2P8YHDwMKeE1sPAUMTCaCa2xqiiiNJ0snEQAh+QQJCgAAACwAAAAAEAAQAAAEchBIECgTtc453ggEEgROsklDc4DiYSjbBzBGEiYGAQxwUJQkgkDgMAwEBuPusTgMBihaEkYJKB4aicIgmCiGDOhpRE4UztQxuTpIZCWjTSDxwMgDMgmjoLD213gaMkdPH3lvAQwwTxR5cm47YnEnMWInEQAh+QQJCgAAACwAAAAAEAAQAAAEcBBIEChjtc45SggH8R3KJg2OFwaPUU4fwCxKqBgPNVDCMwSEwoVgCDAMi0on9TspEAaX5KPwbAa4X0DBSCR2psdi0SBdGOBNK+qgBAYKDWdAzwwEmM2nKeH+6h92GjFbgW+Dego7hHx6TTFuJiaQJhEAIfkECQoAAAAsAAAAABAAEAAABGYQSBBoKbXOOU4IhvEZyiYNhhcGC7l9QEGGjLFQA3UsCuhcK5kI0EkNNANFyMCQfBSeDcpxDAwY2JzJseRdCtpNa0mxHjdK6tmK1UiUIe31OKjCyGXc53OGvup5Vm4TgnmGJoSDExEAIfkECQoAAAAsAAAAABAAEAAABHgQSBCoUrXOGVIIQvEVwyYFhScIIFJy1fAM67AIVBkoyQAyl4JjhyBkFAKMJjA4GByvz8CzCRAYH+nAZwIwDgeCYLvVbBgIxOJBYX42Awej3KZLpgYDIerLfhYGTQYLGRl9HQYHADxVXG8IBgpdWW0AAwYMXVVLGxEAIfkECQoAAAAsAAAAABAAEAAABHMQSBDoGLXOGVQIDPMxwyaBWCIyRMlVgxCoA5FYFjYrF/N0hJ+F9zkNHouD6xPAbAKPBHOq2SQej4NsagIkCA5HgdIsTgYHafFzqQ4UBoPQMi08EAaowZHJYBYGAgZjb086gAN4Lk9MDQYXDTddJwd8FBsRACH5BAkKAAAALAAAAAAQABAAAARxEEgQ6Bi1zhlwUEoQJMMmfRj4PSVXDSE4PAqVdeJ1JUV3CDePplNwFFqi5CYgCCWfJoCiQE08NRvF4/CzeZY0Za6DHCAMvZPHYBAICAimgXADCNAIBKMNgG0GbAMLCwEOBi0bCQYhgx0INVElAVwZGxEAIfkECQoAAAAsAAAAABAAEAAABHMQSBBouHTqe8e4SqVRX+CZjChhpvkJg2VxtJKYQmqV4sU8jNgMMwkEabQRYCBo3pKjQWGasCgQig2MsyQYDMHVgLAQVAINg2NgQDASD4IR8agwsgKDwOFIgJdCEmwIAXwBBw2BEwmJAQgOJgRZSmdTZxoRACH5BAkKAAAALAAAAAAQABAAAARzEEgQaLh06sv5qBr1dYMCSlgwXspgWav3DYwJc2iQCLalnpQW57EoPkKAQWKpcBieBCSNwVPRFq5JgLFKEp69y8PBqAQQhseZsBQcAopDoZJwCQyMA0GxSIg0AwYOAXoBBQ5ZGgoIHwQEKg+JGxQCAmYaEQAh+QQJCgAAACwAAAAAEAAQAAAEbxBIEGi4dOrLe9XU4AWiNgxhV2KBYQijGCil4hqlNdDfVRiJjezyQBgfIMBOQTs0FotCcpkQiRIE1CRQ5SgPrtxF8EhUAg5DIUA4MBmPWYFRoQEYwMJj4AiSTAsEAXoBDFlTWQEPBz5aIGcMdBkTEQAh+QQJCgAAACwAAAAAEAAQAAAEcxBIEGi4dGq1xv2YBigGAgaeNgzAYSRfigWIIQyGEV9eNdQGRkKyq1gYDYXmFBA4CASBiLJaFRBYqQhV/SgOrElA0asECoaO8ZIQKMwuQeBRWCUYKKGPxVEI6g8sIUQOD00FAQmIUwOBhxcMYVsUCTAZExEAOw=="} />*/}
                        </div>
                    </div>
            );
        }
    }
}
