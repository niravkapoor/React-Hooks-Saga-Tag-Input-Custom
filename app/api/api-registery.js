const imdb = {
    apis: {
      GET_MOVIE_NAME: '/'
    }
}

export const apiList = {
    ...imdb.apis,
};


const apiRegistry = {
    buildApiUrl(api, options = {}) {
      // If api passed is a URL return same
    //   if (
    //     api.toLowerCase().startsWith('http://')
    //     || api.toLowerCase().startsWith('https://')
    //   ) {
    //     return api;
    //   }
  
      let returnVal = '';
      let route = apiList[api];
  
      returnVal =	route + (options.queryStringHash
        ? this.buildQueryStringParams(options.queryStringHash)
        : '');
      return returnVal;
    },
  
    buildQueryStringParams(queryStringHash = {}) {
      let resultString = '?';
  
      Object.keys(queryStringHash).forEach((keyName) => {
        resultString += `${keyName}=${encodeURIComponent(
          queryStringHash[keyName],
        )}&`;
      });
  
      resultString = resultString.slice(0, -1);
  
      return resultString;
    },
  };

export default apiRegistry;
//8b03323e