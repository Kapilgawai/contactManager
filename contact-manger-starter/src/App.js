import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Image, Input, InputGroup, InputLeftElement, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import {addContactOnServer} from "./network";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";
import Kmodal from "./components/Kmodal";



const App = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();


console.log(process.env.REACT_APP_SERVER);


  const { isOpen:isOpenEdit, onOpen:onOpenEdit, onClose:onCloseEdit } = useDisclosure();



const [searchData, setSearchData] = useState('');




const [contacts, setContacts] = useState(

[
{name: "kapil", email: "kapilgawai24@gmail.com", id: "1"}






]

);


const [contactId, setContactId] = useState();


const addNewContact = async (name, email) =>{


  if(contacts.findIndex((contact)=>contact.email === email) === -1 && email !== ''){

   const data = await addContactOnServer (name,email);
console.log(data);
    setContacts([...contacts, {name,email, id: uuidv4}]);


  }


};



let searchContacts = contacts.filter((contact)=> contact.name.includes(searchData));


const getContactId = (id) => {
  setContactId(id);

};


const updateContact = (name, email, id) => {



setContacts((prev) => [...contacts.filter((contact)=> contact.id !== id), {name, email, id}]
);

};


const deleteContact = (id)=>{

  setContacts((prev) => [...contacts.filter((contact)=> contact.id !== id)]
  );

}


let selectContact = contacts.find((contact)=>contact.id === contactId);


  return (
 <>

 <Kmodal isOpen={isOpen} title={"Add New Contact"} onOpen={onOpen} onClose={onClose} > 
 

<ContactForm addNewContact={addNewContact} onClose={onClose} />


</Kmodal>



<Kmodal  isOpen={isOpenEdit} title={"Add New Contact"} onOpen={onOpenEdit} onClose={onCloseEdit} > 
 

 <ContactForm  updateContact={updateContact} contact={selectContact}    addNewContact={addNewContact} onClose={onCloseEdit} />
 
 
 </Kmodal>

 
 <Box>

<Flex align={"center"} justify={"center"} p={"4"}>
  <Image src = "/pngegg.png"  w={"120px"} h={"120px"}/>
  <Heading as={"h1"} textTransform={"uppercase"}>Contact App</Heading>
</Flex>








<Box p={"4"}>

<Button width={"full"} 
fontSize={"xl"}
 fontWeight={"bold"}
  bg={"blue.400"}
  colorScheme={"blue"}
  color={"black"}

onClick={onOpen}

  > 
<Box mr={"4"}>
<FaPlus h={"20px"} w={"20px"} />
</Box>
  Add Contact
</Button>

</Box>








<Box p={"4"}>
<InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<FaSearch color="grey" />}
    />
    <Input type='tel' placeholder='Search Contact' onChange={(e)=>setSearchData (e.target.value) } />
  </InputGroup>
</Box>







<Box p={"4"} >

{searchContacts.map((contact)=>
(<ContactCard getContactId={getContactId} onOpen={onOpenEdit} contact={contact} key={contact.id}  deleteContact={deleteContact}/>)
)}

</Box>

  </Box>
 
 </>

  );
};

export default App;
