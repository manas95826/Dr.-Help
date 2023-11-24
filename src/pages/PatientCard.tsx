const PatientCard = (props: any) => {
  return (
    <div className="p-3 border border-black bg-slate-200 rounded-xl m-2">
      <p className="ml-5 mt-2">{props.third}</p>
      <p className="ml-5 mt-2"> {props.fourth}</p>
      <p className="ml-5 mt-2"> {props.first}</p>
      <p className="ml-5 mt-2"> {props.second}</p>
    </div>
  );
};

export default PatientCard;
