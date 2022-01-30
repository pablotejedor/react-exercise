import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Stack, Text } from '@chakra-ui/react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  register,
  selectIsLoading,
  selectIsLogged,
} from '../store/slices/registerSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLogged = useSelector(selectIsLogged);

  if (isLogged) {
    return <Navigate to={'/'} />;
  }

  const submitHandler = values => {
    dispatch(register(values));
  };

  const validationScheme = Yup.object({
    name: Yup.string()
      .min(2, 'El nombre debe tener al menos dos caracteres')
      .required('Requerido'),
    lastName: Yup.string()
      .min(2, 'El apellido debe tener al menos dos caracteres')
      .required('Requerido'),
    age: Yup.number('Debe ser un número')
      .positive('Debe ser un número positivo')
      .integer('Debe ser un número natural'),
    email: Yup.string().email('Email Invalido').required('Requerido'),
    role: Yup.number('Selecciona un rol').required('Requerido'),
    password: Yup.string()
      .required('Requerida')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!#])(?=.{8,})/,
        'La contraseña debe contener letras (mayúsculas y minúsculas), números y al menos uno de los siguientes caracteres especiales: ! _ # - además de contar con al menos ocho caracteres'
      ),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Requerido'),
  });

  return (
    <Formik
      onSubmit={submitHandler}
      validationSchema={validationScheme}
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        age: '',
        role: '',
        password: '',
        passwordConfirm: '',
      }}
    >
      {({ errors, isValid, touched }) => (
        <Form>
          <Stack
            spacing={3}
            w={['75vw', '50vw']}
            bg={'whiteAlpha.500'}
            p={12}
            rounded={12}
          >
            <label htmlFor="inputName" id="nameLabel">
              <Text>Nombre</Text>
            </label>
            <Field id="inputName" name="name" className="input" />
            {errors.name && touched.name ? (
              <Text variant="error" id="inputError">
                {errors.name}
              </Text>
            ) : null}
            <label htmlFor="inputLastName">
              <Text>Apellido</Text>
            </label>
            <Field id="inputLastName" name="lastName" className="input" />
            {errors.lastName && touched.lastName ? (
              <Text variant="error">{errors.lastName}</Text>
            ) : null}
            <label htmlFor="inputEmail">
              <Text>Email</Text>
            </label>
            <Field id="inputEmail" name="email" className="input" />
            {errors.email && touched.email ? (
              <Text variant="error">{errors.email}</Text>
            ) : null}
            <label htmlFor="inputAge">
              <Text>Edad</Text>
            </label>
            <Field id="inputAge" name="age" type="number" className="input" />
            {errors.age && touched.age ? (
              <Text variant="error">{errors.age}</Text>
            ) : null}
            <label htmlFor="inputRole">
              <Text>Rol</Text>
            </label>
            <Field as="select" name="role" className="input">
              <option defaultValue>Selecciona un rol</option>
              <option value={1}>Administrador</option>
              <option value={2}>Stantard</option>
            </Field>
            {errors.role && touched.role ? (
              <Text variant="error">{errors.role}</Text>
            ) : null}
            <label htmlFor="inputPassword">
              <Text>Contraseña</Text>
            </label>
            <Field
              type="password"
              id="inputPassword"
              name="password"
              className="input"
            />
            {errors.password && touched.password ? (
              <Text variant="error">{errors.password}</Text>
            ) : null}
            <label htmlFor="inputPasswordConfirm">
              <Text>Confirmar contraseña</Text>
            </label>
            <Field
              type="password"
              id="inputPasswordConfirm"
              name="passwordConfirm"
              className="input"
            />
            {errors.passwordConfirm && touched.passwordConfirm ? (
              <Text variant="error">{errors.passwordConfirm}</Text>
            ) : null}
            <Button
              id="submitButton"
              type="submit"
              colorScheme={'blue'}
              disabled={!isValid || isLoading}
            >
              Enviar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
