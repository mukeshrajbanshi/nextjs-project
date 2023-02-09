import Link from "next/link";
import React from "react";
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

function post({ data }) {
  return (
    <div>
      {data.slice(0, 7).map((curElem) => {
        return (
          <div key={curElem.id}>
            <h4> {curElem.id}</h4>
            <Link href={`/blog/${curElem.id}`}>
              <h4>{curElem.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default post;
