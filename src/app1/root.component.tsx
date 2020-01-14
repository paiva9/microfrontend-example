import * as React from 'react';
import './style.css';

export default class Root extends React.Component<any,any> {
  render() {
    return (
        <div className="react" style={{marginTop: '100px'}}>
          Hello from React
        </div>
    );
  }
}
