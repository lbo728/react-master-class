import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../data/authors";

const AuthorDetail = () => {
  const { name } = useParams<{ name: string }>();

  // 작가 정보 가져오기
  const author = authors.find((a) => a.name === name);

  if (!author) {
    return <div>작가를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{author.name}</h1>
      <ul>
        {author.books.map((book, index) => (
          <li key={index}>
            <Link to={`/author/${name}/${book}`}>{book}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default AuthorDetail;
