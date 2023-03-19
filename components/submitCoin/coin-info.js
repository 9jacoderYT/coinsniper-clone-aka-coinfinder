import { FilePicker } from "evergreen-ui";

export default function CoinInfo({ formData, setFormData }) {
 
  return (
    <>
      <div className="mt-5">
        <div className="avatar">
          <div className="w-24 rounded">
            {formData.coinImg ? (
              <img
                src={URL.createObjectURL(formData.coinImg)}
                alt="Project Image"
              />
            ) : (
              <img src="/dummy-images/avatar.jpg" alt="Project Image" />
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <FilePicker
          className="w-full max-w-xs"
          placeholder="Upload Project Image"
          onChange={(files) => setFormData({ ...formData, coinImg: files[0] })}
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Name* :
        </div>
        <input
          type="text"
          value={formData.nameInput}
          placeholder="Bitcoin"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, nameInput: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Symbol* :
        </div>
        <input
          type="text"
          value={formData.symbol}
          placeholder="BTC"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, symbol: event.target.value })
          }
        />
      </div>
    </>
  );
}
