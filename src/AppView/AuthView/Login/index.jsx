import { Container, Card, Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cookies, setCookies] = useCookies();
  let navigate = useNavigate();

  function onSubmitUser(data) {
    console.log("data", data);
    if (data.email === "devweekend@gmail.com") {
      data = {
        ...data,
        token: "dummy_token",
      };
      setCookies("dev_weekend_user", data);
      navigate("/dashboard")
    }
  }
  return (
    <Container fluid className="main-container">
      <Card style={{ width: "30%", borderRadius: "25px" }}>
        <Card.Body className="p-5">
          <h4 className="mb-4">Login</h4>
          <Form onSubmit={handleSubmit(onSubmitUser)}>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Your Email"
                {...register("email", { required: "Email is Required" })}
              />
              <p className="text-danger">
                {errors.email ? errors.email.message : ""}
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Your Password"
                {...register("password", { required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 Char"
              } })}
              />
              <p className="text-danger">
                {errors.password ? errors.password.message : ""}
              </p>
            </Form.Group>
            <div className="d-grid mt-4">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Login;
