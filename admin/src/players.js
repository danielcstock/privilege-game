import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const PlayerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);