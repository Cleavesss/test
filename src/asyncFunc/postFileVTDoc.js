import axios from "axios";

export const fetchUploadFile = async (currentFile, currentToken) => {

    
    

    const form = new FormData();
    form.append('file',  currentFile);
    
   
    
    const options = {
        method: 'POST',
        url: 'https://www.virustotal.com/api/v3/files',
        headers: {
            accept: 'application/json',
            'x-apikey': currentToken,
            'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
        },
        data: form
    };
    
    
    
    const response = await axios.request(options)
                .then(function (response) {
                   return response.data;
                    
                })
                .catch(function (error) {
                    console.error(error);
                });
    
    
  
    
    
    let payload = response.data.id
    
    return payload;
    
    
    
}



// form.append('file', 'data:image/png;name=image%207.png;base64,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');
