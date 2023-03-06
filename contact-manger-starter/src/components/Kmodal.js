import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";



const Kmodal = ({onOpen,isOpen,onClose, title,children}) => {



    return (
      <>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton/> 
            <ModalBody>
                {children}
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    );



};


export default Kmodal;