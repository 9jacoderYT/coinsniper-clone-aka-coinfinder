import React from "react";

export default function CoinAddress({ formData, setFormData }) {
  return (
    <>
      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Network / Chain* :
        </div>
        <select
          className="select bg-darktwo select-accent w-full"
          onChange={(event) =>
            setFormData({ ...formData, network: event.target.value })
          }
        >
          <option value="Solana (SOL)">Solana (SOL)</option>
          <option selected value="Binance Smart Chain (BSC)">
            Binance Smart Chain (BSC)
          </option>
          <option value="Tron (TRX)">Tron (TRX)</option>
          <option value="Fantom (FTM)">Fantom (FTM)</option>
          <option value="Kucoin Chain (KCC)">Kucoin Chain (KCC)</option>
          <option value="Dogechain (DOGE)">Dogechain (DOGE)</option>
          <option value="Polygon (MATIC)">Polygon (MATIC)</option>
        </select>
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Contact Address* :
        </div>
        <input
          value={formData.contactAddress}
          type="text"
          placeholder="Contact Address  ****"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({
              ...formData,
              contactAddress: event.target.value,
            })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Description* :
        </div>
        <textarea
          value={formData.description}
          className="textarea textarea-accent w-full h-24 bg-darkzero"
          placeholder="Description"
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        ></textarea>
      </div>

      <div className="mt-5" align="left">
        <div className="mt-3 mb-2" align="left">
          Launch Date :
        </div>
        <select
          className="select select-success w-24 bg-darkzero m-2"
          onChange={(event) =>
            setFormData({ ...formData, day: event.target.value })
          }
        >
          <option selected value={null}>
            DAY
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select
          className="select select-success w-28 bg-darkzero"
          onChange={(event) =>
            setFormData({ ...formData, month: event.target.value })
          }
        >
          <option selected>MONTH</option>
          <option>JANUARY</option>
          <option>FEBRUARY</option>
          <option>MARCH</option>
          <option>APRIL</option>
          <option>MAY</option>
          <option>JUNE</option>
          <option>JULY</option>
          <option>AUGUST</option>
          <option>SEPTEMBER</option>
          <option>OCTOBER</option>
          <option>NOVEMBER</option>
          <option>DECEMBER</option>
        </select>
        <select
          className="select select-success w-28 bg-darkzero m-2"
          onChange={(event) =>
            setFormData({ ...formData, year: event.target.value })
          }
        >
          <option selected>YEAR</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Custom chart link (optional) :
        </div>
        <input
          type="text"
          value={formData.customChart}
          placeholder=""
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, customChart: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Custom swap link (optional) :
        </div>
        <input
          type="text"
          value={formData.customSwap}
          placeholder=""
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, customSwap: event.target.value })
          }
        />
      </div>
    </>
  );
}
