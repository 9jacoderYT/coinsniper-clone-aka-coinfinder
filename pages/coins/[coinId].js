import React from "react";
import CoinDetail from "../../components/coin-detail";
import {
  fetchAllCoins,
  getCoinById,
} from "../../lib/helper-functions/coin-data";
import Loading from "./loading";

export default function CoinDetailPage(props) {
  return (
    <div className="text-white">
      <CoinDetail details={props.selectedCoin[0]} />
    </div>
  );
}

export async function getStaticProps(context) {
  const coinId = context.params.coinId;

  const coin = await getCoinById(coinId);

  return {
    props: {
      selectedCoin: coin,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const coins = await fetchAllCoins();

  const paths = coins.map((coin) => ({ params: { coinId: coin.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
