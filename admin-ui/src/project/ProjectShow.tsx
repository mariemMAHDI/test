import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROJECT_TITLE_FIELD } from "./ProjectTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="nom" source="nom" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Ticket"
          target="ProjectId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="deletedAt" source="deletedAt" />
            <TextField label="httt" source="httt" />
            <TextField label="ID" source="id" />
            <TextField label="nom" source="nom" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
