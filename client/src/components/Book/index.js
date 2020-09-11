import React from "react";
import { Col, Row } from "../Grid";

function Book(props)
{
    return (
        <div>
            <Row>
                <Col size="md-6" >
                    <div className="text-left p-2">
                        <strong>{props.book.title}</strong><br />
                        Written by {props.book.authors}
                    </div>
                </Col>
                <Col size="md-6" >
                    <div className="text-right p-2">
                        <button><a href={props.book.link} target="_blank" rel="noopener noreferrer">View</a></button>
                        {
                            (typeof props.saveBook !== 'undefined') &&
                            <button onClick={() => props.saveBook(props.index)}>Save</button>
                        }
                        {
                            (typeof props.deleteBook !== 'undefined') &&
                            <button onClick={() => props.deleteBook(props.book._id)}>Delete</button>
                        }
                    </div>
                </Col>
            </Row>
            <img src={props.book.thumbnail} alt={props.book.title} className="float-left p-4"/>
            <p className="text-left p-4">
                {props.book.description}
            </p>
        </div>
    );
}

export default Book;