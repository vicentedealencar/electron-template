import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import Orders from '../components/Orders';
import * as CheckoutActions from '../actions/CheckoutActions';

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const AppBar = require('material-ui/lib/app-bar');
    const IconMenu = require('material-ui/lib/menus/icon-menu');
    const Menu = require('material-ui/lib/menus/menu');
    const MenuItem = require('material-ui/lib/menus/menu-item');
    const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
    const FontIcon = require('material-ui/lib/font-icon');
    const IconButton = require('material-ui/lib/icon-button');
    const FlatButton = require('material-ui/lib/flat-button');
    const RaisedButton = require('material-ui/lib/raised-button');
    const FloatingActionButton = require('material-ui/lib/floating-action-button');
    const LeftNav = require('material-ui/lib/left-nav');

class CheckoutContainer extends Component {
  renderCheckout() {
    const { products, cart, dispatch } = this.props;

    const actions = bindActionCreators(CheckoutActions, dispatch);

    return <Checkout products={products} cart={cart} actions={actions} />;
  }

  render() {
    return (<div>
      <LeftNav ref="leftNav" docked={false} onNavClose={() => this.refs.leftNav.close()}>
        <MenuItem index={0}>asdasdsa</MenuItem>
        <MenuItem index={1}>asdasdsa</MenuItem>
      </LeftNav>
      <AppBar
        title="Title"
        iconElementLeft={<IconButton onClick={() => this.refs.leftNav.toggle()}><MoreVertIcon /></IconButton>} />
      {this.renderCheckout()}
    </div>);
  }
}

export default connect(state => ({
  products: state.products,
  cart: state.cart
}))(CheckoutContainer);
