import { toaster } from "../../components/common/custom/toaster";
import { api_instance } from "../instance";

export const deleteVideo = (
  id: string,
  setDeleteLoading: any,
  dispatch: any,
  deleteVideoLocal: any
) => {
  try {
    const deleteVideo = api_instance.delete(`/api/videos/deletevideo/${id}`);
    setDeleteLoading(false);
    dispatch(deleteVideoLocal(id));
    toaster("success", "Video deleted successfully");
  } catch (error: any) {
    setDeleteLoading(false);
    toaster("error", error?.message);
  }
};
