import React from "react";

export default function CoinCreator({ formData, setFormData, userEmail }) {
  return (
    <>
      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Contact Telegram* :
        </div>
        <input
          type="text"
          value={formData.contactTelegramURL}
          placeholder="@YourTelegramUsername"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({
              ...formData,
              contactTelegramURL: event.target.value,
            })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Creator Email* :
        </div>
        <input
          type="text"
          placeholder={userEmail}
          disabled
          className={`input input-bordered input-accent bg-darkzero w-full`}
        />
      </div>
    </>
  );
}
