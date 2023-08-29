import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: uuid(),
      title: "리액트 공부하기",
      content: "리액트를 공부해봅시다",
      isDone: false,
    },
    {
      id: uuid(),
      title: "자바스크립트 공부하기",
      content: "자바스크립트 공부해봅시다",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트2 공부하기",
      content: "리액트2를 공부해봅시다",
      isDone: true,
    },
    {
      id: uuid(),
      title: "자바스크립트2 공부하기",
      content: "자바스크립트2를 공부해봅시다",
      isDone: true,
    },
  ]); //회원가입을 했을때 정보를 저장하는 것

  console.log(todoList);

  const [title, setTitle] = useState(""); // 제목 리액트 저장소, ("")는 초기값
  const [content, setContent] = useState(""); // 내용 const [count, setCount] = useState(0);  // 변하는 값, 변하기 위한 함수

  const getTitle = (event) => {
    setTitle(event.target.value);
  };
  const getContent = (event) => {
    setContent(event.target.value);
  };
  const addTodo = () => {
    const todo = { id: uuid(), title: title, content: content, isDone: false };
    setTodoList((prev) => [...prev, todo]); //기존에 있던 애들을 불러와서 todo와 통합하는 함수
  };
  const deleteTodo = (id) => {
    const filteredTodo = todoList.filter((value) => value.id !== id);
    setTodoList(filteredTodo);
  };

  const updateTodo = (id) => {
    const updatedTodo = todoList.map((value) => {
      if (value.id === id) {
        value = { ...value, isDone: !value.isDone };
      }
      return value;
    });
    setTodoList(updatedTodo);
  };

  return (
    <div>
      <div className="todoFormTitle">
        제목
        <input onChange={getTitle} /> {/*       */}
        내용
        <input onChange={getContent} />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <div>
        <div>working...🔥</div>
        {todoList
          .filter((value) => !value.isDone)
          .map((value) => (
            <Todo
              key={value.id}
              todo={value}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}

        <div>Done..! 🎉</div>
        {todoList
          .filter((value) => value.isDone)
          .map((value) => (
            <Todo
              key={value.id}
              todo={value}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
      </div>
    </div>
  );
}

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <div className="todoContainer">
      <div>
        <h1>{todo.title}</h1>
      </div>
      <div>
        <p>{todo.content}</p>
      </div>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        삭제하기
      </button>
      <button className="complete" onClick={() => updateTodo(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default App;
