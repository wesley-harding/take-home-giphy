import * as React from 'react';
import SearchBox from '../components/SearchBox';
import {Action} from 'typesafe-actions';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import InfiniteGifList from '../components/InfiniteGifList';
import {fetchSearchNextPageAsync, resetGifListState} from '../actions/gifList.actions';
import {RouteComponentProps, withRouter} from 'react-router';
import Header from '../components/Header';

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
      <div className="page search-page">
        <Header />
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
  resetGifState: () => dispatch(resetGifListState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
