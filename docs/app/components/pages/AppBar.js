import React, { Component } from 'react';
import { AppBar } from 'rc-ui';

class AppBarPage extends Component {

  render() {

    let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'center'};
    let s3 = {textAlign: 'right'};

    return (
      <div>
        <h1>
           正常导航栏
        </h1>
        <AppBar>
          <table width="100%">
            <tr style={s1}>
              <td className="mui--appbar-height">Left</td>
              <td className="mui--appbar-height" style={s2}>Center</td>
              <td className="mui--appbar-height" style={s3}>Right</td>
            </tr>
          </table>
        </AppBar>
      </div>
    );
  }
}

export default AppBarPage;
