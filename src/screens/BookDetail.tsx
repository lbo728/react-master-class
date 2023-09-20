import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const BookDetail = () => {
  const { name, book } = useParams<{ name: string; book: string }>();

  // 책 정보를 동적으로 가져오기 (예: 책 이름과 관련된 데이터)
  // 이 부분은 실제 데이터를 가져오는 로직으로 대체되어야 합니다.

  return (
    <div>
      <h2>{book}</h2>
      <div>
        <Link to={`/author/${name}/${book}/chapters`}>Chapters</Link>
      </div>
      <div>
        <Link to={`/author/${name}/${book}/characters`}>Characters</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default BookDetail;
