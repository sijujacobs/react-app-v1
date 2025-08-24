import React from "react";
import "./App.css";
import UserList from "./components/user/UserList";
import { AppContextProvider } from "./context/AppContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import SideBar from "./components/side-bar/SideBar";
import ProgressBar from "./components/progress-bar/ProgressBar";

const initialValue = {
  users: [],
  isLoading: false,
};

function App() {
  return (
    <AppContextProvider value={initialValue}>
      <div className="App">
        <Header />
        <div className="main">
          <NavigationBar />
          <div>
            <ProgressBar />
            <UserList />
          </div>
          <SideBar />
        </div>
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
