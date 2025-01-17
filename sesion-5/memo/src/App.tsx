import { useState, memo } from 'react'

interface ItemListProps {
  items: string[];
}

const ItemList = ({ items }: ItemListProps) => { 
  return (
    <div>
      {items.map((item, index) => (
      <div key={index}>{item}</div> ))}
    </div> 
    )
};
const MemoizedItemList = memo(ItemList);

function App() {
    const [count, setCount] = useState<number>(0); 
    const [items, _setItems] = useState<string[]>(Array.from({ length: 1000 }, (_, i) => `Item ${i}`) );

    return ( <div>
      <h1>Profiling en React</h1>
        <button onClick={() => setCount(count + 1)}>Incrementar ({count})</button> 
        
        <MemoizedItemList items={items} />
      </div> );
     
}

export default App
