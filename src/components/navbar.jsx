import React from "react";
const Navbar = ({ totalCounters }) => {
  console.log("Navbar-Rendered");
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info fixed-top p">
      <span className="navbar-brand bg-danger p-3">Counters</span>
      <span className="badge badge-pill badge-secondary">
        Total Counters: {totalCounters}
      </span>
    </nav>
  );
};

export default Navbar;
