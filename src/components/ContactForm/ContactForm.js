import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Label, ErrorText } from './ContactForm.styled';
import { useContacts } from 'hooks/useContacts';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const { addContact } = useContacts();
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    addContact(name, number);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Field name="number" type="tel" />
          <FormError name="number" />
        </Label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
