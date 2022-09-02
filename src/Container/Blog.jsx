import React from "react";
import OwnTable from "../Component/OwnTable";

function Blog() {
  return (
    <div className="h-screen">
      <div className="pt-8">
        <h2 className="text-xl sm:text-3xl flex justify-center font-bold">
          Posts
        </h2>
        <div className="pt-8">
          <OwnTable />
        </div>
      </div>
    </div>
  );
}

export default Blog;
