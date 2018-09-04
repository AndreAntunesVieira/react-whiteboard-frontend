import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const LogoImg = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`;

export default () => <LogoImg src={logo} alt="Logo" />;
