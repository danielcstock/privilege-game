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

export const RaceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="total_players" />
            <NumberField source="lane_size" />
            <CloneButton />
        </Datagrid>
    </List>
);

export const RaceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="total_players" />
            <NumberInput source="lane_size" />
            <TextField source="status" />
            <ArrayInput source="questions">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <TextInput source="content" />
                    <NumberInput source="score" value={1}/>
                    <TextField source="type" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const RaceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="total_players" />
            <NumberInput source="lane_size" />
            <TextInput source="status" />
            <ArrayInput source="questions">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <TextInput source="content" />
                    <NumberInput source="score" />
                    <NumberInput source="type" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);