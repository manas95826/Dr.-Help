import { useState } from "react";
import Cardd from "./Card";

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
          <div className="flex-1">
            <a className="btn btn-ghost text-3xl" href="/">
              Dr.Help
            </a>
          </div>
          <div className="flex-none gap-2">
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
          <button className="btn mx-3 btn-outline">Logout</button>
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
  { name: "Hello", desc: "heeeeheheheheh" },
  { name: "World", desc: "another description" },
  { name: "Lodu", desc: "annaajnshsjahs" },
  // Add more cards as needed
];

export default FolderDrop;
