import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deletedAt" source="deletedAt" />
        <TextInput label="httt" source="httt" />
        <TextInput label="nom" source="nom" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
