import apiService from "../../services/environment-urls";
import URLS from "../../utils/urls";

interface AuthResponse {
  status: number;
  data: any;
}
export const getRequestsToken = async () => {
  const response: AuthResponse = await apiService.get(
    URLS.FINOPS.REFRESH_TOKEN
  );
  return response;
};
