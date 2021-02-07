import React, {useEffect, useState} from "react";
import PersonForm from "./PersonForm";
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter} from "react-router-dom";
import NProgress from "nprogress";
import PersonDetail from "./PersonDetail";
import {randomPerson} from "../services/random-user-api";

const App = () => {
    const [person, setPerson] = useState({});

    const loadPerson = (params = {}) => {
        NProgress.start();

        randomPerson(params)
            .then(data => setPerson({...data}))
            .finally(() => NProgress.done());
    };

    useEffect(() => loadPerson(), []);

    const handleCriteriaChanged = (params) => loadPerson(params);

    console.log(person);

    return (
        <BrowserRouter>
            <Header />

            <Container className="mt-2">
                <Row>
                    <Col md={3}>
                        <PersonForm handleCriteriaChanged={handleCriteriaChanged} />
                    </Col>

                    <Col>
                        <PersonDetail person={person} />
                    </Col>
                </Row>
            </Container>

        </BrowserRouter>
    );
};

export default App;
