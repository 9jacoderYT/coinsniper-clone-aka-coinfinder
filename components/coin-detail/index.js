import { voteCoin } from "../../lib/helper-functions/vote-coin";
import BreadCrumbs from "./bread-crumbs";
import CoinHero from "./coin-hero";
import CoinInfo from "./coin-info";

export default function CoinDetail(props) {
  const { nameInput, description, id, vote } = props.details;

  const voteHandler = async () => {
    const result = await voteCoin(vote, id);
    console.log(result);
  };

  return (
    <div className="middle p-5">
      <BreadCrumbs title={nameInput} />

      <div className="md:flex lg:flex mb-5">
        <CoinHero details={props.details} />

        <CoinInfo details={props.details} />
      </div>

      <div
        className="hero rounded-xl"
        style={{
          backgroundColor: "#222C3F",
          border: "1px solid rgb(117, 129, 153)",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6">{description}</p>
            <button className="btn btn-success" onClick={voteHandler}>
              VOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
