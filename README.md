# react-native-stanza-demo
Test repository for integrating Stanza.io with React Native. (incredibly disorganized)

Tentative Setup Instructions:

```
1. npm install stanza.io --save
2. npm install react-native-browser-builtins --save
3. npm install rn-nodeify --save-dev 
4. ./node_modules/.bin/rn-nodeify --install --hack 
//Definitely need stream, crypto and something else for "vm", but did not track down which module vm came from yet.
```

For your package.json, adding a postinstall can be helpful:

`"postinstall": "rn-nodeify --install --hack"`

**Note:** I had to use [this commit](https://github.com/mvayngrib/rn-nodeify/commit/81fd8bf49a6db6c968ef40452a907eb2bda5cb02), which is not yet on NPM for rn-nodeify.

**Note** Again, you probably don't need everything, but you definitely need stream, crypto and something else for "vm", but did not track down which module vm came from yet.

After the above process, index.ios.bundle and index.android.bundle will be properly built by the packager. 

Upon connecting, random-bytes may throw an "secure random number generation not supported by this browser", this is caused by not having react-native-crypto properly installed.
