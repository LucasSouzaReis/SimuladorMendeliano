// Importar Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB6YhPbwe9pVkfNUcDjXbfV3qThbYLRUzo",
    authDomain: "siteportalensinociencias.firebaseapp.com",
    databaseURL: "https://siteportalensinociencias-default-rtdb.firebaseio.com",
    projectId: "siteportalensinociencias",
    storageBucket: "siteportalensinociencias.firebasestorage.app",
    messagingSenderId: "678990368201",
    appId: "1:678990368201:web:c4dcfe896f428b23112c18",
    measurementId: "G-QBWTJE42BX"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

//Referência ao banco de dados
const database = firebase.database();

