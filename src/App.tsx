import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from "./components/TodosList";
import CreateList from "./components/createList";

function App() {
  return (
    <Router>
      <div className="container-lg">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand mx-3">MERN-Stack Todo App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item mx-1">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item mx-1">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<TodosList description="bye" />} />
          <Route path="/create" element={<CreateList />} />
          {/* <Route path="/edit/:id" component={EditTodo} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
