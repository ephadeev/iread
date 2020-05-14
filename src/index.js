import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './all.min.css';
import './index.css';
import store from "./Redux/redux-store";
import App from "./App";
import firebase from "firebase";

const initFirebase = () => {
    let firebaseConfig = {
        apiKey: "AIzaSyB_1Y2KFoOMHSSmrkbgX2_VQB5ZDI_BuZY",
        authDomain: "iread-529b4.firebaseapp.com",
        databaseURL: "https://iread-529b4.firebaseio.com",
        projectId: "iread-529b4",
        storageBucket: "iread-529b4.appspot.com",
        messagingSenderId: "598382842689",
        appId: "1:598382842689:web:8e579c1da14f9e5cc547c0",
        measurementId: "G-S5GF7FYN7K"
    };
    return firebase.initializeApp(firebaseConfig);


};
let defaultProject = initFirebase();

let users = [
    {name: 'Richard Hendricks', image: 'https://www.kinopoisk.ru/1Yb700r80/909e31LJrpil/VJg-BJ4YlsrTrfrN_pUdjwXgTy1XbH1oG-Jea_fKeEe5zgkwcKzehuw9lI6qjWvAN91Siv2Rk6ZnRNTDSJvYhEKsqLdNfRX75iwKT--V3Wl38l7It37sWCqwObiHi1s1ywzbclNM_JJNzvWMKD5sNkAedj16RvSgY3CEsXjfCTcBHHvXz78Ha8RPWmyfV6yIZUBMSiUtrlgIkCh7lJmIBKqeukNQb74yPS60P3o9vjUgfHSu6OfXo_ADVIF7vvjH4fyKRJ_OlBmF_ohdXmTMOXewv3gk3t1LedP5ixZ6KEcLfblicg5N4Mz_NawKr33Fo3_E70gGVnCRYUbBKk7q92MvWKXfTlSolR46zU5ULBr3wCw59m0uSirTqahnGHjGKu77IoBNn4NN7FeMy-xtZsDt5-74FFWQEiDkAFoeepdzL2tlnm6X2_Tva7yfx_5JNhI-u3Xsv5npI6qJxrlI5QuuilAwDt2Sru81LPsfrrRTjfauq5S18bMDR2MYrUi0wD675Z0eZtrVHgndPjZPWVfgr0nF7HxZyhGr6vS7SKaqzLlistwMwj49FEzbDH-GII_1XhollvMwgUcBSG6rlCMsK3T_jTfrx335zrx2PLqHcq54tI8uC_lCO6sniCgX-C6JcWFPf8M-3Lce6K8eN-CcFp9Y5uZSo2AVIQifCXcQbEtlXxznawbdOv0sRD9ZRxO-GMVcHVo40fp79UkaFDiNq7Fwzg9zPJ00_GhcT_fQDFWPyLZFs6GRBhL4HWqlw53rh558VuqF7Sid3ZQeS5Vyzul2vtwICJJbGSUbexYoD6mhgBzd8b8-Rsx7bC914e2HXpgFxeKBQgaTaszbhPKcuhUfTdQ5RD6aTo1GXYtUAkxKh25_-JkASAl0eFoVGx4KkWDOHdEsviTtyOwu1eN9Jqy5tkTzMMN0Eslte-SzffvnnR7n-aZMqc4ttb-bJzBPKpWMDStYg-v59mho9-hcelOCzJ6wfu3VXIlN38YRzNctueQlg0LghsL63okmABx79U5P1oq3Xlp-DVYti_YRHNim_A1IOfDIyQbIWoXbPelAAI-ssX_tpOz6vJ3F4B01zrplZ-ICk7ZDyo779vCvSZWeHKXbpY9qPU13_Wu1s11q1p09uRnj6LqV23r067x4EdL_LeCsvQTOSV0MRELOxz-4ZuRDYnAEkJgcWRdyD8nULd_lS4Qee79-BD6LJYCdWrSs_Qhao3pZJam7x5m86lFR_K9zLd6ljCoN7gYwv-SOuKS24RDDNSAbTzr24hy5Z958txt1Prv-XJQPa7czXXs3fg2K2iBo6KRpiDTbb6uioK0dg10vFjwZDL7k0D8nfWokh4HikoSTKr1bVrIuadePjtfpxM_L745UXnlkMW1ah-38WQlyOPn2-Crm6q-IcAKOnGNMbac9Cq4MtSAuFV1L5mewInOWcNivWUTyXFnWzz8XGMW9SM_8FT46lGDMGDd9ranrwMr6pOmahFl_yaIDb12wvgzHL8t-P3bwzIb-q-ZUg4DitrEoDrm2E3y5pc1OVGjlnNicfiXdmYXArClFDOzaqRIpu_bqOCT4b4hgMh58o74uF2yIL04mI9xnjukURkNSwRYSCrzJN0HNSeXdzsSIVZ477rw23ZjFk15KNMwsO3uQCKsXORk2Ks_I0XJ8XgCdz4cdey3d50Bfpv249_bz07NHMQidmgSxHdpV7D6Vaqc_SH0v149qd1D82sdeDWvI4agJFVspFij9uoKAjgwxL--XnttNLBdCLATd-sWmUiNzFMMo3EtEUE-p5r7-5FjGTQrsvPRfWSdzv3rHDexIy0FLmJVZ2zc4rNkAw22sco5_pk4JDmyncp2374omFrOSYMQgOAzoxSK-6AVNTiXp9txa_fzFzVikAt8KBuwcCNuiO-rnu5g2iN0JQbA9bALuPIQ82-9upWGsZt46lkZycwE2UOu_a1YwH-hF3Ry2q2RNWLwf1s6rZEC8WydMjGqrYhq6t0gphdjeSvNx_64gPZzmfjj9fdYBfyb_6qaW08MwhzAKbruWk42olu4-RrpET-ufrfcc2pcwLFjlLO4qK_DquQeIeeYqbFjwUI79w12PlZ6bzl200j-lfOhG5PNikEZAKP7JxOGPuKV8buVrRH9KHT31_ijX0T_J1U09-TlTOwi32qpX618Yw8Neb7OPPqbe2E0vhhD-Ne7ZtJZD0pBnQVr9-sVxz9vXTyyUCYQPKo895z87FbK-eqW-b8i5kAi5xZg6VniuutHS7o5Tnh03rviMLVXjTpWMiJYmglDxNOC4v4nlcY6rpR9Mh0sW3Rj-nGWOWuQxH_sVjl_4S1JZmad5yMZ4fdkSoQ0-IswsBM0JL4_XQv4GH_uENhJAQ7UQm7yYhrBuSiW9jySp9_87_g31vSrEov5KJozeKqqAyisnG4oXGl75QKEMfLDvLAcfOs9vpZJ_5-3pFPZigPJXwzm96QSz7hml7-4U6fVumVweNn5rJGJfG1XMLjn4EzsLdNm4BbocOuKTPvxxjO3EXikenVUB3FXtqef2UiERVuNanvqGA42qtp4uRiqUD3ivPJRsq6ZSXIqnfG1pKrJoeMWqmjWrbDmgk39Ocj6PhGyaX54l867X36vHR4NCAyTSCr-rhxEeWCWe3Ed5lzyZ_zxX3Cpnc356hVxsCeviS7lUe9umSN6IYLCdveN-nIcdyN--VROM5f67FKWQIlOkomnty7XivUoEP0yGG3ZdWD_MVR67h8MteCTO36qLQisJJRtLtaj8eiHybN3wjY3EzBo-TbWwzhfciPbU0RMAVPBrrrgHIx9rdr8_NKjV3WtNLFWeuLSBHroFPh4b-CH4GfcoOpToX6qSQqxMgT--5i4KTWw0wD2nfenFV8CCAJUCWex5ZhMe-FS9P-QJRO04Tz4WPKq3wO5Yte--KumjuwnFSkoGSNxLsdDcnHBvn-Ss-08ch6LMlT6axcQz0'},
    {name: 'Nelson Bighetti', image: 'https://www.kinopoisk.ru/images/sm_actor/1852968.jpg'},
    {name: 'Bertram Gilfoyle', image: 'https://www.kinopoisk.ru/images/sm_actor/11897.jpg'},
    {name: 'Dinesh Chugtai', image: 'https://www.kinopoisk.ru/images/sm_actor/1833413.jpg'},
    {name: 'Monica Hall', image: 'https://www.kinopoisk.ru/images/sm_actor/731114.jpg'},
    {name: 'Jared', image: 'https://www.kinopoisk.ru/images/sm_actor/1085386.jpg'}
];

const renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             users={users}
             defaultProject={defaultProject} />,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
