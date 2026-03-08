import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif";

const PersonDetail = () => {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPerson = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`https://reqres.in/api/users/${id}`);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setPerson(data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };

    getPerson();
  }, [id]); // sadece id değişirse çalışır

  if (loading) {
    return (
      <div className="text-center">
        <img src={spinner} alt="spinner" />
      </div>
    );
  } else if (error) {
    return <NotFound />;
  } else {
    return (
      <div className="container text-center mt-4">
        <img className="rounded" src={person?.avatar} alt="img" />
        <h6>
          {person?.first_name} {person?.last_name}
        </h6>
        <p>{person?.email}</p>
        <div>
          <button className="btn btn-danger" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="btn btn-success m-1" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
