// dict.js

// Actions
const CREATE = "dict/CREATE";

const initialState = {
  list: [
    { word: "1번단어", exp: "1번단어 설명", exm: "1번단어 예시" },
    { word: "2번단어", exp: "2번단어 설명", exm: "2번단어 예시" },
    { word: "3번단어", exp: "3번단어 설명", exm: "3번단어 예시" },
  ],
};

// Action Creators
//dict이라는 변수에 데이터를 담아 파라미터를 받아서 액션 객체 생성

export function createDict(dict) {
  console.log("액션생성!!");
  return { type: CREATE, dict };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dict/CREATE": {
      console.log("새로운 dict 값 생성!");
      const new_dict_list = [...state.list, action.dict];

      return { list: new_dict_list };
    }
    default:
      return state;
  }
}
