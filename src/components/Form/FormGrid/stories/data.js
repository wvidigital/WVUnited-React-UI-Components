// Define some dummy JSON objects which will be later requested from the API.

export const selectFieldProps = {
  name: 'field_select_gender',
  label: 'First name',
  type: 'select',
  value: '',
  data: [
    {
      label: '-- Please select --',
      value: '_null'
    },
    {
      label: 'Girl',
      value: 'girl'
    },
    {
      label: 'Boy',
      value: 'boy'
    }
  ],
  settings: {
    required: true,
    maxLength: 20,
    errorMessage: "The field should not exceed @maxLength characters DE",
  },
  handleChange: (name, value) => handleFieldChange(name, value),
}

export const selectFieldErrorProps = {
  ...selectFieldProps,
  formGridErrorMessage: 'Oops I did it again.',
}


export const textFieldProps = {
  name: 'field_text',
  label: 'First name',
  type: 'text',
  value: '',
  settings: {
    required: true,
    placeholder: 'John Smith',
    maxLength: 20,
    errorMessage: "The field should not exceed @maxLength characters DE",
  },
  handleChange: (name, value) => handleFieldChange(name, value),
  handleVisibility: (name, value) => handleFieldVisibility(name, value),
}

export const textFieldErrorProps = {
  ...textFieldProps,
  error: 'Bitte auswahlen',
}


export const radioFieldProps = {
  name: 'field_radio',
  type: 'radio',
  data: [
    {
      label: 'Boy',
      value: 'boy'
    },
    {
      label: 'Girl',
      value: 'girl'
    },
  ],
  label: 'Radio field',
  handleChange: (event) => handleEventFieldChange(event),
}

export const radioFieldErrorProps = {
  ...radioFieldProps,
  formGridErrorMessage: 'Field is required',
}



export const checkboxFieldProps = {
  name: 'field_checkbox',
  type: 'checkbox',
  label: 'Checkbox field',
  required: true,
  handleChange: (name, value) => handleFieldChange(name, value),
  handleVisibility: (name, value) => handleFieldVisibility(name, value),
  fieldState: {
    errorMessages: '',
    name: 'field_checkbox',
    required: true,
    value: 'on',
    visible: false
  }
}

export const checkboxFieldErrorProps = {
  ...checkboxFieldProps,
  fieldState: {value: ''},
  formGridErrorMessage: 'Field is required',
}


export const numberFieldProps = {
  name: 'field_number',
  type: 'number',
  label: 'Phone',
  required: true,
  placeholder: '0123456789',
  handleChange: (name, value) => handleFieldChange(name, value),
  handleVisibility: (name, value) => handleFieldVisibility(name, value),
  fieldState: {
    errorMessages: '',
    name: 'field_number',
    required: true,
    value: '',
    visible: false
  }
}

export const numberFieldErrorProps = {
  ...numberFieldProps,
  formGridErrorMessage: 'Oops let me validate this..',
}



export const textareaFieldProps = {
  name: 'field_textarea',
  type: 'textarea',
  label: 'Your message',
  required: true,
  placeholder: 'John Smith',
  handleChange: (name, value) => handleFieldChange(name, value),
  handleVisibility: (name, value) => handleFieldVisibility(name, value),
  fieldState: {
    errorMessages: '',
    name: 'field_textarea',
    required: true,
    value: '',
    visible: false
  }
}

export const textareaFieldErrorProps = {
  ...textareaFieldProps,
  formGridErrorMessage: 'Oops let me validate this..',
}


// Dummy functions that need to be passed to the child component.
function handleFieldChange(name, value) {
  console.log('handle field change', name, value);
}
// Dummy functions that need to be passed to the child component.
function handleEventFieldChange(event) {
  console.log('handle field change', event);
}
function handleFieldVisibility(name, value) {
  console.log('handle field visibility', name, value);
}
function handleSearch() {
  console.log('handle search');
}

export const formGridProps = () => {
    const num = 9;
    let items = [];
    let copyItems = [];
    // Add fields to array
    items.push(selectFieldProps)
    items.push(textFieldProps)
    items.push(radioFieldProps)
    items.push(checkboxFieldProps)
    items.push(textFieldProps)
    items.push(numberFieldProps)
    items.push(textareaFieldProps)

    // Mix them randomly

    // for (let i = 0; i < num; i++) {
      for (let j = 0; j < 7; j++) {
        copyItems[j] = Object.assign({}, items[j])
        copyItems[j] = Object.assign({}, {
          name: items[j].name + '_' + j,
          required: (Math.round(Math.random()) > 0),
          ...items[j],
          }
        )
      }
    // }

    return copyItems;
  }


export const topNavigationProps = {
  position: 'top',
  activeStep: 1,
  steps: [
    {
      title: 'Meine Spende',
      fields: {...formGridProps()}
    }, {
      title: 'Meine Daten',
      fields: {...formGridProps()}
    }, {
      title: 'Zahlungsart',
      fields: {...formGridProps()}
    }
  ],
}

export const bottomNavigationProps = {
  ...topNavigationProps,
  position: 'bottom',
}
