import { useState, useContext } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" })


  const { signed, setSigned } = useContext(LoginContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    user?.email && user?.password && setSigned(true)
    setUser({ email: "", password: "" })
    navigate(-1) 
  }

  console.log(user)
  return (
    <Container className="d-flex justify-content-center align-items-center p-5">
      <Row className="w-100">
        <Col md={{ span: 8, offset: 4 }} lg={{ span: 6, offset: 4 }}>
          <Card className="shadow-lg rounded-4 p-4">
            <Card.Body>
              <h3 className="text-center mb-4 text-warning fw-bold">Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={user?.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={user?.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="warning"
                    type="submit"
                    size="lg"
                    className="fw-bold"
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
