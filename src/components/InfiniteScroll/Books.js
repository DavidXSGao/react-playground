import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";
import Loaders from "./../Loaders";

function Books() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef(null);
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for infinite scroll"
      />
      {books.map((book, index) => {
        if (index + 1 === books.length) {
          return (
            <div key={book} ref={lastBookElementRef}>
              {" "}
              {book}{" "}
            </div>
          );
        }
        return <div key={book}> {book} </div>;
      })}
      <div> {loading && <Loaders/>}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export default Books;
