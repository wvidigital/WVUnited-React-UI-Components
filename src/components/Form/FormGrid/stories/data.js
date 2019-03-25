// Define some dummy JSON objects which will be later requested from the API.

export const selectFieldProps = {
    field: {
      name: 'field_select_child_gender',
      type: 'select',
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
      label: 'Select gender',
      name: 'field_select_child_gender',
      required: true,
      handleChange: (name, value) => handleFieldChange(name, value),
      handleVisibility: (name, value) => handleFieldVisibility(name, value),
    },
    fieldState: {
      errorMessages: '',
      name: 'field_select_child_gender',
      required: true,
      value: '',
      visible: false
    }
  }
  
  export const selectFieldErrorProps = {
    field: {
      name: 'field_select_child_gender',
      type: 'select',
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
      label: 'Select gender',
      required: true,
      handleChange: (name, value) => handleFieldChange(name, value),
      handleVisibility: (name, value) => handleFieldVisibility(name, value),
    },
    fieldState: {
      errorMessages: 'This field is required.',
      name: 'field_select_child_gender',
      required: true,
      value: '',
      visible: false
    }
  }

// Dummy functions that need to be passed to the child component.
function handleFieldChange(name, value) {
  console.log('handle field change', name, value);
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
    for (let i = 0; i < num; i++) {
      items.push(selectFieldProps)
      copyItems[i] = Object.assign({}, items[i])
      copyItems[i].field = Object.assign({}, {
        ...items[i].field,
        name: items[i].field.name + '_' + i,
        required: Math.round(Math.random()) > 0 ? true : false,
        }
      )
    }
    return copyItems;
  }