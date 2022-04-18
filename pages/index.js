import Head from "next/head";
import Link from "next/link";
import Main from '../components/main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Final Project</title>
        <meta name="description" />
      </Head>
      <Main>
        <h1 className="title">Jake Hunter Blogs</h1>
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
        <Link href="/posts/first-post">
          <a>Second Post</a>
        </Link>
        <Link href="/posts/first-post">
          <a>Third Post</a>
        </Link>
      </Main>
    </div>
  );
}
