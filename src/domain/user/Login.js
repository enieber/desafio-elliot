import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import {
  Redirect,
} from 'react-router-dom';

import { login, hasAuthentication } from '../../auth';
import {
  Button,
  InputStyled,
  LabelStyled,
} from '../../components';

const ContainerLogin = styled.div`
  color: #002140;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(#f4c453,#fbfe55); 
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    const redirect = hasAuthentication();
    this.setState({ redirect });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirect } = this.state;

    if (redirect) return <Redirect to={from} />;

    return (
      <ContainerLogin>
        <h1>Elliot</h1>
        <Formik
          initialValues={{
		    email: '',
		    password: '',
	        }}
          validate={(values) => {
		    const errors = {};
		    if (!values.password) {
		    errors.password = 'Senha não pode ser vazia';
		    }

		    if (!values.email) {
		    errors.email = 'Email não pode ser vazio';
		    } else if (
		    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		    ) {
		    errors.email = 'Endereço de email invalido';
		    }

		    return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
		    setSubmitting(false);
		    login(values.email, values.password, () => this.setState({ redirect: true }));
          }}
        >
          {({
		  values,
		  errors,
		  touched,
		  handleChange,
		  handleBlur,
		  handleSubmit,
		  isSubmitting,
		   /* and other goodies */
          }) => (
            <FormStyled
              onSubmit={handleSubmit}
            >
              <LabelStyled>
			    Email:
                <InputStyled
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </LabelStyled>
              <LabelStyled>
				Senha:
                <InputStyled
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </LabelStyled>
              <Button
                success
                type="submit"
                disabled={isSubmitting}
              >
				Entrar

                {' '}
              </Button>
            </FormStyled>
		    )}
        </Formik>
      </ContainerLogin>
    );
  }
}
