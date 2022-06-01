import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";

import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

export const ThemeContext = createContext(null);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
  }
  if (networkError) {
    console.log("networkError", networkError);
  }
});
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

 

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <StoreProvider>
                <Header />
                <div className="switch">
                  <label>
                    {" "}
                    {theme === "light"
                      ? "Light Mode Activated"
                      : "Dark Mode Activated"}
                  </label>
                  <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                  />
                </div>
               
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/orderHistory" element={<OrderHistory />} />
                  <Route path="/products/:id" element={<Detail />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </StoreProvider>
              <Footer />
            </div>
          </Router>
        </ApolloProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
