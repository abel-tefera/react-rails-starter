import React from 'react'

const Books = ({ books }) => {
    return (<><div>Books</div>
        {
            books.map((book) => (
                <div key={book.id}>
                    <h1>{book.title}</h1>
                    <p>{book.body}</p>
                </div>
            ))
        }</>)

}

export default Books