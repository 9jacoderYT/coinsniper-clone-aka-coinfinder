import Image from "next/image";
import Link from "next/link";
export default function Coins(props) {
  return (
    <div
      className="flex  overflow-x-scroll p-5"
      style={{
        borderTop: "1px solid rgb(52, 211, 153)",
        borderBottom: "1px solid rgb(52, 211, 153)",
      }}
    >
      {props.coins.map((coin) => (
        <Link href={`/coins/${coin.id}`}>
          <div className="avatar" key={coin.id}>
            <div className="w-24 mask mask-hexagon">
              <Image
                src={coin.url}
                width={100}
                height={100}
                alt={coin.nameInput}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
