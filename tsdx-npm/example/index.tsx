import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GoogleLogin from './..';

const App = () => {
  return (
    <div style={{ display: "grid", placeContent: "center", height: "90vh" }}>
      <div style={{ maxWidth: "300px", display: "grid", placeContent: "center" }}>
        <GoogleLogin
          client_id='your_client_id_here'
          successCallback={({ credential, select_by }) => {
            console.log(credential, select_by);
          }}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
