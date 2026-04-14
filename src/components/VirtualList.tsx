import { FixedSizeList as List } from "react-window";
import TrademarkCard from "./TrademarkCard";

export default function VirtualList({ items, search }: any) {
  const Row = ({ index, style }: any) => (
    <div style={style}>
      <TrademarkCard item={items[index]} search={search} />
    </div>
  );

  return (
    <List height={600} itemCount={items.length} itemSize={100} width="100%">
      {Row}
    </List>
  );
}