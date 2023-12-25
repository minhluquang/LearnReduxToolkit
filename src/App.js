import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import userSlide, { fetchAllUsers } from "./redux/slices/userSlide";

function App() {
  const dispatch = useDispatch();

  const listUsers = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world React with LQM</p>
        <div>
          {isError ? (
            <>Something went wrongs, please try again</>
          ) : (
            <>
              {isLoading ? (
                <>Loading data...</>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <td>Id</td>
                      <td>Email</td>
                      <td>Username</td>
                    </tr>
                  </thead>
                  <tbody>
                    {listUsers.map((item, index) => (
                      <tr key={`users-${index}`}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
