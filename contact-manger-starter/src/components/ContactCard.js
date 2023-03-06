import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaTrash, FaUserAlt } from "react-icons/fa";
const ContactCard = ({contact, onOpen, getContactId, deleteContact}) =>{
const updateHandler = (id) =>{
  getContactId(id);
  onOpen();
};


const deleteContactHandler = (id) => {

  deleteContact(id);

};

return(

    <Flex bg={"blue.400" } borderRadius={"xl"} p={"4"} justify={"space-between"} boxShadow={"2xl"} mb={"4"}>
    <Flex align={"center"}>
      <Box mr={"4"}>
      <FaUserAlt size={"32px"}/>
      </Box>
    
    <Stack>
    
      <Text>{contact.name}</Text>
      <Text>{contact.email}</Text>
    
    </Stack>
    </Flex>
    <Flex align={"center"} cursor={"pointer"}>
      <Box mr={"4"}  onClick={()=>updateHandler(contact.id)}>
      <FaEdit  size={"30px"}/>
    
      </Box>
      <Box color={"red.500"} onClick={()=>deleteContactHandler(contact.id)}>
      <FaTrash  size={"30px"}/>
      </Box>
    
    </Flex>
      </Flex>

)

};


export default ContactCard;