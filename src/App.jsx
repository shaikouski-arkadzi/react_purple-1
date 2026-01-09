import { useState, useContext, useMemo } from "react";
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
import { UserContext } from "./context/user.context";

const INITIAL_DATA = [
  {
    id: 1,
    title: "Подготовка к обновлению курсов",
    text: "Горные походы открывают удивительные природные ландшафт",
    date: new Date(),
    userId: 1,
  },
  {
    id: 2,
    title: "Поход в годы",
    text: "Думал, что очень много времени",
    date: new Date(),
    userId: 1,
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const { userId } = useContext(UserContext);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
        text: item.text,
        title: item.title,
        data: new Date(item.date),
      },
    ]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const filteredItems = useMemo(
    () => items.filter((el) => el.userId === userId).sort(sortItems),
    [items, userId]
  );

  return (
    <div className="app">
      <SidePanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {filteredItems.map((dataItem) => (
            <CardButton key={dataItem.id}>
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
