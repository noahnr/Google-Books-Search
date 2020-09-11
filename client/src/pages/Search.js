import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Search()
{
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    function saveBook(id) {

    }

    function deleteBook(id) {
        // API.deleteBook(id)
        //   .then(res => loadBooks())
        //   .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();

        if (formObject.search)
            API.searchGoogleBooks(formObject.search, data => setBooks(data));
        
        /*if (formObject.title && formObject.author) {
        API
            .saveBook({
            title: formObject.title,
            author: formObject.author,
            synopsis: formObject.synopsis
            })
            .then(res => loadBooks())
            .catch(err => console.log(err));
        }*/
    };


    return (
        <div className="text-center">
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Search</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="search"
                            placeholder="Enter title, author, etc..."
                        />
                        <FormBtn
                            disabled={!formObject.search}
                            onClick={handleFormSubmit}
                        >
                            Search
                        </FormBtn>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Results</h1>
                    </Jumbotron>
                    {books.length ? (
                        <List>
                        {books.map(book => (
                            <ListItem key={book.id}>
                                <Row>
                                    <Col size="md-6" >
                                        <div className="text-left p-2">
                                            <strong>{book.title}</strong><br />
                                            Written by {book.authors}
                                        </div>
                                    </Col>
                                    <Col size="md-6" >
                                        <div className="text-right p-2">
                                            <button><a href={book.link} target="_blank">View</a></button>
                                            <button onClick={() => saveBook(book.id)}>Save</button>
                                        </div>
                                    </Col>
                                </Row>
                                <img src={book.thumbnail} alt={book.title} className="float-left p-4"/>
                                <p className="text-left p-4">
                                    {book.description}
                                </p>
                            </ListItem>
                        ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Search;