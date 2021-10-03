import React from "react";

const AllTeams = () => {
  return (
    <div className="team-container p-5">
      <h2 className="text-center">Our Team</h2>
      <div className="search-box p-2 mx-auto">
        <input type="text" placeholder="team name" />
        <button className="btn btn-danger p-2">Search</button>
      </div>
    </div>
  );
};

export default AllTeams;
