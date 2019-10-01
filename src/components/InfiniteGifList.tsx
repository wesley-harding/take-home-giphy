import * as React from 'react';
import InfiniteScrollContainer from './InfiniteScrollContainer';
import {GifObject} from '../models/Giphy';
import GifImage from './GifImage';
import {RootState} from '../reducers/rootReducer';
import {connect} from 'react-redux';
import Spinner from './Spinner';

export interface StateProps {
  isLoading: boolean;
  hasError: boolean;
  gifObjects: GifObject[];
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
    if (!this.props.isLoading && !this.props.hasError) {
      this.props.loadMoreGifs();
    }
  }

  render() {
    return (
      <InfiniteScrollContainer
        handleMore={this.conditionallyLoadMore}
      >
        { this.renderList() }
        { this.renderLoading() }
        { this.renderError() }
      </InfiniteScrollContainer>
    );
  }

  renderList() {
    const {gifObjects} = this.props;

    if (!gifObjects) {
      return null;
    }

    return (
      <ul>
        {gifObjects.map((gifObject) => {
          return (
            <GifImage gifObject={gifObject} key={gifObject.id} />
          );
        })}
      </ul>
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
        An error occurred.

        <button
          onClick={this.props.loadMoreGifs}
        >
          Do it again!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoading: state.gif.isLoading,
  hasError: state.gif.hasError,
  gifObjects: state.gif.gifObjects
});

export default connect(mapStateToProps)(InfiniteGifList);
