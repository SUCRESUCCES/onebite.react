import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search == "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterdTodos = getFilteredData();

  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedData 호출");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length; // todos 갯수 저장
  //   const notDoneCount = totalCount - doneCount; // 완료되지 않은 todos 갯수 저장

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  // useMemo를 이용해 getAnalyzedData 한번만 호출하기
  // 위의 주석처리는 여러번 호출이 됨
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length; // todos 갯수 저장
    const notDoneCount = totalCount - doneCount; // 완료되지 않은 todos 갯수 저장

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 의존성 배열 : deps

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>noDone: {notDoneCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filterdTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
