import React from "react";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Text,
  Td,
  Tbody,
  Box,
} from "@chakra-ui/react";
function SquadList() {
  return (
    <>
      <Box boxShadow="lg">
        <TableContainer>
            <Text>Missing Players</Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th>Position</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Cristiano Ronaldo</Td>
                <Td>34</Td>
                <Td>ST</Td>
              </Tr>
              <Tr>
                <Td>Harry Kane</Td>
                <Td>27</Td>
                <Td>ST</Td>
              </Tr>
              <Tr>
                <Td>Hannibal mejbri</Td>
                <Td>20</Td>
                <Td>AMF</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
export default SquadList;
