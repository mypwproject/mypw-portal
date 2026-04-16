import { createFileRoute } from "@tanstack/react-router";
import logoCoda from "@/assets/logo-coda.png";
import logoHashy from "@/assets/logo-hashy.png";
import logoLinkshrink from "@/assets/logo-linkshrink.png";
import logoMybmi from "@/assets/logo-mybmi.png";
import logoQrcode from "@/assets/logo-qrcode.png";
import logoNetspeed from "@/assets/logo-netspeed.png";

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
  { name: "CODA", url: "https://Coda.mypw.pw", color: "bg-tile-1", logo: logoCoda, font: "font-fira-code", description: "All in one free code editor" },
  { name: "HASHY", url: "https://Hashy.mypw.pw", color: "bg-tile-2", logo: logoHashy, font: "font-orbitron", description: "Hash anything Securely" },
  { name: "LINKSHRINK", url: "https://Linkshrink.mypw.pw", color: "bg-tile-3", logo: logoLinkshrink, font: "font-righteous", description: "Comprehensive URL shortener" },
  { name: "MYBMI", url: "https://bmi.mypw.pw", color: "bg-tile-4", logo: logoMybmi, font: "font-fredoka", description: "Body Mass Calculator" },
  { name: "QRcode maker", url: "https://Qrcode.mypw.pw", color: "bg-tile-5", logo: logoQrcode, font: "font-press-start", description: "QRcode maker tools" },
  { name: "netspeed", url: "https://Netspeed.mypw.pw", color: "bg-tile-6", logo: logoNetspeed, font: "font-rajdhani", description: "Internet speed test and more" },
];

function Index() {
  return (
    <div className="h-screen w-screen grid grid-cols-3 grid-rows-2">
      {tiles.map((tile) => (
        <a
          key={tile.name}
          href={tile.url}
          className={`${tile.color} flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:brightness-125 hover:scale-[1.02] relative group cursor-pointer`}
        >
          <img
            src={tile.logo}
            alt={`${tile.name} logo`}
            width={64}
            height={64}
            className="w-16 h-16 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300"
          />
          <span className={`text-2xl md:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300 ${tile.font}`}>
            {tile.name}
          </span>
          <span className="text-sm md:text-base text-white/70 font-medium">
            {tile.description}
          </span>
          <span className="absolute bottom-4 text-xs md:text-sm font-mono text-white/40 group-hover:text-white/70 transition-colors">
            {tile.url.replace("https://", "")}
          </span>
        </a>
      ))}
    </div>
  );
}
