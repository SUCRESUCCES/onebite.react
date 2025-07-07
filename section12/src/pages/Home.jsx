import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2025년 7월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={"> "} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
