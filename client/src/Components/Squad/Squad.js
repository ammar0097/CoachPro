import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SquadList from "./SquadList/SquadList";

function Squad() {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} m="20">
        <GridItem w="100%" h="10" >
          <SquadList />
        </GridItem>
      </Grid>
    </>
  );
}

export default Squad;
