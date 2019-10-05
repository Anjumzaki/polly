import React from 'react'
import './Section1.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import DropVoice from './DropVoice'



export default class Section1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div className="section1">
                <AnimatedOnScroll animationIn="fadeInDown" >
                    <h1 className='sectHead'>Yes it is! Try Now!</h1>
                </AnimatedOnScroll>
                <div className="container">
                    <AnimatedOnScroll animationIn="fadeInRight" >

                        <div className="row twoCards">
                            <div className="col-md-1 col-12"></div>

                            <div className="col-md-5 col-12 twoCards1">
                                <textarea className="textforSpeech" placeholder="Edit this Text to your text...Click Here"></textarea>
                                <DropVoice/>

                            </div>
                            <div className="col-md-5 col-12 twoCards2">
                                <div className="innerCards">
                                   
                            <i class="fa fa-play-circle"></i>
                            </div>
                            <div> 
                            </div>
                            
                            
                            </div>
                            <div className="col-md-1 col-12 "></div>

                        </div>
                    </AnimatedOnScroll>
                </div>
            </div>
        );
    }
}