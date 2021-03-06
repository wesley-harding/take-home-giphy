import * as React from 'react';
import InfiniteScrollContainer from './InfiniteScrollContainer';
import {GifObject} from '../models/Giphy';
import GifPreviewImage from './GifPreviewImage';
import {RootState} from '../reducers/rootReducer';
import {connect} from 'react-redux';
import Spinner from './Spinner';
import './InfiniteGifList.less';

export interface StateProps {
  canLoadMore: boolean;
  hasError: boolean;
  gifObjects: GifObject[];
  isLoading: boolean;
}

export interface OwnProps {
  loadMoreGifs: () => void;
}

export interface Props extends StateProps, OwnProps {}

class InfiniteGifList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.conditionallyLoadMore = this.conditionallyLoadMore.bind(this);
  }

  conditionallyLoadMore() {
    const { canLoadMore, hasError, isLoading } = this.props;

    if (canLoadMore && !hasError && !isLoading) {
      this.props.loadMoreGifs();
    }
  }

  render() {
    return (
      <div className="infinite-gif-list">
        <InfiniteScrollContainer
          handleMore={this.conditionallyLoadMore}
        >
          { this.renderList() }
          { this.renderLoading() }
          { this.renderError() }
          { this.renderEndOfList() }
        </InfiniteScrollContainer>
      </div>
    );
  }

  renderList() {
    const { gifObjects } = this.props;

    if (!gifObjects) {
      return null;
    }

    return (
      <div className="images">
        {
          gifObjects.map((gifObject) => {
            return (
              <GifPreviewImage gifObject={gifObject} key={gifObject.id} />
            );
          })
        }
      </div>
    );
  }

  renderLoading() {
    if (!this.props.isLoading) {
      return null;
    }

    return (
      <Spinner />
    );
  }

  renderError() {
    if (!this.props.hasError) {
      return null;
    }

    return (
      <div className="error">
        <p>
          An error occurred.
        </p>
        <button
          onClick={this.props.loadMoreGifs}
        >
          Do it again!
        </button>
      </div>
    );
  }

  renderEndOfList() {
    if (this.props.canLoadMore) {
      return null;
    }

    return (
      <div className="info">
        No moar GIFs to show :(
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  canLoadMore: state.gifList.canLoadMore,
  hasError: state.gifList.hasError,
  gifObjects: state.gifList.gifObjects,
  isLoading: state.gifList.isLoading,
});

export default connect(mapStateToProps)(InfiniteGifList);
