import { useState, useContext, useMemo, useCallback } from "react";
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
    post: "Горные походы открывают удивительные природные ландшафт",
    date: new Date(),
    userId: 1,
  },
  {
    id: 2,
    title: "Поход в годы",
    post: "Думал, что очень много времени",
    date: new Date(),
    userId: 1,
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);
  const [selectedItem, setSelectedItem] = useState({});

  const { userId } = useContext(UserContext);

  const addItem = useCallback(
    (item) => {
      if (!item.id) {
        setItems((oldItems) => [
          ...oldItems,
          {
            id:
              oldItems.length > 0
                ? Math.max(...oldItems.map((i) => i.id)) + 1
                : 1,
            post: item.post,
            title: item.title,
            date: new Date(item.date),
            userId,
          },
        ]);
      } else {
        setItems((oldItems) =>
          oldItems.map((i) => {
            if (i.id === item.id) {
              return {
                ...item,
                date: new Date(item.date),
                userId,
              };
            } else return i;
          })
        );
      }
    },
    [userId]
  );

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

  const setItem = (dataItem) => {
    setSelectedItem(dataItem);
  };

  return (
    <div className="app">
      <SidePanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {filteredItems.map((dataItem) => (
            <CardButton onClick={() => setItem(dataItem)} key={dataItem.id}>
              <JournalItem
                title={dataItem.title}
                post={dataItem.post}
                date={dataItem.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </SidePanel>
      <Body>
        <JournalForm onSubmit={addItem} data={selectedItem} />
      </Body>
    </div>
  );
}

export default App;
