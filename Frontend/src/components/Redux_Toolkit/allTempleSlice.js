import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const NUMBER_BLOGS_SHOW = 10;

const filterQueriesOptions = {
  country_id: null,
  state_id: null,
  district_id: null,
  city_id: null,
  area_id: null,
  speciality_id: null,
  main_god_id: null,
  pariharam_id: null,
  festival_id: null,
  group_id: null,
  isMarriage: null,
  isAnnadhanam: null,
  isTraining: null,
  isHospital: null,
};

const initialState = {
  originalData: [],
  filteredData: [],
  filterQueries: filterQueriesOptions,
  countryList: [],
  mainGodList: [],
  specialities: [],
  festivalList: [],
  pariharamList: [],
  groupList: [],
  hasMore: false,
  isSearchModal: false,
  loadingTemples: false,
  start: 0,
  end: NUMBER_BLOGS_SHOW,
  searchOptions: null,
};

export const fetchCountryList = createAsyncThunk(
  "temple/getCountryList",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`
    );
    return res.data;
  }
);

export const fetchMainGodList = createAsyncThunk(
  "temple/getMainGodList",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/main_god/getAll`
    );
    return res.data;
  }
);

export const fetchSpecialitiesList = createAsyncThunk(
  "temple/getSpecialities",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/speciality/getAll`
    );
    return res.data;
  }
);

export const fetchGroupList = createAsyncThunk(
  "temple/getGroupS",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/grouptable/getAll`
    );
    return res.data;
  }
);

export const fetchFestivalList = createAsyncThunk(
  "temple/getFestivals",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/festival/getAll`
    );
    return res.data;
  }
);

export const fetchPariharam = createAsyncThunk(
  "temple/getPariharams",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/Pariharams/getAll`
    );
    return res.data;
  }
);


export const fetchTemplesList = createAsyncThunk(
  "temple/getTempleList",
  async params => {
    console.log(params)
    const res = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/home/getAllTemples`,
      { params }
    );
    return {
      data: res.data,
      type: params.type,
    };
  }
);

export const allTempleSlice = createSlice({
  name: "All Temples",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.filteredData = action.payload;
      state.originalData = action.payload;
    },

    removeFilterData: state => {
      state.filteredData = [];
    },

    filterByKey: (state, action) => {
      // state.start = 0;
      state.filterQueries[action.payload.key] = action.payload.value;
    },

    setSearchModalOptions: (state, action) => {
      state.filterQueries.country_id = action.payload.country_id;
      state.filterQueries.state_id = action.payload?.state_id;
      state.filterQueries.district_id = action.payload?.district_id;
      state.filterQueries.city_id = action.payload?.city_id;
      state.filterQueries.area_id = action.payload?.area_id;
      state.filterQueries.main_god_id = action.payload?.main_god_id;
      state.isSearchModal = true;
    },

    resetFilterQueries: state => {
      state.filterQueries = filterQueriesOptions;
    },

    setSearchOptions: (state, action) => {
      state.searchOptions = action.payload;
    },

    handleIsItSearchModal: (state, action) => {
      state.isItSearchModal = action.payload;
    },

    filterTempleByText: (state, action) => {
      const re = RegExp(
        `.*${action.payload.toLowerCase().split("").join(".*")}.*`
      );
      const newData = state.filteredData.filter(list =>
        list.MainGodName.toLowerCase().match(re)
      );
      console.log(newData);

      state.filteredData = newData;

      if (action.payload == "") {
        state.filteredData = state.originalData;
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchTemplesList.pending, state => {
      state.loadingTemples = true;
    });

    builder.addCase(fetchTemplesList.fulfilled, (state, action) => {
      state.loadingTemples = false;

      console.log("Action", action.payload.data);

      if (action.payload?.data?.message === "PUSH DATA") {
        state.hasMore = true;
      } else {
        state.hasMore = false;
      }

      if (action.payload?.type === "PUSH DATA") {
        state.originalData.push(...action.payload?.data?.result);
        state.filteredData.push(...action.payload?.data?.result);
        state.start += NUMBER_BLOGS_SHOW;
      } else if (action.payload?.type === "ADD DATA") {
        state.originalData = action.payload.data.result;
        state.filteredData = action.payload.data.result;
      } else {
        state.filteredData = action.payload?.data?.result;
      }
    });

    builder.addCase(fetchTemplesList.rejected, state => {
      state.loadingTemples = false;
      state.hasMore = false;
    });

    builder.addCase(fetchCountryList.fulfilled, (state, action) => {
      if (action.payload) {
        state.countryList = action.payload;
      }
    });

    builder.addCase(fetchMainGodList.fulfilled, (state, action) => {
      if (action.payload) {
        state.mainGodList = action.payload;
      }
    });

    builder.addCase(fetchSpecialitiesList.fulfilled, (state, action) => {
      if (action.payload) {
        state.specialities = action.payload;
      }
    });

    builder.addCase(fetchGroupList.fulfilled, (state, action) => {
      if (action.payload) {
        state.groupList = action.payload;
      }
    });

    builder.addCase(fetchFestivalList.fulfilled, (state, action) => {
      if (action.payload) {
        state.festivalList = action.payload;
      }
    });

    builder.addCase(fetchPariharam.fulfilled, (state, action) => {
      if (action.payload) {
        state.pariharamList = action.payload;
      }
    });
  },
});

export const {
  addData,
  filterTempleByText,
  removeFilterData,
  filterByKey,
  handleIsItSearchModal,
  resetFilterQueries,
  setSearchModalOptions
} = allTempleSlice.actions;

export default allTempleSlice.reducer;
