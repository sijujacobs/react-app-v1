import React from "react";
import "./App.css";
import UserList from "./components/user/user-list/UserList";
import { AppContextProvider } from "./context/AppContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import SideBar from "./components/side-bar/SideBar";
import UserProfile from "./components/user/user-profile/UserProfile";

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
            <UserProfile />
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
