import React from "react";
import Header from "./Components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../src/Container/Posts/Posts";
import Form from "../src/Container/Form/Form";

const App = () => {
    return (
        <React.Fragment>
            <Header />

            <Container>
                <Row>
                    <Col md={8} className={'d-flex'} style={{flexWrap: 'wrap'}}>
                        <Post />
                    </Col>
                    <Col md={4}>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default App;