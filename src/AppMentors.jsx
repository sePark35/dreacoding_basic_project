import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);

  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) =>
        mentor.name === prev ? { ...mentor, name: current } : mentor
      ),
    }));
  };

  const handleAdd = () => {
    const addName = prompt("추가하고 싶은 멘토의 이름을 입력하세요");
    const addTitle = prompt("추가하고 싶은 멘토의 타이틀을 입력하세요");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name: addName, title: addTitle }],
    }));
  };

  const hadleDelete = () => {
    const deleteMentor = prompt("삭제하고 싶은 멘토의 이름을 입력하세요");
    setPerson((person) => ({
      ...person,
      mentors: [
        ...person.mentors.filter((mentor) => !(mentor.name === deleteMentor)),
      ],
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={hadleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
