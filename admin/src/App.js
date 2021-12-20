import logo from './logo.svg';
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import './App.css';
import {PlayerList} from "./players";

const dataProvider = jsonServerProvider('http://localhost:4000');
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="players" list={ PlayerList }/>
    </Admin>
);

export default App;