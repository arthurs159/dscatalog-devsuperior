import React from 'react';
import ContentLoader from 'react-content-loader';

import './styles.css';

const MyLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={320}
      height={320}
      viewBox="0 0 320 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#d6d2d2"
    >
      <rect x="-0" y="0" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
  </div>
);

export default MyLoader;
