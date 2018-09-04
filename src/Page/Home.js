import React, { Component } from 'react';
import Loaders from 'Components/Loaders';
import CharacterCard from 'Components/CharacterCard';
import DefaultPage from 'Components/DefaultPage';

import { Wrapper } from './styles/HomeStyles';

class Home extends Component {
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
        <Wrapper>
          {peoples.length === 0 ? (
            <Loaders />
          ) : (
            peoples.map(character => (
              <CharacterCard key={character.name} {...character} />
            ))
          )}
        </Wrapper>
      </DefaultPage>
    );
  }
}

export default Home;
