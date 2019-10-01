import * as React from 'react';
import {Action} from 'typesafe-actions';
import {Dispatch} from 'redux';
import {RootState} from '../reducers/rootReducer';
import {fetchTrendingAsync} from '../actions/gif.actions';
import {connect} from 'react-redux';
import {GifObject} from '../models/Giphy';
import GifImage from '../components/GifImage';
import InfiniteScrollContainer from '../components/InfiniteScrollContainer';

interface StateProps {
  gifObjects: GifObject[];
}

interface DispatchProps {
  fetchTrending: () => void;
}

interface Props extends StateProps, DispatchProps {}

class HomePage extends React.Component<Props> {
  public componentDidMount(): void {
    this.props.fetchTrending();
  }

  public render() {
    return (
      <div>
        <p>Happy coding!</p>
        <hr/>
        <InfiniteScrollContainer
          handleMore={() => {
            console.log('load more'); // TODO: load more
          }}
        >
          { this.renderList() }
        </InfiniteScrollContainer>
      </div>
    );
  }

  // TODO: Move to a different component and key the elements
  renderList() {
    const { gifObjects } = this.props;

    if (!gifObjects) {
      return null;
    }

    return (
      <ul>
        { gifObjects.map((gifObject) => {
          return (
            <GifImage gifObject={gifObject} />
          );
        }) }
      </ul>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  gifObjects: state.gif.gifObjects,
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => ({
  fetchTrending: () => dispatch(fetchTrendingAsync.request(undefined)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
