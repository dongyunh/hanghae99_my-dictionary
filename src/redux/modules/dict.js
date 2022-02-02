// dict.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
// Actions
const LOAD = "dict/LOAD";
const CREATE = "dict/CREATE";

const initialState = {
  list: [
    { word: "1번단어", exp: "1번단어 설명", exm: "1번단어 예시" },
    { word: "2번단어", exp: "2번단어 설명", exm: "2번단어 예시" },
    { word: "3번단어", exp: "3번단어 설명", exm: "3번단어 예시" },
  ],
};

// Action Creators
//firestore에서 넘어온 데이터 전부를 파라미터로 받기
export function loadDict(dict_list) {
  return { type: LOAD, dict_list };
}
//dict이라는 변수에 데이터를 담아 파라미터를 받아서 액션 객체 생성
export function createDict(dict) {
  console.log("액션생성!!");
  return { type: CREATE, dict };
}

// Middlewares, Firebase랑 통신하는 부분
export const loadDictFB = () => {
  return async function (dispatch) {
    const dict_data = await getDocs(collection(db, "dict"));
    console.log(dict_data);
    //데이터 배열로 바꿔주기
    let dict_list = [];
    //forEach로 데이터 가져와서 넣어주기
    dict_data.forEach((doc) => {
      console.log(doc.data());
      dict_list.push({ id: doc.id, ...doc.data() });
    });
    console.log(dict_list);
    dispatch(loadDict(dict_list));
  };
};

export const createDictFB = (dict) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dict"), dict);
    const _dict = await getDoc(docRef);
    const dict_data = { id: _dict.id, ..._dict.data() };
    // console.log((await getDoc(docRef)).data());
    console.log(dict_data);
    dispatch(createDict(dict_data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dict/LOAD": {
      console.log("firestore 데이터 불러오기!");
      return { list: action.dict_list };
    }
    case "dict/CREATE": {
      console.log("새로운 dict 값 생성!");
      const new_dict_list = [...state.list, action.dict];

      return { list: new_dict_list };
    }
    default:
      return state;
  }
}
