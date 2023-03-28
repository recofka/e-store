import { useState } from 'react';

const defaultFormFields = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password, confirmPassword } = formFields;

  console.log('formFields', formFields);
  const handlerChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your Email</h1>
      <form onSubmit={() => {}}>
        <label htmlFor=''>Name</label>
        <input required onChange={handlerChange} type='text' name='userName' value={userName} />

        <label htmlFor=''>Email</label>
        <input required onChange={handlerChange} type='email' name='email' value={email} />

        <label htmlFor=''>Password</label>
        <input required onChange={handlerChange} type='password' name='password' value={password} />

        <label htmlFor=''>Confirm Password</label>
        <input
          required
          onChange={handlerChange}
          type='password'
          name='confirmPassword'
          value={confirmPassword}
        />

        <button type='submit'>Sign-Up</button>
      </form>
    </div>
  );
};

export default SignUp;
