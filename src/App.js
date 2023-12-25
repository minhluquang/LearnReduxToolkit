import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlide";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [listUsers, setListUsers] = useState([]);

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    setListUsers(res.data ? res.data : []);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world React with LQM</p>
        <div>
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Email</td>
                <td>Username</td>
              </tr>
            </thead>
            <tbody>
              {listUsers.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
