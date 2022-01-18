import logo from './logo.svg';
import React, {Component, useEffect, useState} from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Book from './Book';
import Home from './Home';
import { Table } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function App() {
  const [books, setBooks] = useState([]);
    useEffect(async () => {
        
        await fetch('https://localhost:44397/Books')
        .then(response=>response.json())
        .then(data=>{
            setBooks(data);
            console.log(data);
        });
    }, []);
  return (
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
  );
}
