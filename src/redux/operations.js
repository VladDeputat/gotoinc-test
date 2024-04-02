import { nanoid } from "nanoid";
import {
  setCurrentUserAction,
  createRequestAction,
  deleteRequestAction,
  catchErrorAction,
} from "./parcelsSlice";

// const convertDate = (timeString) => {
//   const date = new Date(timeString);
//   const formattedDate = new Intl.DateTimeFormat("en-GB", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   }).format(date);
//   return formattedDate;
// };

const convertDate = (timeString) => {
  return new Date(timeString).getTime();
};

export const setCurrentUser = (userId) => async (dispatch) => {
  try {
    dispatch(setCurrentUserAction(userId));
  } catch (error) {
    dispatch(catchErrorAction(error.message));
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
    dispatch(catchErrorAction(error.message));
    console.log(error.message);
  }
};

export const deleteRequest = (requestId) => async (dispatch) => {
  try {
    dispatch(deleteRequestAction(requestId));
  } catch (error) {
    dispatch(catchErrorAction(error.message));
    console.log(error.message);
  }
};
