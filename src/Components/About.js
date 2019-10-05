import React from 'react'
import './About.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default class MyAnime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div className='about'>
                <div className='container'>
                    <div className="row aboutInnner">
                        <div className="col-md-3 col-sm-6 col-12 ">
                            <AnimatedOnScroll animationIn="fadeInUp">

                                <div className="imgDiv">
                                    <img src={require('../assets/one.svg')}></img>
                                </div>
                                <p>Simple</p>

                            </AnimatedOnScroll>
                        </div>

                        <div className="col-md-3  col-sm-6 col-12">
                            <AnimatedOnScroll animationInDelay={100}  animationIn="fadeInUp" >

                                <div className="imgDiv">
                                    <img src={require('../assets/two.svg')}></img>
                                </div>
                                <p>Efficient</p>

                            </AnimatedOnScroll>

                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <AnimatedOnScroll animationInDelay={200} animationIn="fadeInUp" >
                                <div className="imgDiv">
                                    <img src={require('../assets/three.svg')}></img>
                                </div>
                                <p>Free</p>

                            </AnimatedOnScroll>

                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <AnimatedOnScroll animationInDelay={300} animationIn="fadeInUp" >
                                <div className="imgDiv">
                                    <img src={require('../assets/one.svg')}></img>
                                </div>
                                <p>Easy to use</p>
                            </AnimatedOnScroll>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}