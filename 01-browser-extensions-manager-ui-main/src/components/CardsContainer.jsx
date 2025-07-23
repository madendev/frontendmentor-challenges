import { Card } from "./Card";

import data from "../../data.json";

export const CardsContainer = () => {
  console.log(data);

  return (
    <div className="flex flex-col gap-3">
      {data.map((extension) => (
        <Card key={extension.name} {...extension} />
      ))}
    </div>
  );
};
