import React from 'react';
import Link from 'next/link';

function ArticleItem({articles}) {
  return (
    <div>
        <Link href={`/articles/${articles.id}`}>
        <h3 >{articles.title}</h3>
        <p>{articles.body}</p>
        <br></br>
        </Link>
    </div>
  )
}

export default ArticleItem