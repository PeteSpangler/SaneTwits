import React, { useState } from 'react';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';

const columns = [
  {
    title: 'Students',
    field: 'name',
  },
  {
    title: 'Groups',
    field: 'num',
  },
];

export const MTable = () => {
  const { handleSubmit, register } = useForm();

  const [data] = useState([
    {
      name: 'Bob',
      id: 1,
    },
    {
      name: 'Albert',
      id: 2,
    },
    {
      name: 'Shania',
      id: 3,
    },
    {
      name: 'Erika',
      id: 4,
    },
    {
      name: 'Desmond',
      id: 5,
    },
    {
      name: 'Shai',
      id: 6,
    },
  ]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <MaterialTable
        title="Spinndle Student Groups"
        columns={columns}
        data={data}
        options={{
          paging: false,
          search: false,
          draggable: false,
        }}
        components={{
          EditField: ({ columnDef, value, onChange }) => (
            <TextField
              type="text"
              name={columnDef.field}
              inputRef={{ required: true }}
              defaultValue={value}
            />
          ),
        }}
        editable={{
          // This function needs to return a promise, and it does,
          // but it's always resolved, as the edit row closes
          // I need it to be rejected if validation fails
          onRowUpdate: (newData, oldData) => handleSubmit(onSubmit)(),
        }}
      />
    </div>
  );
};
