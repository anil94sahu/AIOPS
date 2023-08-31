export const DevUrlsMap = {
  NEXT_PUBLIC_API_URL: "https://stageapi.axiomio.com/api",
};
export const StageUrlsMap = {
  NEXT_PUBLIC_API_URL: "https://stageapi.axiomio.com/api",
};
export const ProdUrlsMap = {
  NEXT_PUBLIC_API_URL: "https://stageapi.axiomio.com/api",
};
export const EnvUrlsMap: any = {
  development: DevUrlsMap,
  stage: StageUrlsMap,
  production: ProdUrlsMap,
};

export function getBaseUrl(env: string, url: string) {
  return EnvUrlsMap[env][url];
}
