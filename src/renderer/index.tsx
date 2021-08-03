import './styles';

import '@rmwc/button/styles';

import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from '@rmwc/button';

import {Test} from '../shared/test';

declare namespace window {
  const test: any;
}

start();

export function start(): void {
  console.log('window.test instanceof Test:', window.test instanceof Test);

  ReactDOM.render(<App/>, document.getElementById('root'));
}

function App() {
  return (<>
      <Button raised>
        Test
      </Button>
      <div className="test">Local stylesheet</div>
    </>
  );
}
