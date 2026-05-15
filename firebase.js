import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getFirestore
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
getAuth
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyAalS33kADTW9D2RkXXZ27n9TFvd9TAVJM",

authDomain: "englis-results.firebaseapp.com",

projectId: "englis-results",

storageBucket: "englis-results.firebasestorage.app",

messagingSenderId: "467628171773",

appId: "1:467628171773:web:26d848542fdb89aea17994"

};

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

const auth =
getAuth(app);

export {
db,
auth
};
