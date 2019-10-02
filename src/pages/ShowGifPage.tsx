import * as React from 'react';
import {Dispatch} from 'redux';
import {Action} from 'typesafe-actions';
import {fetchGifByIdAsync, resetGifState} from '../actions/gif.actions';
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';
import {GifObject} from '../models/Giphy';
import {RootState} from '../reducers/rootReducer';
import Spinner from '../components/Spinner';
import GifFeatureImage from '../components/GifFeatureImage';
import Header from '../components/Header';
import './ShowGifPage.less';

export interface RouteParams {
  id: string;
}

interface StateProps {
  gifObject?: GifObject;
  hasError: boolean;
  isLoading: boolean;
}

interface DispatchProps {
  fetchGifById: () => void;
  resetGifState: () => void;
}

export interface Props extends StateProps, DispatchProps, RouteComponentProps<RouteParams> {}

class ShowGifPage extends React.Component<Props> {
  componentDidMount() {
    this.props.resetGifState();
    this.props.fetchGifById();
  }

  render() {
    return (
      <div className="page show-gif-page">
        <Header />
        { this.renderContent() }
      </div>
    );
  }

  renderContent() {
    if (this.props.isLoading) {
      return (
        <Spinner />
      );
    }

    if (this.props.hasError || !this.props.gifObject) {
      return (
        <div className="error">
          Could not load your GIF. :(
        </div>
      );
    }

    return (
      <GifFeatureImage gifObject={this.props.gifObject} />
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  gifObject: state.gif.gifObject,
  hasError: state.gif.hasError,
  isLoading: state.gif.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>, ownProps: Props): DispatchProps => ({
  fetchGifById: () => {
    const id = ownProps.match.params.id;
    dispatch(fetchGifByIdAsync.request(id));
  },
  resetGifState: () => dispatch(resetGifState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowGifPage);
