import React from "react";
import useUsers from "../useUsers";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import UsersRow from "./UsersRow";
import Loading from "../../../ui/Loading";

function UsersTable() {
  const { isLoading, users } = useUsers();
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!users.length) {
    return (
      <div>
        <Empty resourceName="No user found" />
      </div>
    );
  }
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phonw number</th>
        <th>Role</th>
        <th>Status</th>
        <th>Operation</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
