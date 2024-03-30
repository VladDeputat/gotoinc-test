import { catchError, createRequest } from "./parcelsSlice";

const convertDate = (timeString) => {
  const date = new Date(timeString);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
  return formattedDate;
};

export const crateRequest = (orderData) => async (dispatch) => {
  try {
    const convertedData = {
      ...orderData,
      parcelType: orderData.parcelType ? orderData.parcelType : "other",
      createdAt: convertDate(new Date()),
      dispatchDate: convertDate(orderData.dispatchDate),
    };
    dispatch(createRequest(convertedData));
  } catch (error) {
    dispatch(catchError(error.message));
    console.log(error.message);
  }
};
