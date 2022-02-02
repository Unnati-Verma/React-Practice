import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    name:'Work It: Secrets for Success from the Boldest Women in Business',
    author:'Carrie Kerpen',
  },
  {
    name:'Amazon Unbound: Jeff Bezos and the Invention of a Global Empire',
    author:'Brad Stone',
  }
];

function Booklist() {
  return (
    <section>
      <Books/>
    </section>
  );
}
const Books = () => {

  return (
    <article>
      {books.map(function (book){return <p>{book.name}</p>;})}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
