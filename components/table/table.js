import React from "react";
import TableTr from "./TableTr";

export default function Table(props) {
  return (
    <div className="overflow-x-auto w-full mt-5 pb-5">
      <table className="w-full table" data-theme="dark">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Network</th>
            <th>Launch Date</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {props.coins.slice(0, 10).map((coin) => (
            <TableTr coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
