import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './css/clickPhoto.css';

export class ClickPhoto extends React.Component{
    render(){
        return (
            <div className="text-center">
            <Container className="clickPhoto">
                <Row>
                    <Col><Button color="success">CLICK PHOTO</Button></Col>
                </Row>
            </Container>
            </div>
        );
    }
};