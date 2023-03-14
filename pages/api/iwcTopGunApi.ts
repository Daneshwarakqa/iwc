import axiosClient from "../../utils/axiosClient";

export const fetchIwcProductsDataApi = async () => {
  const {data} = await axiosClient({
    url: `https://publish-p104103-e979259.adobeaemcloud.com/graphql/execute.json/IWC/searchByReference;reference=IW329801?q=${Date.now()}`,
    method: 'GET'
  })
  return data;
};

export const fetchScriptTagApi = async() => {
  const {data} = await axiosClient({
    url: `https://publish-p104103-e979259.adobeaemcloud.com/graphql/execute.json/IWC/script-to-inject?q=5433535`,
    method: 'GET'
  })
  return data;
};
