import * as React from "react";
import {List, Datagrid, TextField, EmailField, BooleanField, NumberField} from 'react-admin';

export const PlayerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="occupation" />
            <BooleanField source="is_leader" />
            <NumberField source="skin_tone" />
            <NumberField source="gender" />
            <NumberField source="score" />
        </Datagrid>
    </List>
);