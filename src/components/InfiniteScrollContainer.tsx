import * as React from 'react';
import {ReactNode} from 'react';
import {RefObject} from 'react';

export interface OwnProps {
  children: ReactNode;
  handleMore: () => void;
}

class InfiniteScrollContainer extends React.Component<OwnProps> {
  private ref: RefObject<HTMLDivElement>;

  constructor(props: OwnProps) {
    super(props);

    this.ref = React.createRef();
    this.throttledCheckOverflow = this.throttledCheckOverflow.bind(this);
    this.checkScrollOverflow = this.checkScrollOverflow.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttledCheckOverflow, {passive: true});
    window.addEventListener('resize', this.throttledCheckOverflow, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledCheckOverflow);
    window.removeEventListener('resize', this.throttledCheckOverflow);
  }

  componentDidUpdate() {
    this.throttledCheckOverflow(); // Handles when content smaller than scroll area
  }

  throttledCheckOverflow() {
    window.requestAnimationFrame(this.checkScrollOverflow);
  }

  checkScrollOverflow(): void {
    if (!this.ref || !this.ref.current) {
      return;
    }

    if (this.ref.current.getBoundingClientRect().bottom < window.innerHeight) {
      this.props.handleMore();
    }
  }

  render() {
    return (
      <div ref={this.ref}>
        { this.props.children }
      </div>
    );
  }
}

export default InfiniteScrollContainer;
