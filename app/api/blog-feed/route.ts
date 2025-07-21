// /app/api/blog-feed/route.ts (Next 13+ App Router)
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
  const feed = await parser.parseURL('https://medium.com/feed/@emjjkk');

  const posts = feed.items.slice(0, 5).map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet,
  }));

  return NextResponse.json(posts);
}
