import React from 'react'
import { Button, Col, ListGroupItem, Row } from 'reactstrap'

const Perso = ({ name,  remove, picture,status}) => <ListGroupItem>
    <Row>
        <Col xs={3}>
            <Button onClick={remove}>Kill</Button>
        </Col>
        <Col xs={3}>
            <img className="img-fluid" alt={ name } src={ picture } />
        </Col>
        <Col xs={3}>
            <h3>{ name }</h3>
        </Col>
        <Col xs={3}>
            <p>{ status + is back again!} </p>
        </Col>
    </Row>
</ListGroupItem>

export default Perso
