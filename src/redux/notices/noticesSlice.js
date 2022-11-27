import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './noticesOperations';

const initialState = {
  notices: [],
  myFavorite: [],
  ownAdds: [],
  noticeAdded: '',
  noticeRemoved: '',
  noticeRemovedError: '',
  noticeAddError: '',
  error: null,
  noticeInformationMore: null,
  loading: false,
  onOpenLoading: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesOperations.addNotice.pending](state, _) {
      state.error = null;
      state.noticeAdded = false;
      state.noticeAddError = null;
      state.noticeRemoved = false;
      state.noticeRemovedError = false;
      state.loading = true;
    },
    [noticesOperations.addNotice.fulfilled](state, action) {
      state.notices = [action.payload, ...state.notices];
      state.ownAdds = [action.payload, ...state.ownAdds];
      state.noticeAdded = true;
      state.error = null;
      state.loading = false;
    },
    [noticesOperations.addNotice.rejected](state, action) {
      state.noticeAdded = false;
      state.noticeAddError = action.payload;
      state.loading = false;
    },
    [noticesOperations.getNotices.pending](state, _) {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.getNotices.fulfilled](state, action) {
      state.loading = false;
      state.notices = action.payload.data;
    },
    [noticesOperations.getNotices.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
      state.notices = [];
    },
    [noticesOperations.addToFavorite.pending](state, _) {
      state.error = null;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.addToFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
    },
    [noticesOperations.addToFavorite.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.getFavorite.pending](state, _) {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.getFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload?.myFavorite;
      state.loading = false;
    },
    [noticesOperations.getFavorite.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [noticesOperations.removeFavorite.pending](state, _) {
      state.error = null;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.removeFavorite.fulfilled](state, action) {
      state.myFavorite = action.payload.myFavorite;
    },
    [noticesOperations.removeFavorite.rejected](state, action) {
      state.error = action.payload;
    },
    [noticesOperations.getOwn.pending](state, _) {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.getOwn.fulfilled](state, action) {
      state.ownAdds = action.payload.data;
      state.loading = false;
    },
    [noticesOperations.getOwn.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [noticesOperations.getOneNotice.fulfilled](state, { payload }) {
      state.noticeInformationMore = payload.data[0];
      state.onOpenLoading = false;
    },
    [noticesOperations.getOneNotice.pending](state, { payload }) {
      state.onOpenLoading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.deleteUserNotice.pending](state, _) {
      state.noticeRemoved = false;
      state.loading = true;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.deleteUserNotice.fulfilled]: (state, { payload }) => {
      state.ownAdds = state.ownAdds.filter(({ _id }) => _id !== payload);
      state.noticeRemoved = true;
      state.loading = false;
      state.noticeRemovedError = false;
    },
    [noticesOperations.deleteUserNotice.rejected]: (state, { payload }) => {
      state.noticeRemoved = false;
      state.loading = false;
      state.noticeRemovedError = payload;
    },
    [noticesOperations.searchNotice.pending]: (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.noticeRemoved = false;
      state.noticeAddError = null;
      state.noticeRemovedError = false;
    },
    [noticesOperations.searchNotice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notices = payload;
    },
    [noticesOperations.searchNotice.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.notices = [];
    },
  },
});
export default noticesSlice.reducer;
