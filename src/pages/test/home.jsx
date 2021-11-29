import React from 'react';

import { BasePage } from 'simple-framework/base';

import { Block0, Block3, Block5 } from 'simple-framework';

export default class Index extends BasePage {
  constructor(props) {
    super(props);
    this.pageId = 'pv-test';
  }

  componentDidMount() {
    console.log('didmount in test simple page');
    super.componentDidMount();
  }

  render() {
    return <div>{}</div>;
  }
}
