// @flow
import * as React from 'react';
import Button from '@components/button/Button';
// import "modernizr"

class Hero extends React.PureComponent<{}> {
  render() {
    return (
      <div className="hero">
        <h1>Welcome traveler!</h1>
        <div>
          <Button>TRY FOR FREE</Button>
        </div>
      </div>
    );
  }
}

export default Hero;
