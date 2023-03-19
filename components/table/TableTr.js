import React from "react";
import Link from "next/link";

export default function TableTr(props) {
  const { url, nameInput, symbol, network, day, month, year, id, vote } = props.coin;
  return (
    <tr style={{ backgroundColor: "red" }}>
      <th>
        <label>
          <div className="mask mask-circle w-12">
            <img src={url} alt={nameInput} />
          </div>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold cursor-pointer hover:underline">
              <Link href={`/coins/${id}`}>{nameInput}</Link>
            </div>
            <div className="text-sm opacity-50">{symbol}</div>
          </div>
        </div>
      </td>
      <td>
        {network}
        <br />
        <span className="badge badge-secondary badge-sm">{vote} VOTES</span>
      </td>
      <td>
        {day} {month} {year}
      </td>
      <th>
        <button className="btn btn-success">VOTE</button>
      </th>
    </tr>
  );
}
