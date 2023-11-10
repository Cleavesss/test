import axios from "axios";

export const statusFiles = async (id, key) => {
   
        const options = {
            method: 'GET',
            url: `https://www.virustotal.com/api/v3/analyses/${id}`,
            headers: {
              accept: 'application/json',
              'x-apikey': key
            }
        };

      

        let response = await axios
        .request(options)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          return error;
        });

        if (response.data === undefined || response.data.attributes === undefined ){return response}
        return response.data.attributes.stats.malicious === 0;

   
}