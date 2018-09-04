import React, { Fragment } from 'react';
import ContentLoader from 'react-content-loader';

import { Wrapper } from './style';

export default function Loader() {
  return (
    <Fragment>
      <Wrapper>
        <ContentLoader />
      </Wrapper>
      <Wrapper>
        <ContentLoader />
      </Wrapper>
      <Wrapper>
        <ContentLoader />
      </Wrapper>
    </Fragment>
  );
}
