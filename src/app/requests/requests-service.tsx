import apiService from "../../../services/environment-urls";
import URLS from "../../../utils/urls";
import { useStorage } from "../../../utils/usestorage";


const { getItem } = useStorage();
const jwtToken = getItem("jwtToken");
const options = {
  headers: {
      Authorization: `Bearer ${jwtToken}` 
  }
};
export const getRequestsListService = async () => {
      const response: AuthResponse = await apiService.get(
        URLS.FINOPS.LIST_OF_REQUESTS,
      );
      return response;
};

export const updateRequestsListService = async (ticketId:number, payload:any) => {
  const response: AuthResponse = await apiService.put(
    `${URLS.FINOPS.UPDATE_REQUEST_STATUS}${ticketId}` ,
    payload,
  );
  return response;
};
  