import React from 'react'
import MyAnime from '../MyAnime'
import Sanime from './Sanime'
import { Jumbotron, Button } from 'reactstrap';
import './Header.css'



export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div className="header ">
                <div className="container">
                <Jumbotron className="row">
                    <div className="col-md-6 col-12" >
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </div>
                    <div className="col-md-6 col-12" style={{textAlign:'center'}} >
                        <Sanime  />
                    </div>
                </Jumbotron>
                </div>
            </div>
        );
    }
}