import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../const';
import { fetchCommentsAction, postComment } from './api-actions';
import { TypeReview } from '../types/types-data';


type ReviewsProcess = {
  reviews: TypeReview[];
  commentFetchingstatus:RequestStatus;

}

const initialState:ReviewsProcess = {
  reviews: [],
  commentFetchingstatus:RequestStatus.Idle,

};

export const reviewsProcess = createSlice({
  name:NameSpace.Reviews,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(fetchCommentsAction.pending, (state)=>{
        state.commentFetchingstatus = RequestStatus.Pending;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action)=>{
        state.commentFetchingstatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state)=>{
        state.commentFetchingstatus = RequestStatus.Error;
      })
      .addCase(postComment.pending, (state)=>{
        state.commentFetchingstatus = RequestStatus.Pending;
      })
      .addCase(postComment.fulfilled, (state, action)=>{
        state.commentFetchingstatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postComment.rejected, (state)=>{
        state.commentFetchingstatus = RequestStatus.Error;
      });

  }
});
