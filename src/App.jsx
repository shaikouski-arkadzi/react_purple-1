import {
  CardButton,
  JournalItem,
  Header,
  JournalAddButton,
  JournalList,
} from "./components";
import { Body, SidePanel } from "./layouts";
import "./App.css";

function App() {
  const data = [
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

  return (
    <div className="app">
      <SidePanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </SidePanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
