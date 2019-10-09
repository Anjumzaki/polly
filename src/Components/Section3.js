import React from 'react'
import './Section3.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default class Section3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div className='about2'>
                <div className='container'>
                <AnimatedOnScroll animationIn="fadeInDown">
                <h1 className='sectHead'>Tools and Resources</h1>
                </AnimatedOnScroll>
                    <div style={{minHeight:'200px'}} className="row aboutInnner">


                        <div className="col-md-4  col-sm-6 col-12">
                        <AnimatedOnScroll animationInDelay={100} animationIn="fadeInUp" >
                                <div className="row">
                                    <div className="col-4">
                                    <img src={require('../assets/four.svg')}></img>
                                    </div>
                                    <div className="col-8" className="asd"> <h4>Easy to use</h4>
                                    <p>Github Resources</p>
                                      </div>
                                </div>
                            </AnimatedOnScroll>

                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                        <AnimatedOnScroll animationInDelay={300} animationIn="fadeInUp" >
                                <div className="row">
                                    <div className="col-4">
                                    <img src={require('../assets/five.svg')}></img>
                                    </div>
                                    <div className="col-8" className="asd"> <h4>Easy to use</h4>
                                    <p>Github Resources</p>
                                      </div>
                                </div>
                            </AnimatedOnScroll>

                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <AnimatedOnScroll animationInDelay={500} animationIn="fadeInUp" >
                                <div className="row">
                                    <div className="col-4">
                                    <img src={require('../assets/six.svg')}></img>
                                    </div>
                                    <div className="col-8" className="asd"> <h4>Easy to use</h4>
                                    <p>Github Resources</p>
                                      </div>
                                </div>
                            </AnimatedOnScroll>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}