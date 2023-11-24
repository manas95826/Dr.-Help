import { useNavigate } from "react-router-dom";

const Cardd = (props: any) => {
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5 hover:shadow-xl hover:shadow-amber-200">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              navigate("/patient", {
                state: {
                  name: props.name,
                  desc: props.desc,
                }
              });
            }}
            className="btn btn-primary"
          >
            Know More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
