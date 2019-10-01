import * as React from 'react';
import {GifObject} from '../models/Giphy';
import {Link} from 'react-router-dom';

export interface OwnProps {
  gifObject: GifObject;
}

// TODO: This needs to support previews and full-size display
class GifImage extends React.PureComponent<OwnProps> {
  render() {
    const { fixed_width } = this.props.gifObject.images;

    if (!fixed_width) {
      return null;
    }

    return (
      <div className="gif-image">
        <Link
          to={`/gifs/${this.props.gifObject.slug}`}
        >
          <img src={fixed_width.url} />
        </Link>
      </div>
    );
  }
}

export default GifImage;
