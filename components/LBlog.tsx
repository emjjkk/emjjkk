'use client';

import { LuArrowUpRight } from 'react-icons/lu';
import useMediumFeed from "@/hooks/useMediumFeed";

export default function LBlog() {
  const { posts, loading } = useMediumFeed(); // updated to use your server route

  return (
    <div className="mt-10">
      <h2 className="text-xl text-foreground mb-1">Latest Blog Posts</h2>
      <p className="text-sm text-muted-foreground mb-4">
        You can also read them all on <a href="https://medium.com/@emjjkk" target="_blank" rel="noopener noreferrer" className="underline">Medium</a>.
      </p>

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">No blog posts found. Check back later!</p>
      ) : (
        <div className="space-y-6">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.link}
              className="group pl-3 border-l-2"
            >
              <div className="flex flex-col">
                <h3 className="text-md font-medium text-foreground mb-1 group-hover:underline">
                  {post.title}
                </h3>
                <span className="text-xs text-muted-foreground mb-2">
                  {post.pubDate}
                </span>
                <p className="text-sm line-clamp-3 mb-4">
                  {post.contentSnippet}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start"
                >
                  <button className="relative px-2 py-1 text-xs border border-2 border-foreground overflow-hidden group">
                    <span className="relative z-10 text-foreground group-hover:text-background transition duration-300">
                      Read More
                    </span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full z-0" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
