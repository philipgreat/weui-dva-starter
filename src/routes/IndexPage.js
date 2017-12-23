import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

import PropTypes from 'prop-types';
import { Link, Route, Redirect, Switch } from 'dva/router';
import DocumentTitle from 'react-document-title';

import Contact from '../bizcomponents/Contact'
import BadgeDemo from '../bizcomponents/BadgeDemo'
import Button from '../bizcomponents/Button'

import 'weui';
import WeUI from 'react-weui';
class IndexPage extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }
  getChildContext() {
    const { location } = this.props;
    return { location };
  }
  getPageTitle() {
    
    return "demo";
  }
  render() {
    

    return (
    
          <Switch >
          <Route path="/contact" component={Contact} />
          <Route path="/bg" component={BadgeDemo} />
          <Route path="/bt" component={Button} />
          
            
          </Switch>
    );
  }
}



export default connect()(IndexPage);

/*

   return (
      <DocumentTitle title={'微信测试'}>
        <section className={`page $`}>
          <div className="page__hd">
            <h1 className="page__title"></h1>
            <p className="page__desc"></p>
          </div>
          <div className="page__bd">
          
          </div>
        </section>
        <Switch >
            <Route path="/contact" component={Contact} />
          </Switch>
      </DocumentTit

*/