import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'dva/router';
import DocumentTitle from 'react-document-title';


class WeUILayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }
  getChildContext() {
    const { location } = this.props;
    return { location };
  }
  getPageTitle() {
    const { getRouteData, location } = this.props;
    const { pathname } = location;
    let title = 'WeUI example';
    getRouteData('WeUILayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} - WeUI example`;
      }
    });
    return title;
  }
  render() {
    const { getRouteData } = this.props;

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <section className={`page ${this.getPageTitle()}`}>
          <div className="page__hd">
            <h1 className="page__title">{this.getPageTitle()}</h1>
            <p className="page__desc">{this.getPageTitle()}</p>
          </div>
          <div className="page__bd">
            {
              getRouteData('WeUILayout').map(item =>
                (
                  <Route
                    exact={item.exact}
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                )
              )
            }
          </div>
        </section>
      </DocumentTitle>
    );
  }
}

export default WeUILayout;
