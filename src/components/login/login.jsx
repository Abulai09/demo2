import { Field, reduxForm } from "redux-form"
import {  email, phoneNumber, required } from "../../utils/validations"
import Input from "../formControl/formControl"

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="login" name="login" validate={[required]} component={Input} />
      <Field placeholder="password" type="password" name="password" validate={[required]} component={Input} />
      <Field placeholder="phoneNumber" name="phone" component={Input} validate={[phoneNumber]}/>
      <Field placeholder="email" name="email" component={Input} validate={[email]}/>
      <button>send</button>
    </form>
  );
};

let LoginFormRedux = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    return(
        <div>
            <h2>login</h2>
            <LoginFormRedux/>
        </div>
    )
}

export default Login