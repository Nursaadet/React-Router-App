import { Outlet, useNavigate } from "react-router-dom";

const Paths = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4 ">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
  <button
    className="btn btn-success w-40 p-3 fw-bold shadow-lg rounded-pill"
    onClick={() => navigate("/paths")}
  >
     Full Stack
  </button>

  <button
    className="btn btn-warning w-40 p-3 fw-bold shadow-lg rounded-pill"
    onClick={() => navigate("aws")}
  >
     AWS - DevOps
  </button>
</div>
      <Outlet />
    </div>
  );
};

export default Paths;
