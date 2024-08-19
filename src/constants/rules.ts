const EMAIL = {
  required: 'Email is required',
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: 'Invalid email address',
  },
};

const NAME = {
  required: 'Name is required',
  pattern: {
    value: /^[A-Za-z]+$/,
    message: 'Name can only contain letters',
  },
};

const RULES = {
  EMAIL,
  NAME,
};

export default RULES;
