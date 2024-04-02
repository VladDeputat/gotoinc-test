import { nanoid } from "nanoid";
import {
  setCurrentUserAction,
  createRequestAction,
  deleteRequestAction,
  updateRequestAction,
} from "./parcelsSlice";

const convertDate = (timeString) => {
  return new Date(timeString).getTime();
};

export const setCurrentUser = (userId) => async (dispatch) => {
  try {
    dispatch(setCurrentUserAction(userId));
  } catch (error) {
    console.log(error.message);
  }
};

export const crateRequest = (orderData) => async (dispatch) => {
  try {
    const convertedData = {
      ...orderData,
      requestId: nanoid(),
      parcelType: orderData.parcelType ? orderData.parcelType : "other",
      createdAt: convertDate(new Date()),
      dispatchDate: convertDate(orderData.dispatchDate),
    };
    dispatch(createRequestAction(convertedData));
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRequest = (newData) => async (dispatch) => {
  try {
    dispatch(updateRequestAction(newData));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRequest = (requestId) => async (dispatch) => {
  try {
    dispatch(deleteRequestAction(requestId));
  } catch (error) {
    console.log(error.message);
  }
};
