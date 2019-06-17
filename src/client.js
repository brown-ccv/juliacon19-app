import _ from 'lodash';
import fetch from 'isomorphic-fetch';

const SERVICE_ENDPOINT = 'https://bcbi.brown.edu/YOUR_API';

class Client {

  // get all data values from the bcbi db
  async getData() {
    var url = `${SERVICE_ENDPOINT}/YOUR_DATA`;

    var response;
    try {
      response = await fetch(url);
    } catch(error) {
      throw new Error(`Could not connect to server: ${error}`);
    }

    if (!response.ok) {
      throw new Error(`BCBIService getConcepts failed, HTTP status ${response.status}`);
    }
    const data = await response.json();

    return data;
  }

}

export default new Client();
