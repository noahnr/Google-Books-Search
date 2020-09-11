import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Book from "../components/Book";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Search()
{
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    function saveBook(i) {
        var book = {
            id: books[i].id,
            title: books[i].title,
            authors: books[i].authors,
            description: books[i].description,
            link: books[i].link,
            thumbnail: books[i].thumbnail
        };
        
        API.saveBook(book)
            .then()
            .catch(err => console.log(err));
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
                            {books.map( (book, index) => (
                                <ListItem key={book.id}>
                                    <Book 
                                        book={book}
                                        index={index}
                                        saveBook={saveBook}
                                    />
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