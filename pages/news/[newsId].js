// For ./news/something-important
import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();
  // this holds the value in the url - the 'something-else' page of www.ourpage.com/something-else
  router.query.newsId;

  // could send request here to backend api to fetch news item with newsId (there isn't a db connected)

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
