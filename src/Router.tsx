import { createBrowserRouter } from "react-router-dom";
import React from "react";
import About from "./screens/About";
import Home from "./screens/Home";
import BookDetail from "./screens/BookDetail"; // BookDetail 컴포넌트로 책 상세 페이지를 대표합니다.
import BookChapters from "./screens/BookChapters";
import BookCharacters from "./screens/BookCharacters";
import NotFound from "./screens/NotFound";
import AuthorDetail from "./screens/AuthorDetail";
import Root from "Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/:name",
        element: <AuthorDetail />,
        children: [
          {
            path: ":book",
            element: <BookDetail />,
            children: [
              {
                path: "chapters",
                element: <BookChapters />,
              },
              {
                path: "characters",
                element: <BookCharacters />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
