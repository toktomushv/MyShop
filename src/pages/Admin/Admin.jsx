import React from "react";
import AdminTable from "../../components/AdminTable";
import { Container } from "@mui/material";

function Admin() {
  return (
    <>
      <Container>
        <h2>Admin Page</h2>
        <AdminTable />
      </Container>
    </>
  );
}

export default Admin;
