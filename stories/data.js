
// Define some dummy JSON objects which will be later requested from the API.

export const copyButton = {
  description: 'Soufflé caramels muffin cake dragée muffin. Cookie fruitcake cake macaroon. Pastry tiramisu lemon drops cotton candy brownie brownie. Chupa chups brownie macaroon soufflé toffee cake chocolate cake.',
  button: {
    text: 'Click here',
    link: '#',
  }
};

export const titleCopyButton = {
  title: 'Choose a child for me',
  description: 'Pastry dessert dessert bear claw sugar plum gummi bears pudding. Pie brownie donut. Marzipan jujubes gingerbread donut cupcake chocolate bar gummi bears. Cupcake ice cream tootsie roll sweet.',
  button: {
    text: 'Click here',
    link: '#',
  }
};

export const imageCopyButton = {
  image: {
    source: 'http://placekitten.com/400/400',
    link: 'http://placekitten.com/400/400',
    alt: 'Maggie Smith',
    title: 'Maggie Smith'
  },
  title: 'Choose a child for me',
  description: 'Bear claw halvah fruitcake icing. Apple pie croissant candy bonbon sweet roll.',
  button: {
    text: 'Click here',
    link: '#',
  }
};

export const childInfoCopy = {
  image: {
    source: 'http://placekitten.com/400/400',
    link: 'http://placekitten.com/400/400',
    alt: 'Maggie Smith',
    title: 'Maggie Smith'
  },
  title: 'Maggie Smith - 12.06.1990',
  icons: [
    {
      type: 'birthday',
      label: '12.06.1990'
    },
    {
      type: 'countries',
      label: 'Bolivien'
    },
    {
      type: 'gender',
      label: 'Girl'
    }
  ],
  button: {
    text: 'Sponsor Maggie',
    link: '#',
  }
};

export const childFinderCopy = {
  description: 'Chocolate donut candy cupcake donut brownie gummi bears liquorice carrot cake. Pudding croissant liquorice gummi bears cake icing. Fruitcake candy fruitcake bear claw danish tootsie roll sweet topping.',
  form_fields: {
    fields: [
        {
          name: 'field_select_child_gender',
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
          required: false,
          fieldState: {
            errorMessages: [],
            name: 'field_select_child_gender',
            required: true,
            value: '',
            visible: false
          },
          handleChange: (name, value) => handleFieldChange(name, value),
          handleVisibility: (name, value) => handleFieldVisibility(name, value),
        },
        {
          name: 'field_select_child_country',
          data: [
            {
              label: '-- Please select --',
              value: '_null'
            },
            {
              label: 'Afghanistan',
              value: 'AF'
            },
            {
              label: 'Amerikanisch-Samoa',
              value: 'AS'
            },
            {
              label: 'Bulgarien',
              value: 'BG'
            },
            {
              label: 'Deutschland',
              value: 'DE'
            },
          ],
          label: 'Select country',
          required: false,
          fieldState: {
            errorMessages: [],
            name: 'field_select_child_country',
            required: true,
            value: '',
            visible: false
          },
          handleChange: (name, value) => handleFieldChange(name, value),
          handleVisibility: (name, value) => handleFieldVisibility(name, value),
        }
      ],
  },
  button: {
    text: 'Click here',
    action: () => handleSearch(),
  }
};

export const selectFieldProps = {
  name: 'field_select_child_gender',
  field: {
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
    required: false,
  },
  fieldState: {
    errorMessages: [],
    name: 'field_select_child_gender',
    required: true,
    value: '',
    visible: false
  },
  handleChange: (name, value) => handleFieldChange(name, value),
  handleVisibility: (name, value) => handleFieldVisibility(name, value),
}

export const selectFieldErrorProps = {
  name: 'field_select_child_gender',
  field: {
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
    required: false,
  },
  fieldState: {
    errorMessages: ['This field is required.'],
    name: 'field_select_child_gender',
    required: true,
    value: '',
    visible: false
  },
  handleChange: (name, value) => handleFieldChange(name, value),
  handleVisibility: (name, value) => handleFieldVisibility(name, value),
}


// Mixed data.
export const itemsFeed = [
  copyButton,
  titleCopyButton,
  imageCopyButton,
  childInfoCopy,
];

export const itemsSlickFeed = [
  copyButton,
  imageCopyButton,
  titleCopyButton,
  childInfoCopy,
  titleCopyButton,
  childInfoCopy,
];

export const itemsChildfinder = [
  childInfoCopy,
  childFinderCopy,
  imageCopyButton,
];

export const itemsChildfinderResults = [
  childInfoCopy,
  childFinderCopy,
  imageCopyButton,
  childInfoCopy,
  childInfoCopy,
  childInfoCopy,
];


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

