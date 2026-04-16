import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mypw.pw — Your Digital Hub" },
      { name: "description", content: "Access all your tools in one place — CODA, HASHY, LINKSHRINK, MYBMI, QRcode Maker, and Netspeed." },
      { property: "og:title", content: "mypw.pw — Your Digital Hub" },
      { property: "og:description", content: "Access all your tools in one place." },
    ],
  }),
  component: Index,
});

const tiles = [
  { name: "CODA", url: "https://Coda.mypw.pw", color: "bg-tile-1" },
  { name: "HASHY", url: "https://Hashy.mypw.pw", color: "bg-tile-2" },
  { name: "LINKSHRINK", url: "https://Linkshrink.mypw.pw", color: "bg-tile-3" },
  { name: "MYBMI", url: "https://bmi.mypw.pw", color: "bg-tile-4" },
  { name: "QRcode maker", url: "https://Qrcode.mypw.pw", color: "bg-tile-5" },
  { name: "netspeed", url: "https://Netspeed.mypw.pw", color: "bg-tile-6" },
];

function Index() {
  return (
    <div className="h-screen w-screen grid grid-cols-3 grid-rows-2">
      {tiles.map((tile) => (
        <a
          key={tile.name}
          href={tile.url}
          className={`${tile.color} flex items-center justify-center transition-all duration-300 hover:brightness-125 hover:scale-[1.02] relative group cursor-pointer`}
        >
          <span className="text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300">
            {tile.name}
          </span>
          <span className="absolute bottom-4 text-xs md:text-sm font-mono text-white/50 group-hover:text-white/80 transition-colors">
            {tile.url.replace("https://", "")}
          </span>
        </a>
      ))}
    </div>
  );
}
