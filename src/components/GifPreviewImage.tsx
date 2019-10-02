import * as React from 'react';
import {GifObject} from '../models/Giphy';
import {Link} from 'react-router-dom';

export interface OwnProps {
  gifObject: GifObject;
}

class GifPreviewImage extends React.PureComponent<OwnProps> {
  render() {
    const {gifObject} = this.props;
    const { fixed_width } = gifObject.images;

    if (!fixed_width) {
      return null;
    }

    return (
      <div className="gif-preview-image">
        <Link
          to={`/gifs/${this.props.gifObject.id}`}
        >
          <img src={fixed_width.url} alt={gifObject.title || 'Giphy Image without title'} />
        </Link>
      </div>
    );
  }
}

export default GifPreviewImage;
