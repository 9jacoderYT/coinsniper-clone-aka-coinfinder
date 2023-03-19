import React from "react";

export default function CoinInfo(props) {
  const { network, day, month, year, contactAddress } = props.details;
  return (
    <div
      className="p-5 rounded-xl w-[60%] justify-center"
      style={{
        backgroundColor: "#222C3F",
        border: "1px solid rgb(117, 129, 153)",
      }}
    >
      <p className="text-xl mb-4">Coin Information</p>

      <div className="mb-2 flex">
        <span className="flex-1">Network:</span>
        <span className="text-right" style={{ color: "rgb(132 204 22)" }}>
          {network}
        </span>
      </div>
      <hr className="mb-2" style={{ color: "rgb(117, 129, 153)" }} />

      <div className="mb-2 flex">
        <span className="flex-1">Launch Date:</span>
        <span className="text-right" style={{ color: "rgb(132 204 22)" }}>
          {day} {month} {year}
        </span>
      </div>
      <hr className="mb-2" style={{ color: "rgb(117, 129, 153)" }} />

      <div className="mb-2 flex">
        <span className="flex-1">Contact Address:</span>
        <span className="text-right" style={{ color: "rgb(132 204 22)" }}>
          {contactAddress}
        </span>
      </div>
      <hr className="mb-2" style={{ color: "rgb(117, 129, 153)" }} />
    </div>
  );
}
