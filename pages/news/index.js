// For our news page - www.domainName.com/news

import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    // Fragment so we can have adjacent jsx elements
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-great'>NextJS is a Great Framework Story</Link>
        </li>

        <li>Something Else Article</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
