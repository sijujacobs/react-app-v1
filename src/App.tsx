import React from "react";
import "./App.css";
import UserList from "./components/user/UserList";
import { AppContextProvider } from "./context/AppContext";

const initialValue = {
  users: [],
  isLoading: false,
};

function App() {
  return (
    <AppContextProvider value={initialValue}>
      <div className="App">
        <header className="App-header">
          <p>React 19 Spike</p>
        </header>
        <UserList />
      </div>
    </AppContextProvider>
  );
}

export default App;
