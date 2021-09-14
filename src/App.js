//--> Imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, ProductListing , ProductDetails} from "./containers";
import { fetchData } from './api/';
import "./App.css";
//--------


class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };
  render() {
    const { data } = this.state;
    return (
        <div className="App">
          <Router>
            {/* passing data to header */}
            <Header data={data} />
            <Switch>
              <Route path="/" exact component={ProductListing} />
              <Route path="/product/:productId" component={ProductDetails} />
              <Route>404 Not Found!</Route>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
