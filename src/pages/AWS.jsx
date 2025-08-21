import { Outlet } from "react-router-dom"

const AWS = () => {
  return (
    <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8 text-center p-4 bg-light rounded-4 shadow-lg">

      <h1 className="display-5 fw-bold text-warning mb-3">
        AWS/DevOps Path
      </h1>

      <p className="fs-5 text-secondary mb-4">
        We prepare you for AWS DevOps certifications. Our graduates land the
        best IT jobs!
      </p>

      
      <img
        src="https://clarusway.com/wp-content/uploads/elementor/thumbs/Aws-Solution-Architech-1-pmxc3z6r0ibsy5uixyzfrgrdilrq8nu5yid937d8w8.jpg"
        alt="AWS DevOps"
        className="img-fluid rounded-3 shadow-sm mb-4"
      />
      <div className="d-grid d-md-inline-block">
        <button className="btn btn-outline-warning btn-lg px-4 py-2 fw-semibold shadow rounded-pill w-100 w-md-auto">
          Learn More
        </button>
      </div>
       <Outlet />

    </div>
  </div>
</div>
  )
}

export default AWS
