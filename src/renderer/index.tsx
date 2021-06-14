import { Test } from '../shared/test';

declare namespace window {
  const test: any;
}

console.log('window.test instanceof Test:', window.test instanceof Test);
