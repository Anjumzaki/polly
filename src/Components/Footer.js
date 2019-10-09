import React from 'react'
import './Footer.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";



export default class MyAnime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    render() {
      return (
          <div className="footer">
              
          <div className="container">
        <AnimatedOnScroll animationInDelay={300} animationIn="fadeInUp" >

              <div className="row">
                  <div className="col-md-3">
                      <h4 className="ftHead">
                          Resources
                      </h4>
                      <p> <a className="ftLink" href=""> Sign in </a></p>
                      <p> <a className="ftLink" href=""> Sign Up </a></p>
                      <p> <a className="ftLink" href=""> Pricing </a></p>
                      <p> <a className="ftLink" href=""> Downloads </a></p>
                      <p> <a className="ftLink" href=""> Documentation </a></p>
                  </div>
                  <div className="col-md-3">
                      <h4 className="ftHead">
                          Cummunity
                      </h4>
                      <p> <a className="ftLink" href=""> <i className="fa fa-facebook"></i> Facebook </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-twitter"></i> Twitter </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-youtube"></i> Youtube </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-pinterest"></i> Pintrest </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-medium"></i> Medium </a></p>
                  </div>
                  <div className="col-md-3">
                      <h4 className="ftHead">
                          Features
                      </h4>
                      <p> <a className="ftLink" href=""> <i className="fa fa-facebook"></i> Facebook </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-twitter"></i> Twitter </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-youtube"></i> Youtube </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-pinterest"></i> Pintrest </a></p>
                      <p> <a className="ftLink" href=""> <i className="fa fa-medium"></i> Medium </a></p>
                  </div>
                  <div className="col-md-3">
                      <h4 className="ftHead">
                          Company
                      </h4>
                      <p> <a className="ftLink" href="">  About </a></p>
                      <p> <a className="ftLink" href="">  Career </a></p>
                      <p> <a className="ftLink" href="">  Privacy Policy </a></p>
                      <p> <a className="ftLink" href="">  Terms </a></p>
                      <p> <a className="ftLink" href="">  Blog </a></p>
                      
                  </div>
              </div>
</AnimatedOnScroll>

          </div>
          </div>

      );
    }
  }