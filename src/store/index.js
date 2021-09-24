import { createStore } from "redux";
import mainReducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["list"],
  stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
};

const myPersistReducer = persistReducer(persistConfig, mainReducers);
const store = createStore(myPersistReducer);
export const persistor = persistStore(store);
export default store;
