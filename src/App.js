import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { Route, Link } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Route exact path="/">
        <h1>Library Catalog</h1>
        <Link to="/books">Click here to see book list</Link>
      </Route>
      <Route exact path="/books" component={BookList} />
      <Route path="/books/:id" component={BookDetail} />
    </main>
  );
}

export default App;
