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
    BooleanInput,
    ArrayInput,
    SimpleFormIterator,
    Create,
} from 'react-admin';

export const RaceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="total_players" />
            <NumberField source="lane_size" />
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
            <TextInput source="prize" />
            <BooleanInput source="has_prize" />
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
            <TextInput source="prize" />
            <BooleanInput source="has_prize" />
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