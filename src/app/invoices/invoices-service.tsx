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
export const getInvoicesListService = async () => {
      const response: AuthResponse = await apiService.get(
        URLS.FINOPS.LIST_OF_INVOICES,
      );
      return response;
  };
  
  export const updateService = async (ticketId:number, payload:any) => {
    const response: AuthResponse = await apiService.put(
      `${URLS.FINOPS.UPDATE_INVOICES_STATUS}${ticketId}` ,
      payload,
    );
    return response;
  };
