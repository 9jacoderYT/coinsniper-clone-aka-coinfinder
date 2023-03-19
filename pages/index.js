import Table from "../components/table/table";
import Coins from "../components/UI/coins";
import { fetchAllCoins } from "../lib/helper-functions/coin-data";

export default function HomePage(props) {
  console.log(props.coins);
  return (
    <div className="pt-5 px-2">
      <Coins coins={props.coins} />

      <div className="middle">
        <Table coins={props.coins} />
       
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const coinsData = await fetchAllCoins();

  if (!coinsData) {
    return;
  }

  return { props: { coins: coinsData } };
}
