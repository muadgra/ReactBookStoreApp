import React, {Component, useEffect, useState} from "react";
import { Table } from "react-bootstrap";

export default function Book(){
    const [books, setBooks] = useState([]);
    useEffect(async () => {
        
        fetch('https://localhost:44397/Books')
        .then(response=>response.json())
        .then(data=>{
            setBooks(data);
            console.log(data);
        });
    }, []);
    return(
        <div>
            <Table className="mt-4" striped bordered hover size = "sm">
                <tbody>
                    {books.map(book =>
                        <tr key={book.Id}>
                            <td>{book.Title}</td>
                            <td>{book.PageCount}</td>
                        </tr>
                        
                        
                        )}
                </tbody>
            </Table>
            <div>
                <p>Book Sayfasi</p>
            </div>
        </div>
        
    )
}
