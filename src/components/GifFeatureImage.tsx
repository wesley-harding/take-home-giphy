import * as React from 'react';
import {GifObject} from '../models/Giphy';

export interface OwnProps {
  gifObject: GifObject;
}

class GifFeatureImage extends React.PureComponent<OwnProps> {
  render() {
    const {original} = this.props.gifObject.images;

    if (!original) {
      return null;
    }

    return (
      <div className="gif-feature-image">
        <img src={original.url}/>
      </div>
    );
  }
}

export default GifFeatureImage;
