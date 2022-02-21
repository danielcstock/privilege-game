import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    ArrayInput,
    SimpleFormIterator,
    Create,
    AutocompleteInput,
    CloneButton
} from 'react-admin';

export const SessionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="status" />
            <NumberField source="total_players" />
            <NumberField source="lane_size" />
        </Datagrid>
    </List>
);

export const SessionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="total_players" />
            <TextField source="lane_size" />
            <AutocompleteInput source="status" choices={[
                { id: 'ready', name: 'Ready' },
                { id: 'in progress', name: 'In Progress' },
                { id: 'finished', name: 'Finished' },
                { id: 'canceled', name: 'Canceled' },
            ]} />
            <ArrayInput source="questions">
                <SimpleFormIterator>
                    <TextInput source="content" />
                    <AutocompleteInput source="status" choices={[
                        { id: 'Open', name: 'Open' },
                        { id: 'Close', name: 'Close' }
                    ]} />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);