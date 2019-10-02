import * as React from 'react';
import './Spinner.less';

// Source: https://loading.io/css/
export default function Spinner() {
  return (
    <div className="spinner">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
