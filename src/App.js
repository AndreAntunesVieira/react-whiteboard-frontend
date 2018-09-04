import React, { Component } from 'react';
import DefaultPage from 'Components/DefaultPage/index';
import { Instagram } from 'react-content-loader';
import CharacterList from 'Components/CharacterList';

class App extends Component {
  state = {
    peoples: [],
  };

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(json => this.setState({ peoples: json.results }));
  }

  render() {
    const { peoples } = this.state;

    return (
      <DefaultPage>
        {peoples.length === 0 ? (
          <Instagram />
        ) : (
          <CharacterList peoples={peoples} />
        )}
      </DefaultPage>
    );
  }
}

export default App;
