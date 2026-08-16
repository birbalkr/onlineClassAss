import { createSlice } from '@reduxjs/toolkit'

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        page: 1,
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        setResults: (state, action) => {
            state.results = action.payload;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearResults: (state) => {
            state.results = [];
        },
    }
})


export const { setQuery, setActiveTab, setLoading, setResults, setError,clearResults } = SearchSlice.actions;
export default SearchSlice.reducer;