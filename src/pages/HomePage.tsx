import * as React from 'react';
import {Action} from 'typesafe-actions';
import {Dispatch} from 'redux';
import {RootState} from '../reducers/rootReducer';
import {fetchTrendingNextPageAsync} from '../actions/gif.actions';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import InfiniteGifList from '../components/InfiniteGifList';

interface DispatchProps {
  fetchTrending: () => void;
}

interface Props extends DispatchProps {}

class HomePage extends React.Component<Props> {
  componentDidMount(): void {
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

const mapStateToProps = (state: RootState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => ({
  fetchTrending: () => dispatch(fetchTrendingNextPageAsync.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
