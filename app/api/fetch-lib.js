import fetch from './fetch';

const defaultTimeOut = 30000

const defaultApiOptions = (options, isFormData = null, noHeader) => {
    let defaultApiHeaders = {
      'Content-Type': 'application/json',
    };
  
    return {
      headers: defaultApiHeaders,
      timeout: defaultTimeOut,
    };
  };

export default {
    get(apiEndpoint, options = {}, noHeader) {
      const apiOptions = defaultApiOptions(options, null, noHeader);
      return fetch(
        apiEndpoint,
        {
          method: 'GET',
          ...apiOptions,
        },
      );
    },
  };