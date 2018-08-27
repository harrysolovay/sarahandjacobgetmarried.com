import { Layout } from '~/components'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const ContactForm = ({
  values,
  errors,
  touched,
  isSubmitting,
}) =>
  <Form>

    <div>
      { touched.name && errors.name &&
        <span children={ errors.name } />
      }
      <Field
        type='text'
        name='name'
        placeholder='name'
        value={ values.name } 
      />
    </div>

    <div>
      { touched.email && errors.email &&
        <span children={ errors.email } />
      }
      <Field
        type='email'
        name='email'
        placeholder='email'
        value={ values.email }
      />
    </div>

    <div>
      { touched.message && errors.message &&
        <span children={ errors.message } />
      }
      <Field
        component='textarea'
        name='message'
        placeholder='message'
        value={ values.message }
      />
    </div>

    <button
      type='submit'
      children='send'
      disabled={ isSubmitting }
    />
    
  </Form>


const ContactFormWithFormik = withFormik({

  mapPropsToValues: ({
    name = '', email = '', message = ''
  }) => ({
    name, email, message,
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().max(70).required(),
    email: Yup.string().email().max(255).required(),
    message: Yup.string().max(1000).required()
  }),

  handleSubmit: (values, { resetForm, setSubmitting }) => {
    console.log(values, 'now submitting')
    setTimeout(() => {
      resetForm()
      setSubmitting(false)
    }, 2000)
  },

})(ContactForm)

export default () =>
  <Layout>
    <div>
      <h1 children='Contact' />
      <ContactFormWithFormik />
    </div>
  </Layout>