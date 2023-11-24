import { useState } from "react";
import Cardd from "./Card";
import { Link } from "react-router-dom";

const FolderDrop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
    document.getElementById("search-input")?.focus();
  };

  const filteredCards = searchQuery
    ? cards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cards;

  return (
    <div>
      <div className="flex flex-1 h-screen w-screen flex-col">
        <div className="navbar bg-amber-200 shadow-md mb-3">
          <div className="navbar-start">
            <a className="btn btn-ghost text-3xl" href="/">
              Dr.Help
            </a>
          </div>
          <div className="navbar-center gap-2">
            <div className="form-control">
              <input
                id="search-input"
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="navbar-end">
            <Link to="http://127.0.0.1:8501/" className="btn btn-primary">
              Predict
            </Link>
            <Link to={"/sign-up"} className="btn mx-1 btn-outline">Logout</Link>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          {filteredCards.map((card, index) => (
            <Cardd key={index} name={card.name} desc={card.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

const cards = [
  { name: "Ramesh Singh", desc: "(23 M) - Diabetic since 22/07/2022" },
  { name: "Suman Baijal", desc: "(33 F) - High blood pressure issues" },
  { name: "Raman Kumar", desc: "(27 M) - Diagonsed with typhoid" },
  // Add more cards as needed
];

export default FolderDrop;
