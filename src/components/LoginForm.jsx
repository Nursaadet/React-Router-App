import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center p-5">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 4 }} lg={{ span: 5, offset: 4 }}>
          <Card className="shadow-lg rounded-4 p-4">
            <Card.Body>
              <h3 className="text-center mb-4 text-warning fw-bold">Login</h3>
              <Form onSubmit={() => navigate("/home")}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-semibold">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
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
  );
}

export default LoginForm;
