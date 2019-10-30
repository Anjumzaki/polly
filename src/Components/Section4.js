import React from 'react'
import './Section4.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import axios from 'axios';


export default class Section4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sending: false,
            allMesages: [{ id: 'user', text: 'Hi! I wanna talk ' }, { id: 'server', text: 'I am waiting for you.. Go on ' }],
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
    sendText(e) {
        e.preventDefault()
        if (this.state.send) {
            var pre = this.state.allMesages
            pre.push({ id: 'user', text: this.state.send })
            this.setState({
                userMessage: pre,
                recieving: true,
                send: ''
            })
            var target = document.getElementById("render");
            target.scrollTop = target.scrollHeight;
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
                pre.push({ id: 'server', text: response.data })
                console.log(response)
                that.setState({
                    recieving: false,
                    allMesages: pre,
                })
            }).then(function(){
                var target = document.getElementById("render");
                target.scrollTop = target.scrollHeight;
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        var target = document.getElementById("render");
        target.scrollTop = target.scrollHeight;
        console.log('asdas mounter')
        // document.getElementById('render').scrollIntoView({block: 'end', behavior: 'smooth'});
        // window.scrollTo({
        //     top: document.getElementById('render').scrollHeight,
        //     left: 0,
        //     behavior: 'smooth'
        //   });
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
    componentDidMount(){
        var target = document.getElementById("render");
        target.scrollTop = target.scrollHeight;
    }
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
                                <div className="chats"  >
                                    <div className="texts   mb-3" id="render"  >
                                        <ul className="rendring" >

                                            {this.state.allMesages.map((val, i) =>
                                            
                                                <li className={`${val.id == 'user' ? 'userMessages' : 'serverMessages'}`} key={i}> <p> {val.text}</p> </li>
                                            )}
                                            <div ></div>

                                            {this.state.recieving ? <li>
                                                <div className="ticontainer">
                                                    <div className="tiblock">
                                                        <div className="tidot"></div>
                                                        <div className="tidot"></div>
                                                        <div className="tidot"></div>
                                                    </div>
                                                </div>
                                            </li> : null}

                                        </ul>
                                    </div>
                                    <form onSubmit={this.sendText}>
                                        <div className="input-group mb-3">

                                            <input type="text" className="form-control" placeholder="Type here..." onChange={this.setField} name="send" value={this.state.send} />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-outline-secondary" ><i className="fa fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </AnimatedOnScroll>
                </div>
            </div>
        );
    }
}