import React, { Component } from 'react';
import CharacterFeature from 'Components/CharacterFeature/index';

import { Wrapper, CharacterFeatureWrapper } from './style';

class People extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <div>{this.props.name}</div>
          <div>{this.props.gender}</div>
        </div>
        <CharacterFeatureWrapper>
          <CharacterFeature title="YOB" value={this.props.birth_year} />
          <CharacterFeature title="Eye Color" value={this.props.eye_color} />
          <CharacterFeature title="Height" value={this.props.height} />
          <CharacterFeature title="Mass" value={this.props.mass} />
          <CharacterFeature title="Hair" value={this.props.hair_color} />
          <CharacterFeature title="Skin" value={this.props.skin_color} />
        </CharacterFeatureWrapper>
      </Wrapper>
    );
  }
}

export default People;
