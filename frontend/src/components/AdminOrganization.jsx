import React, { useEffect } from 'react'
import {Box,Thead,Tbody,Tr,Th,Td,TableContainer,Flex,Heading,Table, Button} from '@chakra-ui/react'
import { getAllusers, getOrganizations } from '../redux/AdminReducer/action'
import { useDispatch, useSelector } from 'react-redux'

const AdminOrganization = () => {
  const dispatch = useDispatch()
  const {orgs} = useSelector((store)=>store.adminReducer)

  useEffect(()=>{
      dispatch(getOrganizations())
  },[])

  // console.log(allusers)
  return (
    // <div style={{textAlign:"center"}}>AdminOrganization</div>
    <Box display="flex" flexDirection="column"  alignItems="flex-end" p="20px 60px 20px 20px" >
         <Box  w="80%"  borderRadius="10px" mt="40px" p="20px"  bg="white">
        <Flex justifyContent="space-between" alignItems="center">
         <Heading as="h3" size="sm">All Organizations</Heading>
         <Heading as="h3" size="md">...</Heading>
        </Flex>
           
        {/* <Table></Table> */}
        <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead >
      <Tr >
        <Th  textAlign={"center"}>Name</Th>
        <Th  textAlign={"center"}>Org</Th>
        <Th  textAlign={"center"}>Email</Th>
        <Th  textAlign={"center"}>Description</Th>
        <Th  textAlign={"center"}>Website</Th>
       
      </Tr>
    </Thead>
    <Tbody>

      {
        orgs.map((el)=>{
      

         return <Tr key={el.id} _hover={{bg:"gray.200"}} cursor={"pointer"}>
            <Td  textAlign={"center"}>{el.adminName}</Td>
            <Td  textAlign={"center"}>{el.name}</Td>
            <Td  textAlign={"center"}>{el.contactEmail}</Td>
            <Td  textAlign={"center"}>{el.description}</Td>
            <Td  textAlign={"center"}>{el.website}</Td>
          
            <Td textAlign={"center"}><Button>Delete</Button></Td>
            
          </Tr>
        }).reverse()
      }
     
    </Tbody>
    
  </Table>
</TableContainer>

        </Box>
    </Box>
  )
}

export default AdminOrganization