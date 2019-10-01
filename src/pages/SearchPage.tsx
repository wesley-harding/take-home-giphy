import * as React from 'react';
import SearchBox from '../components/SearchBox';
import {Action} from 'typesafe-actions';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import InfiniteGifList from '../components/InfiniteGifList';
import {fetchSearchNextPageAsync, resetGifState} from '../actions/gif.actions';
import {RouteComponentProps, withRouter} from 'react-router';

export interface RouteParams {
  query: string;
}

interface DispatchProps {
  fetchSearch: () => void;
  resetGifState: () => void;
}

export interface Props extends DispatchProps, RouteComponentProps<RouteParams> {

}

class SearchPage extends React.Component<Props> {
  componentDidMount(): void {
    this.props.resetGifState();
    this.props.fetchSearch();
  }

  render() {
    return (
      <div>
        Search Page
        <SearchBox />
        <hr/>
        <InfiniteGifList
          loadMoreGifs={this.props.fetchSearch}
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>, ownProps: Props): DispatchProps => ({
  fetchSearch: () => {
    const query = ownProps.match.params.query;
    dispatch(fetchSearchNextPageAsync.request(query));
  },
  resetGifState: () => dispatch(resetGifState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
