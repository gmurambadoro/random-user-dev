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

    useEffect(() => {
        NProgress.start();

        randomPerson()
            .then(data => setPerson({...data}))
            .finally(() => NProgress.done())
        ;
    }, []);

    const handleCriteriaChanged = (params) => {
        NProgress.start();

        randomPerson(params)
            .then(data => setPerson({...data}))
            .finally(() => NProgress.done())
        ;
    };

    console.log(person);

    return (
        <BrowserRouter>
            <Header />

            <Container>
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
