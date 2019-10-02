import * as React from 'react';
import {ChangeEvent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import './SearchBox.less';

export interface RouteParams {
  query: string;
}

export interface Props extends RouteComponentProps<RouteParams> {}

export interface State {
  val: string;
}

class SearchBox extends React.Component<Props, State> {
  state: State = {
    val: '',
  };

  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      val: e.target.value,
    });
  }

  handleSubmit() {
    this.props.history.push(`/search/${this.state.val}`);

  }

  render() {
    return (
      <form
        className="search-box"
        onSubmit={this.handleSubmit}
      >
        <input
          type="search"
          placeholder="Search for GIFs"
          defaultValue={this.props.match.params.query}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <button
          onClick={this.handleSubmit}
        >
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBox);
