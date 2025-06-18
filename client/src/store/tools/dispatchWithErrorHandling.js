import { unwrapResult } from "@reduxjs/toolkit";
import { openTooltip } from "../slices/UISlice";

export async function dispatchWithErrorHandling(dispatch, action, tooltipTxt) {
  try {
    const result = await dispatch(action);

    unwrapResult(result);
    if (tooltipTxt) dispatch(openTooltip(tooltipTxt));
  } catch (error) {
    throw new Error(`Error occurred: ${error}`);
  }
}
