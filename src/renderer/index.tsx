import './styles';

import '@rmwc/button/styles';
import '@rmwc/textfield/styles';

import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from '@rmwc/button';
import {TextField} from '@rmwc/textfield';

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
  return (
    <>
      <Button raised>
        Test Button
      </Button>
      <TextField label="Test TextField"/>
      <div className="test">Local stylesheet</div>
    </>
  );
}
