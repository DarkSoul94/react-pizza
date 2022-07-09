import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffdf8c"
    {...props}>
    <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="420" rx="10" ry="10" width="90" height="27" />
    <rect x="0" y="310" rx="15" ry="15" width="280" height="90" />
    <rect x="128" y="410" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
