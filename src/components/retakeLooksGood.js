import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import history from '../history'
import './css/retakeLooksGood.css';

export class RetakeLooksGood extends React.Component{
    render(){
        return (
            <div className="text-center">
            <Container className="bottomButtons">
                <Row>
                    <Col><Button color="outline-success" block>RETAKE</Button></Col>
                    <Col><Button color="success" onClick={() => history.push(this.props.looksGoodPath)} block>LOOKS GOOD</Button></Col>
                </Row>
            </Container>
            </div>
        );
    }
};