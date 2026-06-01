import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";

export const allJobsLoader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
