import { Icon, type IconName } from "./icons";

const ROW_A: { icon: IconName; text: string }[] = [
  { icon: "badge", text: "ISI-certified products" },
  { icon: "droplet", text: "Drip & sprinkler systems" },
  { icon: "pencil", text: "Free farm system design" },
  { icon: "leaf", text: "Save up to 60% water" },
  { icon: "users", text: "10,000+ farmers served" },
  { icon: "greenhouse", text: "Polyhouses & mulch films" },
  { icon: "bike", text: "Motorbike spares too" },
  { icon: "shield", text: "20+ years of trust" },
];

const ROW_B: { icon: IconName; text: string }[] = [
  { icon: "funnel", text: "Filters & fertigation" },
  { icon: "package", text: "HDPE & PVC pipes" },
  { icon: "sprinkler", text: "Micro sprinklers" },
  { icon: "layers", text: "Mulch films & nets" },
  { icon: "wrench", text: "Tools & spares" },
  { icon: "tag", text: "Bulk & combo offers" },
  { icon: "gauge", text: "Pressure-tested stock" },
  { icon: "sun", text: "UV-stabilised materials" },
];

function Row({ items, reverse, hidden }: { items: typeof ROW_A; reverse?: boolean; hidden?: boolean }) {
  const list = (ariaHidden: boolean) => (
    <ul aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li key={item.text} className="flex items-center gap-3">
          <Icon name={item.icon} className="h-4 w-4 text-leaf-400" />
          <span className="font-mono text-xs tracking-[0.18em] whitespace-nowrap text-paper-300 uppercase">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden={hidden || undefined} className="marquee-mask overflow-hidden">
      <div className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="space-y-3 border-y border-paper-100/8 bg-pine-900/60 py-5">
      <Row items={ROW_A} />
      <Row items={ROW_B} reverse hidden />
    </div>
  );
}
