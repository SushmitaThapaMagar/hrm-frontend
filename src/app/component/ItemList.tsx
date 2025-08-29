// src/components/ItemList.tsx
import React, { useEffect, useState } from "react";
import { fetchMockData } from "../api/mockAPI";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<
    { id: number; name: string; description: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMockData();
      setItems(data);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
