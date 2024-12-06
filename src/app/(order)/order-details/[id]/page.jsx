import React from "react";

const OrderDetails = async ({ params, searchParams }) => {
  const { id } = await params; // 동적 라우팅의 파라미터를 가져올 때
  const { hello } = await searchParams; // 쿼리스트링 파라미터 가져올 때
  console.log(id, hello);
  return (
    <div>
      {/* {id}
      <br /> {hello} */}
    </div>
  );
};

export default OrderDetails;
