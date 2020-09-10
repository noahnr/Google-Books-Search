import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Search()
{

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    Search
                </Col>
                <Col size="md-6 sm-6">
                    Results
                </Col>
            </Row>
        </Container>
    );
}

export default Search;