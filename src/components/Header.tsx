import * as React from 'react';
import SearchBox from './SearchBox';
import './Header.less';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <h1 className="title">
        <Link to="/">
          Spiphy
        </Link>
      </h1>
      <SearchBox/>
    </div>
  );
}
