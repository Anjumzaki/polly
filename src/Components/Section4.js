import React from 'react'
import './Section4.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import DropVoice from './DropVoice';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';


export default class Section4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sending: false,
            allMesages: ['Hi! I wanna talk ', 'I am waiting for you texts..Go On!'],
            send: '',
            recieving: false,
        };
        this.setField = this.setField.bind(this)
        this.sendText = this.sendText.bind(this)
        this.receiveText = this.receiveText.bind(this)


    }
    setField(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    sendText() {
        if (this.state.send) {
            var pre = this.state.allMesages
            pre.push(this.state.send)
            this.setState({
                allMesages: pre,
                recieving: true
            })
            this.receiveText()
        }

    }
    receiveText() {
       var that = this
       var pre = this.state.allMesages
        axios({
            method: 'post',
            url: 'http://34.70.8.237:5901/texttotext/',
            data: { text: that.state.send },
            config: { headers: { 'Content-Type': 'application/json' } }
        })
            .then(function (response) {
                pre.push(response.data)
                console.log(response)
                that.setState({
                    recieving: false,
                    allMesages: pre,
                })
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    componentDidMount() {
        // var audio = new Audio('http://34.69.77.247:5901/media/dd51c398-eb4d-11e9-b701-42010a80000f.wav')
        // audio.play()
    }
    // handleText=(e)=>{
    //     this.setState({
    //         soundText:e.target.value
    //     },console.log(this.state.soundText))
    // }
    // handlePlay=()=>{
    //     this.setState({
    //         soundLoading:true
    //     })
    //     var that = this
    //     axios({
    //         method: 'post',
    //         url: 'http://34.69.77.247:5901/speechsynthesis/',
    //         data: {text:that.state.soundText},
    //         config: { headers: {'Content-Type': 'application/json' }}
    //         })
    //         .then(function (response) {
    //              var audio = new Audio(response.data)
    //              audio.play()
    //         }).then(function(){
    //             that.setState({
    //                 soundLoading:false
    //             })
    //         })
    //         .catch(function (response) {
    //             //handle error
    //             console.log(response);
    //         });
    // }
    render() {


        return (
            <div className="section1">
                <AnimatedOnScroll animationIn="fadeInDown" >
                    <h1 className='sectHead'>Text to Text</h1>
                </AnimatedOnScroll>
                <div className="container">
                    <AnimatedOnScroll animationIn="fadeInRight" >
                        <div className="container">
                            <div className='row'>
                                <div className="chats">
                                    <div className="texts  mb-3">
                                        <ul className="rendring">
                                            {this.state.allMesages.map((val) =>
                                                <li> <p> {val}</p> </li>
                                            )}
                                            {this.state.recieving ? <li>
                                                <div class="ticontainer">
                                                    <div class="tiblock">
                                                        <div class="tidot"></div>
                                                        <div class="tidot"></div>
                                                        <div class="tidot"></div>
                                                    </div>
                                                </div>
                                            </li> : null}

                                        </ul>
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Type here..." onChange={this.setField} name="send" value={this.state.send} />
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" onClick={this.sendText} type="button"><i className="fa fa-arrow-right"></i></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </AnimatedOnScroll>
                </div>
            </div>
        );
    }
}