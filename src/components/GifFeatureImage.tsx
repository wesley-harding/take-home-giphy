import * as React from 'react';
import {GifObject} from '../models/Giphy';

export interface OwnProps {
  gifObject: GifObject;
}

class GifFeatureImage extends React.PureComponent<OwnProps> {
  render() {
    const { gifObject } = this.props;
    const {original} = gifObject.images;

    if (!original) {
      return null;
    }

    return (
      <div className="gif-feature-image">
        <h1>
          { gifObject.title }
        </h1>
        <img src={original.url}/>
        <p>
          Original: <a href={gifObject.url}>{gifObject.url}</a>
        </p>
      </div>
    );
  }
}

export default GifFeatureImage;
