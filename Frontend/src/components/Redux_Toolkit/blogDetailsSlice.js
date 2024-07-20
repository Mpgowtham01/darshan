import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blog: null,
  filteredTemple: [],
  searchText: "",
  currentClickedTag: null,
};

export const fetchBlogById = createAsyncThunk(
  "blog/getOneById",
  async params => {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_DEV_BASE_URL}/blog/getOne`,
      params,
    });

    return res.data;
  }
);

export const blogDetailsSlice = createSlice({
  name: "Blog Details Slice",
  initialState,

  reducers: {
    filterSearchData: (state, action) => {
      const re = RegExp(
        `.*${action.payload.toLowerCase().split("").join(".*")}.*`
      );
      const newData = state.filteredTemple.filter(list =>
        list.blog_title.toLowerCase().match(re)
      );

      state.filteredTemple = newData;

      if (action.payload == "") {
        state.filteredTemple = state.blog.relatedTemplesByTags;
      }
    },

    setCurrentClickedTag: (state, action) => {
      state.currentClickedTag = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchBlogById.fulfilled, (state, action) => {
      if (action.payload) {
        state.blog = action.payload;
        state.filteredTemple = action.payload?.relatedTemplesByTags || [];
      }
    });
  },
});

export const { filterSearchData, setCurrentClickedTag } =
  blogDetailsSlice.actions;

export default blogDetailsSlice.reducer;
