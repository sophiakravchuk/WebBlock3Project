import React from "react";
import AnnouncementData from "./AnnouncementData";
import {connect} from "react-redux";

class LostDogForm extends React.Component {
    constructor(props) {
        super(props);
        this.lostDogRef = React.createRef();
        this.state = {
            name: '',
            dogsname: '',
            dogsbread: '',
            location: '',
            message: '',
            phoneNumber: '',
            email: '',
            filename: '',
            imgSource:'',
            uploading: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    // https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string

    arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }


    handleInputChange(event) {


        // console.log(event)
        const target = event.target;
        const name = target.name;
        const size = target.size;


        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(name)
        console.log(target.files)
        console.log(target)
    }

    setThumbnail(base64String){
        this.setState({imgSource:"data:image/png;base64," + base64String})
    }

    handleFileChange(event) {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = this.arrayBufferToBase64(reader.result);
            this.setThumbnail(base64)

        };
        reader.onerror = (error)=>{
            console.log(error);
        };
        reader.readAsArrayBuffer(event.target.files[0]);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({uploading:true})
        const an = new  AnnouncementData();
        Object.assign(an, this.state);
        an.date = new Date();
        this.props.onSub(an);


    }

    render() {
        return (
                <div className="container">
                    <fieldset disabled={this.state.uploading}>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-25">
                                <label  htmlFor="name">{this.props.language === "ENG" ? "Your name:" :"Твоє ім'я:"}</label>
                            </div>
                            <div className="col-75">
                                <input
                                        ref={this.lostDogRef}
                                        name="name"
                                        type="text"
                                        value={this.state.name}
                                        onChange={(e) => this.handleInputChange(e)}
                                        placeholder={this.props.language === "ENG" ? "Your name" :"Твоє ім'я"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label  htmlFor="phoneNumber">{this.props.language === "ENG" ? "Contact phone number:" : "Контактний номер телефону:"}</label>
                            </div>
                            <div className="col-75">
                                <input ref={this.lostDogRef}
                                       name="phoneNumber"
                                       type="text"
                                       value={this.state.phoneNumber}
                                       onChange={(e) => this.handleInputChange(e)}
                                       placeholder="+380(00) 000 00 00"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="email">{this.props.language === "ENG" ? "Your Email:" : "Твій Email:"}</label>
                            </div>
                            <input ref={this.lostDogRef}
                                   name="email"
                                   type="text"
                                   value={this.state.email}
                                   onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="dogsname">{this.props.language === "ENG" ? "Dog's name:" : "Кличка собаки:"}</label>
                            </div>
                                <input
                                        ref={this.lostDogRef}
                                        name="dogsname"
                                        type="text"
                                        value={this.state.dogsname}
                                        onChange={(e) => this.handleInputChange(e)}

                                />
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="dogsbread">{this.props.language === "ENG" ? "Dog's breed:" : "Порода собаки:"}</label>
                            </div>

                            <input
                                    ref={this.lostDogRef}
                                    name="dogsbread"
                                    type="text"
                                    value={this.state.dogsbread}
                                    onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="location">{this.props.language === "ENG" ? "Location:" : "Локація:"}</label>
                            </div>

                            <input
                                    ref={this.lostDogRef}
                                    name="location"
                                    type="text"
                                    value={this.state.location}
                                    onChange={(e) => this.handleInputChange(e)}

                            />
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="file">{this.props.language === "ENG" ? "Dog's photo (max 10Kb):"
                                        : "Фото собаки(максимум 10 Кб):"}</label>
                            </div>
                            <input
                                    ref={this.lostDogRef}
                                    name="filename"
                                    type="file"
                                    value={this.state.filename}
                                    onChange={(e) => this.handleFileChange(e)}
                                    />
                            {/*<input type="submit"/> */}
                        </div>
                        <img width="100px" height="auto" src={this.state.imgSource}/>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="message">{this.props.language === "ENG" ? "What happened:" : "Що трапилося:"}</label>
                            </div>
                            <div className="col-75">
                                <textarea
                                        ref={this.lostDogRef}
                                        name="message"
                                        type="text"
                                        value={this.state.message}
                                        onChange={(e) => this.handleInputChange(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" value={this.props.language === "ENG" ?
                                    (this.state.uploading ? "Loading" :"Send")
                                    :(this.state.uploading ? "Завантаження" :"Надіслати")}/>
                        </div>
                    </form>
                    </fieldset>
                </div>
        );
    }
}

export default connect(
        state => ({
            language: state
        }),
        dispatch => ({
            onChangeLanguage: (lang) => {
                dispatch({ type: 'LANGUAGE', payload: lang })
            }})
)(LostDogForm);

