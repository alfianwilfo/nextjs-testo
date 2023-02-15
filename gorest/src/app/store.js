import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "@/features/apiData";
export default configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApi.middleware);
  },
});
