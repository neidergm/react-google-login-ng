import React from 'react';
import GButton from './components/GButton';

function App() {
  return (
    <div className="App">
      <GButton
        client_id='227610805652-c451askq3usbv82f8e7v6g3qd6i1vdpq.apps.googleusercontent.com'
        disabled={false}
        successCallback={(resp) => {
          console.log(resp)
        }}
      />
    </div>
  );
}

export default App;
