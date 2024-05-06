import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Image, OverlineTitle } from 'admin/shared/components'
import Layout from 'admin/shared/layout/fullpage'
import { Form as FormikForm, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { AuthForm } from 'admin/utils/interfaces'
import api from 'api/api'
import { TailSpin } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import { fetchSong } from "../song/core/api"
import { useAppDispatch } from "admin/apps/hooks/app.hooks"
import { useSelector } from "react-redux"

const AuthLoginPage: React.FC = () => {
  /**
 * REDUX
 */
  const dispatch = useAppDispatch();

  /**
   * Variable
   */
  const navigate = useNavigate()
  const { state } = useLocation()
  const [loading, setLoading] = useState(false)
  const initialValues = {
    email: '',
    password: '',
    remember: false,
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('format email Invalid').required('Email est requis'),
    password: Yup.string()
      .min(8, 'Mot de passe doit avoir au moins 8 characteres')
      .required('Mot de passe requis'),
  })

  /**
   * LIFECYCLE
   */
  useEffect(() => {
    if (state?.deconexion) {
      toast.success('Vous êtes déconnecté automatiquement après une inactivité de 30 minutes.')
    } else {
      localStorage.removeItem('user')
    }
  }, [])


  /**
   * API
   */
  const handleSubmit = (values: AuthForm) => {
    setLoading(true)
    // api
    //   .post('/api/users/auth/login', values)
    //   .then(({ data }) => {
    //     if (data.data.id) {
    //       localStorage.setItem('user', JSON.stringify(data.data))
    //       navigate('/admin/person/list')
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }

  return (
    <>
      <Layout title="Login" centered>
        <div className="container p-2 p-sm-4">
          <Card className="overflow-hidden card-gutter-lg rounded-4 card-auth card-auth-mh">
            <Row className="g-0 flex-lg-row-reverse">
              <Col lg="5">
                <Card.Body className="h-100 d-flex flex-column justify-content-center">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <FormikForm>
                        <Row className="gy-3">
                          <Col className="col-12">
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="email">Email</Form.Label>
                              <Field
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                as={Form.Control}
                                id="email"
                                className={errors.email && touched.email ? 'is-invalid' : ''}
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                          </Col>
                          <Col className="col-12">
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="password">Mot de passe</Form.Label>
                              <Field
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                as={Form.Control}
                                className={errors.password && touched.password ? 'is-invalid' : ''}
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                          </Col>
                          <Col className="col-12">
                            <div className="d-flex flex-wrap justify-content-between">
                              <Field
                                as={Form.Check}
                                className="form-check-sm"
                                type="checkbox"
                                id="remember"
                                label="Se souvenir de moi "
                                name="remember"
                              />
                              <Link to="/auths/auth-reset" className="small">
                                Mot de passe oublié?
                              </Link>
                            </div>
                          </Col>
                          <Col className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                {loading ? <TailSpin height={20} color="white" /> : 'Se connecter'}
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </FormikForm>
                    )}
                  </Formik>
                  <div className="my-3 text-center">
                    <OverlineTitle className="overline-title-sep">
                      <span>OU</span>
                    </OverlineTitle>
                  </div>
                  <Row className="g-2">
                    <Col xxl="6">
                      <Button href="#auth" variant="outline-light" className="w-100">
                        <Image src="/images/icon/d.png" alt="" className="icon" />
                        <span className="fw-medium">Google</span>
                      </Button>
                    </Col>
                    <Col xxl="6">
                      <Button href="#auth" variant="outline-light" className="w-100">
                        <Image src="/images/icon/b.png" alt="" className="icon" />
                        <span className="fw-medium">Facebook</span>
                      </Button>
                    </Col>
                  </Row>
                  <div className="text-center mt-4">
                    <p className="small">
                      Vous n'avez pas de compte? <Link to="/auths/auth-register">S'inscrire</Link>
                    </p>
                  </div>
                </Card.Body>
              </Col>
              <Col lg="7">
                <Card.Body className="bg-darker is-theme has-mask has-mask-1 h-100 d-flex flex-column justify-content-end">
                  <div className="mask mask-1"></div>
                  <div className="brand-logo">
                    {/* <Logo /> */}
                    <img src="/assets/images/logo/logoMomentum.png" />
                  </div>
                  <div className="row">
                    <div className="col-sm-11">
                      <div className="mt-4">
                        <div className="h1 title mb-3">Vivons l'église différemment !</div>
                        <p style={{ textAlign: 'justify' }}>
                        Vous souhaitez ouvrir un café depuis un petit moment,
                         mais vous n’avez pas encore osé sauter le pas ?
                          Bonne nouvelle : dans cet article nous vous guidons au travers de chacune des étapes à franchir pour concrétiser votre projet de création d'entreprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Layout>
    </>
  )
}

export default AuthLoginPage
