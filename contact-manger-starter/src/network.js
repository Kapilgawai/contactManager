import axios from "axios"

export const addContactOnServer = async (name,email) => {


try {
    const {data} = await axios.post(`${process.env.REACT_APP_SERVER}/contacts.json`, {name,email});
return data;
} catch (error) {
    console.log(error);
}


};


// ------------------------------------------------------------------------------------------------------





export const getAllContacts = async (name,email) => {


    try {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/contacts.json`);
    return data;
    } catch (error) {
        console.log(error);
    }
    
    
    };
