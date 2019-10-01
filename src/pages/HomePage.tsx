import * as React from 'react';
import {Action} from 'typesafe-actions';
import {Dispatch} from 'redux';
import {fetchTrendingNextPageAsync, resetGifListState} from '../actions/gifList.actions';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import InfiniteGifList from '../components/InfiniteGifList';

interface Props {
  fetchTrending: () => void;
  resetGifState: () => void;
}

class HomePage extends React.Component<Props> {
  componentDidMount(): void {
    this.props.resetGifState();
    this.props.fetchTrending();
  }

  render() {
    return (
      <div>
        <p>Happy coding!</p>
        <hr/>
        <SearchBox />
        <hr/>
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
  resetGifState: () => dispatch(resetGifListState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
