//import logo from './logo.svg';
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import './App.css';
import UserIcon from '@material-ui/icons/Group';
import RaceIcon from '@material-ui/icons/DirectionsRun'
import {RaceList, RaceEdit, RaceCreate} from "./models/races";

const dataProvider = jsonServerProvider('http://localhost:4000');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="players" list={ ListGuesser } icon={UserIcon} />
        <Resource name="races" list={ RaceList } edit={ RaceEdit } create={ RaceCreate } icon={RaceIcon} />
    </Admin>
);
export default App;