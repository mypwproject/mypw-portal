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
  { name: "CODA", url: "https://Coda.mypw.pw", color: "bg-tile-1", description: "All in one free code editor" },
  { name: "HASHY", url: "https://Hashy.mypw.pw", color: "bg-tile-2", description: "Hash anything Securely" },
  { name: "LINKSHRINK", url: "https://Linkshrink.mypw.pw", color: "bg-tile-3", description: "Comprehensive URL shortener" },
  { name: "MYBMI", url: "https://bmi.mypw.pw", color: "bg-tile-4", description: "Body Mass Calculator" },
  { name: "QRcode maker", url: "https://Qrcode.mypw.pw", color: "bg-tile-5", description: "QRcode maker tools" },
  { name: "netspeed", url: "https://Netspeed.mypw.pw", color: "bg-tile-6", description: "Internet speed test and more" },
];

function Index() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
      {tiles.map((tile) => (
        <a
          key={tile.name}
          href={tile.url}
          className={`${tile.color} flex flex-col items-center justify-center gap-2 py-12 sm:py-0 transition-all duration-300 hover:brightness-125 hover:scale-[1.02] relative group cursor-pointer font-orbitron`}
        >
          <span className="text-2xl md:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300">
            {tile.name}
          </span>
          <span className="text-sm md:text-base text-white/70 font-medium">
            {tile.description}
          </span>
          <span className="absolute bottom-4 text-xs md:text-sm text-white/40 group-hover:text-white/70 transition-colors">
            {tile.url.replace("https://", "")}
          </span>
        </a>
      ))}
    </div>
  );
}
