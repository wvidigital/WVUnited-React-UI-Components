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
    disabled: true,
    placeholder: 'John Smith',
    defaultValue: 'John Smith Default',
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
  value: 'girl',
  label: 'Radio field',
  settings: {
    disabled: true,
  },
  handleChange: (event) => handleEventFieldChange(event),
}

export const radioFieldErrorProps = {
  ...radioFieldProps,
  formGridErrorMessage: 'Field is required',
}

export const dollarHandlesFieldProps = {
  name: 'field_dollar_handles',
  type: 'radio',
  data: {
    once: {
      defaultValue: 25,
      options: [
        {
          image: null,
          label: "25 €",
          text: "test 25",
          value: 25,
        },
        {
          image: null,
          label: "70 €",
          text: "test 70",
          value: 70,
        },
        {
          image: null,
          label: "100 €",
          text: "test 100",
          value: 100,
        },
      ]
    },
    month: {
      defaultValue: 250,
      options: [
        {
          image: null,
          label: "250 €",
          text: "test 250",
          value: 250,
        },
        {
          image: null,
          label: "700 €",
          text: "test 700",
          value: 700,
        },
        {
          image: null,
          label: "1000 €",
          text: "test 1000",
          value: 1000,
        },
      ]
    },
  },
  // value: 'girl',
  label: 'Radio field',
  settings: {
    disabled: true,
    defaultValue: 700,
    occurrence: 'month',
  },
  value: 1000,
  handleChange: (event) => handleEventFieldChange(event),
}



export const checkboxFieldProps = {
  name: 'field_checkbox',
  type: 'checkbox',
  label: 'Checkbox field',
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
  name: 'dollar_amount',
  type: 'number',
  label: 'Mein betrag',
  settings: {
    required: true,
    defaultValue: 40,
  },
  handleChange: (event) => handleEventFieldChange(event),
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
    }, {
      title: 'Meine Daten',
    }, {
      title: 'Zahlungsart',
    }
  ],
}

export const bottomNavigationProps = {
  ...topNavigationProps,
  position: 'bottom',
  actionPrev: () => console.log('action prev'),
  actionNext: () => console.log('action next')
}

export const formHeaderProps = {
  ...topNavigationProps,
  title: 'Form Header Title'
}
