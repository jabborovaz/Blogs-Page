import React from "react";
import { Table, Modal, Spin } from "antd";
import { useGetPostsQuery } from "../Api/Posts";
import { useState, useEffect } from "react";

function OwnTable() {
  const { data: data = [], isLoading: isLoading } = useGetPostsQuery();
  const [description, setDescription] = useState(false);
  const [searching, setSearching] = useState("");
  const [searches, setSearches] = useState([]);
  const [obj, setObj] = useState({
    name: "",
    text: "",
  });

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
      render: (text, row) => (
        <a
          onClick={() => {
            setDescription(true);
            setObj({
              name: row.name,
              text: row.body,
            });
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
  ];

  useEffect(() => {
    setSearches(
      data.filter((elem) =>
        elem?.name?.toLowerCase()?.includes(searching?.toLowerCase())
      )
    );
  }, [searching]);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Spin size="large" tip="Loading..." />
      </div>
    );

  return (
    <div>
      <input
        className="my-6 px-3 py-1 border-2 sm:w-full md:w-1/3"
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
        placeholder="search with name"
      />
      {data.length > 0 && searching === "" && (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 7, showSizeChanger: false }}
        />
      )}

      {searching.length > 0 && data.length > 0 && (
        <Table
          columns={columns}
          dataSource={searches}
          pagination={{ pageSize: 7, showSizeChanger: false }}
        />
      )}
      <Modal
        title="Description"
        visible={description}
        onCancel={() => setDescription(false)}
        footer={null}
      >
        <div>
          <h3 className="text-md font-bold">{obj.name}</h3>
          <p className="text-md">{obj.text}</p>
        </div>
      </Modal>
    </div>
  );
}

export default OwnTable;
