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
          {data.map((dataItem) => (
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
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
