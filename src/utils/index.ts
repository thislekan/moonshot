import { IFetchInputs } from "./interface";

export const makeApiCall = async ({ url, options }: IFetchInputs) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
