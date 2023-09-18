import axios from "axios";
import Books from "./components/books";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/books";

const getData = () => {
  return axios.get(API_URL).then((response) => {
    return response.data;
  })
}

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    })
    return () => (mounted = false);
  }, []);


  return (
    <div className="App">
      <h1>REACT RUNNING</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
