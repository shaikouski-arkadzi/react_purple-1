import { useState } from "react";
import {
  CardButton,
  JournalItem,
  Header,
  JournalAddButton,
  JournalList,
  JournalForm,
} from "./components";
import { Body, SidePanel } from "./layouts";
import "./App.css";

const INITIAL_DATA = [
  {
    title: "Подготовка к обновлению курсов",
    text: "Горные походы открывают удивительные природные ландшафт",
    date: new Date(),
  },
  {
    title: "Поход в годы",
    text: "Думал, что очень много времени",
    date: new Date(),
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        data: new Date(item.date),
      },
    ]);
  };

  return (
    <div className="app">
      <SidePanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.map((dataItem) => (
            <CardButton>
              <JournalItem
                title={dataItem.title}
                text={dataItem.text}
                date={dataItem.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </SidePanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
