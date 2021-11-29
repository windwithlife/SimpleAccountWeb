import React from 'react';

import { SimplePage } from 'simple-framework/base';

import { Block0, Block3, Block5 } from 'simple-framework';

export default class Index extends SimplePage {
  constructor(props) {
    super(props);
    this.pageId = 'pv-test';

    this.registerComponent('block0', Block0);
    this.registerComponent('block3', Block3);
  }

  componentDidMount() {
    console.log('didmount in test simple page');
    super.componentDidMount();
    this.appendSectionByName('block0');
    this.appendSectionByName('block3');
    this.appendSection(Block5);
    this.renderPage();
  }
  onClick = () => {
    console.log('onclick');
    //this.goto({pathname:'/',query:{name:'zhangyongqiao'}});
  };

  render() {
    return <div>{this.sections()}</div>;
  }
}
