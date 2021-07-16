import * as Yup from 'yup';

export const signInValidate = Yup.object({
  password: Yup.string()
    .required('password é obrigatório.')
    .min(3, 'password inválido.'),
  email: Yup.string()
    .email('e-mail inválido.')
    .required('e-mail é obrigatório.')
});

export const signForgoutPasswordValidate = Yup.object({
  email: Yup.string()
    .email('e-mail inválido.')
    .required('e-mail é obrigatório.')
});
