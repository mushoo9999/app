import React, {
  Component
} from "react";
import {
  StackNavigator
} from 'react-navigation'
import LoginComponet from './LoginComponet'
import GankShowComponent from "./GankShowComponent";
import WebViewComponet from "./WebViewComponet";
const Navigator = StackNavigator({
  Home: {
    screen: LoginComponet
  },
  Home1: {
    screen: GankShowComponent
  },
  Home2: {
    screen: WebViewComponet
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: null
  },
  mode: 'card',
});

export default class Router extends Component {

  render() {
    return (
      <Navigator  />
    )
  }
}