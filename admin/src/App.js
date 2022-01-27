//import logo from './logo.svg';
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import './App.css';
import UserIcon from '@material-ui/icons/Group';
import RaceIcon from '@material-ui/icons/DirectionsRun'
import {RaceList, RaceEdit, RaceCreate} from "./models/races";
import {PlayerList} from './models/players';
import Dashboard from './models/dashboard';
import AuthProvider from './models/authProvider';

const dataProvider = jsonServerProvider('http://localhost:4000');

const App = () => (
    <Admin
        dashboard={Dashboard}
        dataProvider={dataProvider}
        authProvider={AuthProvider}>
        <Resource name="players" list={ PlayerList } icon={UserIcon} />
        <Resource name="races"
                  list={ RaceList }
                  edit={ RaceEdit }
                  create={ RaceCreate }
                  icon={RaceIcon} />
    </Admin>
);
export default App;