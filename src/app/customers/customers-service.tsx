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
export const getCustomersListService = async () => {
      const response: AuthResponse = await apiService.get(
        URLS.FINOPS.LIST_OF_CUSTOMERS,
      );
      return response;
  }; 

export const deleteCustomer = async (id:number) => {
  const response: AuthResponse = await apiService.delete(
    URLS.FINOPS.DELETE_CUSTOMERS + id,
  );
  return response; 
}

export const registerCustomer = async (payload:any) => {
  const response: AuthResponse = await apiService.post(
    URLS.FINOPS.CUSTOMERS_REGISTER,
    payload,
  );
  return response;
}