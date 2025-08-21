const FS = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center p-4 bg-light rounded-4 shadow-lg">
          <h1 className="display-5 fw-bold text-success mb-3">
            Full Stack Path
          </h1>

          <p className="fs-5 text-secondary mb-4">
            Become a software and application developer, well-equipped with both
            front-end and back-end.
          </p>

          <img
            src="https://clarusway.com/wp-content/uploads/elementor/thumbs/v1-Fullstack-developer-pqnf31gbxlt9gholzgwtsxya1abhwiwulezoqna3wo.jpg"
            alt="Full Stack"
            className="img-fluid rounded-3 shadow-sm mb-4"
          />

          <div className="d-grid d-md-inline-block">
            <button className="btn btn-outline-success btn-lg px-4 py-2 fw-semibold shadow rounded-pill w-100 w-md-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FS;
