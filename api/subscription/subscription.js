import { api_instance } from "../instance";
import { toaster } from "../../components/common/custom/toaster";

export const getSubscriptions = async (setSubscriotionDetails) => {
  try {
    const res = await api_instance.get("/api/users/getsubscriptions");
    setSubscriotionDetails(res.data.subscribedChannels);
  } catch (error) {
    console.log(error);
    if (error?.response?.status) {
      return;
    }

    toaster("error", error?.response?.data?.message);
  }
};
