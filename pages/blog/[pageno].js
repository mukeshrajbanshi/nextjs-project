import React from "react";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  const paths = data.map((curElem) => {
    return {
      params: {
        pageno: curElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

function Page({ data }) {
  return (
    <div>
      <h4> {data.id}</h4>
      <h4>{data.title}</h4>
      <h4>{data.body}</h4>
    </div>
  );
}

export default Page;
