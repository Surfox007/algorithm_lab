import { Helmet } from 'react-helmet-async';

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Blog Platform | Landing</title>
        <meta name="description" content="Scalable blogging platform" />
      </Helmet>
      <section>
        <h1 className="text-3xl font-bold">Write, Publish, and Grow</h1>
      </section>
    </>
  );
}
