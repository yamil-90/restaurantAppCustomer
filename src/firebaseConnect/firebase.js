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
