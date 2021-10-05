import "./App.css";
import { Route, Switch } from "react-router";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import LoginPage from "./pages/login/login";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        onSnapshot(userRef, (doc) => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
