import React from "react";
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

function Tablex() {
  let [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        return setDatas(data);
      });
  }, []);
  function handleEdit() {
    axios.delete("https://northwind.vercel.app/api/products")
  }
  return (
    <React.Fragment>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>name</Th>
              <Th>price</Th>
              <Th>discontinued</Th>
              <Th>unitsInStock</Th>
              <Th>edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {datas.map((data, i) => {
              return (
                <Tr key={i}>
                  <Td>{data.id}</Td>
                  <Td>{data.name}</Td>
                  <Td>{data.unitPrice}</Td>
                  <Td>{data.discontinued}</Td>
                  <Td>{data.unitsInStock}</Td>
                  <Td><Button colorScheme='yellow' onClick={(e)=>handleEdit(e)}>Edit</Button></Td>
                  <Td><Button colorScheme='red' onClick={(e)=>handleDelet(e)}>Delete</Button></Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default Tablex;
