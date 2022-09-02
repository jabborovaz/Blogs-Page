import React from "react";
import { Table } from "antd";
import { useGetPostsQuery } from "../Api/Posts";

const columns = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },
];

function OwnTable() {
  const { data = [], isLoading } = useGetPostsQuery();

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <div>
      {data.length > 0 && <Table columns={columns} dataSource={data} />}
    </div>
  );
}

export default OwnTable;
