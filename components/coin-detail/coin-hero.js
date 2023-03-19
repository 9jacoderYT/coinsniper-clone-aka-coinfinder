import Link from "next/link";
import Image from "next/image";
import { GlobeNetworkIcon } from "evergreen-ui";

export default function CoinHero(props) {
  const { url, nameInput, telegramURL, twitterURL, websiteURL, symbol, vote } =
    props.details;
  console.log(vote);
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img src={url} className="lg:max-w-sm md:max-w-sm rounded-lg" />

        <div>
          <small className="underline"> Project Name </small>
          <h1 className="text-3xl font-bold">{nameInput}</h1>

          <small className="underline"> Symbol </small>
          <h1 className="text-3xl font-bold">{symbol}</h1>

          {vote > 2 ? (
            <span className="badge badge-secondary badge-sm">{vote} VOTES</span>
          ) : null}
        </div>

        <div className="flex flex-row">
          <a href={`https://${websiteURL}`} target="_blank" passHref={true}>
            <GlobeNetworkIcon color="info" className="mr-3" />
          </a>
          <a href={`https://${twitterURL}`} target="_blank" passHref={true}>
            <img src="/dummy-images/twitter.png" width="20" className="mr-3" />
          </a>
          <a href={`https://${telegramURL}`} target="_blank" passHref={true}>
            <img
              src="/dummy-images/telegram.webp"
              width="20"
              className="mr-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
