/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'Employee Name',
  label: 'Employee Name',
  type: 'text',
  id: 'Employee Name',
  placeholder: 'write your Employee Name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}


export const desc_validation = {
  name: 'description',
  label: 'Employee description',
  multiline: true,
  id: 'description',
  placeholder: 'Profile Description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const num_validation = {
  name: 'num',
  label: 'Employee number',
  type: 'number',
  id: 'num',
  placeholder: 'write a Employee Number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'Employe email address',
  type: 'email',
  id: 'email',
  placeholder: 'write a random Employee email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}


export const joiningDate_validation = {
  name: 'joiningDate',
  label: 'Joining Date',
  type: 'date',
  id: 'joiningDate',
  placeholder: 'Select Joining Date',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}