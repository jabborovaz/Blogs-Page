import React from "react";
import { Table } from "antd";
import { useGetPostsQuery } from "../Api/Posts";
import { useGetPhotosQuery } from "../Api/Photos";

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
    render: (text) => <a>{text}</a>,
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },
];

function OwnTable() {
  const { data: data, isLoading: isLoading } = useGetPostsQuery();

  const { data: list } = useGetPhotosQuery();
  console.log(list.slice(0, 500));

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <div>
      {data.length > 0 && <Table columns={columns} dataSource={data} />}
    </div>
  );
}

export default OwnTable;
