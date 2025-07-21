import { useEffect, useState } from "react";

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

export default function useMediumFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await fetch("/api/blog-feed");
        const data = await res.json();
        setPosts(data);
        console.log(res, data)
      } catch (err) {
        console.error("Failed to fetch Medium feed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  return { posts, loading };
}
