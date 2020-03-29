
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import thunk from "redux-thunk";

import reducer from './Redux/reducer';

const store = createStore(reducer, applyMiddleware(thunk));



import Campaigns from './elements/campaigns';

console.disableYellowBox = true; // Disable warnings on a phone screen

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: false,
            error: false
        }
    }
/*
    async getCampaigns() {
        const response = await fetch('http://' + serverHost + ':' + serverPort + '/api/v1/campaigns');
        const body = await response.json();

        if (response.status !== 200) {
          return this.setState({
              error: body.message
          })
        }

        this.setState({
            campaigns: body.campaigns
        })
    }
*/
    render() {

        return (
            <Provider store={store}>
                <Campaigns/>
            </Provider>
        );

      /*
      CampaignInfo

        return (<View>

                  {this.state.campaigns && this.state.campaigns.map((value, index) => {
                      return <MenuItem value={value.name}/>
                  })}

              </View>)

              */
    };
};

export default App;
