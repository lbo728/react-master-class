import React from "react";
import { Link } from "react-router-dom";
import { authors } from "../data/authors"; // authors.ts 파일에서 작가 정보 가져오기

const Home = () => {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <Link to={`/author/${author.name}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
