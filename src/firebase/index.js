import firebase from 'firebase/app';
import config from '../config';
import 'firebase/database';



const app = firebase.initializeApp(config.firebase);

export default firebase.database();