import React from 'react'
import './Section2.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import DropVoice from './DropVoice'
import aboutImg from '../assets/about.jpg'
import Recorder from '@bigear/microphone-recorder'
import { thisTypeAnnotation } from '@babel/types';
import axios from 'axios'
const DEFAULT_AUDIO_FORMAT = 'audio/wav; codecs=MS_PCM'


export default class Section2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audio_stream: null,
            audio_context: null,
            recorder: null,
            recording: false,
            loading: false,
            blob: null,
            file: null,
            url: null,
            casText: null
        };
        this.intiliaze = this.intiliaze.bind(this);
        this.handleClickStop = this.handleClickStop.bind(this);
        this.handleRecordClick = this.handleRecordClick.bind(this);
        this.handleCallBack = this.handleCallBack.bind(this)
    }
    intiliaze = () => {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext
            window.URL = window.URL || window.webkitURL
            this.state.audio_context = new AudioContext()
            console.log('here', this.state.audio_context)
        } catch (e) {
            alert('No web audio support in this browser!')
        }
    }
    handleClickStart = () => {
        const { audio_context } = this.state
        navigator.mediaDevices.getUserMedia({ audio: true }).then((mediaStreamObject) => {
            this.state.audio_stream = mediaStreamObject
            const input = audio_context.createMediaStreamSource(mediaStreamObject)
            const recorder = new Recorder(input)
            recorder && recorder.record()
            this.state.recorder = recorder
            console.log(this.state.recorder)
        })
        this.setState({
            recording: true
        })
    }
    handleCallBack = async (blob) => {
        var that = this
        console.log(blob)
        const url = URL.createObjectURL(blob);
        const li = document.createElement('li')
        var upload = document.createElement('a');
        document.getElementById('recordingslist').appendChild(li)
        var filename = new Date().toISOString() + '.wav';
        upload.href = "JavaScript:void(0)";
        upload.innerHTML = "Upload";
        upload.addEventListener("click", function (event) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function (e) {
                if (this.readyState === 4) {
                    console.log("Server returned: ", e.target.responseText);
                   that.setState({
                       casText:e.target.responseText
                   })
                }
            };
            var fd = new FormData();
            fd.append("audio", blob, filename);
            xhr.open("POST", "http://34.70.8.237:5901/speechtotext/", false);
            xhr.send(fd);
            let res = xhr.response

        })
        li.appendChild(document.createTextNode(" "))//add a space in between
        li.appendChild(upload)//add the upload link to li

        //add the li element to the ol
        document.getElementById('recordingslist').innerHTML = ''
        document.getElementById('recordingslist').appendChild(li)
    }

    handleClickStop = () => {
        var that = this
        this.setState({
            loading: true
        })
        const { recorder, audio_stream } = this.state
        recorder && recorder.stop()
        audio_stream.getAudioTracks()[0].stop()

        recorder.exportWAV(DEFAULT_AUDIO_FORMAT, function (blob) {
            that.setState({
                blob
            }, console.log('from setState', blob))
            that.handleCallBack(blob)
            return blob
        })
        this.setState({
            recording: false
        })
        var audioBlob = localStorage.getItem('audioBlob');
        console.log('asd')
        console.log(audioBlob)
    }
    handleRecordClick = () => {
        if (this.state.recording) {
            this.handleClickStop()
        }
        else {
            this.handleClickStart()
        }
    }

    componentDidMount() {
        this.intiliaze()

    }
    render() {
        return (
            <div className="section2">
                <AnimatedOnScroll animationIn="fadeInDown" >
                    {console.log(this.state)}
                    <h1 className='sectHead1 sectHead'>Voice to text</h1>
                </AnimatedOnScroll>
                <div className="container">
                    <AnimatedOnScroll animationIn="fadeInRight" >
                        <div><button className={`btn btn-outline-primary recording ${this.state.recording ? 'true' : 'false'}`} onClick={this.handleRecordClick}> <i className={this.state.recording ? 'fa fa-microphone' : 'fa fa-microphone-slash'}></i> </button></div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" >  <ul id='recordingslist'></ul></AnimatedOnScroll>
                    {this.state.casText ? <h5 style={{marginTop:'40px'}} className='sectHead1 sectHead'>Casper Says: {this.state.casText}</h5> : null}
                </div>
            </div>
        );
    }
}