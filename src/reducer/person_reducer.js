export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          return mentor.name === prev ? { ...mentor, name: current } : mentor;
        }),
      };
    }
    case "added": {
      const { addName, addTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: addName, title: addTitle }],
      };
    }

    case "deleted": {
      const { deleteMentor } = action;
      return {
        ...person,
        mentors: person.mentors.filter(
          (mentor) => !(mentor.name === deleteMentor)
        ),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입니다: ${action.type}`);
    }
  }
}
