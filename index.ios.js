/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './shim.js'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import XMPP from 'stanza.io';

export default class ReactNativeStanzaDemo extends Component {
  constructor(props) {
    super(props);
    //This is tested using a locally configured ejabberd docker container
    let client = XMPP.createClient({
      jid: 'test@localhost',
      password: 'password',

      // If you have a .well-known/host-meta.json file for your
      // domain, the connection transport config can be skipped.
      transport: 'websocket',
      wsURL: 'ws://localhost:5280/http-ws/'
      // (or `boshURL` if using 'bosh' as the transport)
    });

    client.connect();

    client.on('session:started', () => {
      console.log('Client Connected');
      client.sendMessage({
        to: "test2@localhost",
        body: "Hi Hoang! and hello world"
      });
    });

    client.on('raw:incoming', (xml) => {
      console.log('xml received: ' + xml);
    });

    client.on('raw:outgoing', (xml) => {
      console.log('xml sent:' + xml);
    });

    client.on('stream:data', (thing) => {
      console.log('stream:data' + thing);
    });

    client.on('auth:failed', (xml) => {
      console.log('Auth Failed ');
    });

    client.on('connected', () => {
      console.log('connected');
    });

    client.on('disconnected', (xml) => {
      console.log('disconnected ' + Object.keys(xml));
    });

    client.on('connected', (xml) => {
      console.log('connected ' + Object.keys(xml));
    })

    client.on('stream:error', () => {
      console.log('stream:error');
    });

    client.on('session:error', () => {
      console.log('session:error');
    });

    console.log('Tried creating a client');

  //  client.connect();
    console.log('Tried connecting to a client');

    //this.client = client;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeStanzaDemo', () => ReactNativeStanzaDemo);
