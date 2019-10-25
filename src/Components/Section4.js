import React from 'react'
import './Section1.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import DropVoice from './DropVoice';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';


export default class Section4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { soundUrl: null,soundText:'This is default Voice Please edit the text to continue',soundLoading:false };
        // this.handleText = this.handleText.bind(this)
        // this.handlePlay = this.handlePlay.bind(this)

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
        const theme = {
            background:  ' linear-gradient(to bottom, #2f54eb 0%, #3a40d4 100%)',
            headerBgColor: 'white',
            headerFontColor: '#3a40d4',
            headerFontSize: '15px',
            botBubbleColor: 'white',
            botFontColor: '#3a40d4',
            userBubbleColor: '#fff',
            userFontColor: '#3a40d4',
          };
        const steps=[
            {
              id: '1',
              message: 'What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you!',
              end: true,
            },
          ]
      
        return (
            <div className="section1">
                <AnimatedOnScroll animationIn="fadeInDown" >
                    <h1 className='sectHead'>Text to Text</h1>
                </AnimatedOnScroll>
                <div className="container">
                    <AnimatedOnScroll animationIn="fadeInRight" >
                    <ThemeProvider theme={theme}>
                    <ChatBot style={{width:'70%',margin:'auto'}}  steps={steps}/>
                    </ThemeProvider>
                        {/* <div className="row twoCards">
                            <div className="col-md-9 col-12 twoCards1">
                                <textarea onChange={this.handleText} className="textforSpeech" placeholder="Edit this Text to your text...Click Here"></textarea>
                                <DropVoice />
                            </div>
                            <div className="col-md-3 col-12 twoCards2">
                                
                                <div className="innerCards">
                                    {this.state.soundLoading?<img src={require('../assets/806.gif')}></img>: <i onClick={this.handlePlay} className="fa fa-play-circle"></i>}
                                </div>
                                <div>
                                </div>
                            </div>
                        </div> */}
                    </AnimatedOnScroll>
                </div>
            </div>
        );
    }
}