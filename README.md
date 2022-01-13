# restaurantAppCustomer

this is the customer side of the restaurant app made in react native. where customers can request dishes and the availability will get updated in real time

we use reducers and global states to avoid the prop hell when adding too many screens

the frontend is managed with nativebase 
### important! 
for native base to work we need to add to the app.js the nativeBaseProvider component
```
return(
    <NativeBaseProvider>
    <Components/>
    </NativeBaseProvider>
)
```

## Solving the node v17 issue

unfortunately this is only a patch and needs to be added almost every time, still waiting for a real solution

```
export NODE_OPTIONS=--openssl-legacy-provider
```

## Solving the "Backend didn't respond within 10 seconds" error from firebase

we need to add the following option to the firebase.js file

```
firebase.db.settings({ experimentalForceLongPolling: true })
```
the whole code looks like this 
```
import app from 'firebase/compat/app';
import firebaseConfig from './config';
import 'firebase/compat/firestore';

class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)

        }
        const firestore = app.firestore()
        firestore.settings({ experimentalForceLongPolling: true, merge:true });

        this.db = firestore;
    }
}
const firebase = new Firebase()
export default firebase;
```

## Things to improve

since firebase has changed so much lately the compat solution is just a patch and not a definitive answer. so the next step wold be to use react native firebase as states in the issue:

[link to issue](https://github.com/firebase/firebase-js-sdk/issues/2923)

steps
1. nstall RN Firebase
```
npm i @react-native-firebase/app @react-native-firebase/firestore
```

2. Configure RNF

      [react native documentation](https://rnfirebase.io/)

3. update the firebase.js file
```
import app from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
 
import firebaseConfig from './config';
 
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
 
    this.db = app.firestore();
  }
}
 
const firebase = new Firebase();
 
export default firebase;
```