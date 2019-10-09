import React from 'react'
import './Section2.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import DropVoice from './DropVoice'
import aboutImg from '../assets/about.jpg'



export default class Section2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div className="section2">
                <AnimatedOnScroll animationIn="fadeInDown" >
                <h1 className='sectHead1 sectHead'>We are so Good!</h1>
                </AnimatedOnScroll>
                <div className="container">
                    <AnimatedOnScroll  animationIn="fadeInRight" >

                        <div className="row twoCardsA2">
                            <div className="col-md-6 col-12 about">
                               <h5>What is Lorem Ipsum?</h5>
                               <p>
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               </p>
                               <h5>What is Lorem Ipsum?</h5>
                               <p>
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                               </p>
                               
                            </div>
                            <div className="col-md-6 col-12  aboutImage">
                                  <img  src={aboutImg}/>
                               <div>
                             </div>
                            </div>
                        </div>
                    </AnimatedOnScroll>
                </div>
            </div>
        );
    }
}