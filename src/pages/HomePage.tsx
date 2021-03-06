import * as React from 'react';
import {Action} from 'typesafe-actions';
import {Dispatch} from 'redux';
import {fetchTrendingNextPageAsync, resetGifListState} from '../actions/gifList.actions';
import {connect} from 'react-redux';
import InfiniteGifList from '../components/InfiniteGifList';
import Header from '../components/Header';

interface Props {
  fetchTrending: () => void;
  resetGifListState: () => void;
}

class HomePage extends React.Component<Props> {
  componentDidMount(): void {
    this.props.resetGifListState();
    this.props.fetchTrending();
  }

  render() {
    return (
      <div className="page home-page">
        <Header />
        <InfiniteGifList
          loadMoreGifs={this.props.fetchTrending}
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): Props => ({
  fetchTrending: () => dispatch(fetchTrendingNextPageAsync.request()),
  resetGifListState: () => dispatch(resetGifListState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
