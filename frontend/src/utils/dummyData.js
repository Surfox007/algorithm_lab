export const featuredPosts = [
  {
    _id: '1',
    slug: 'scaling-nodejs-services-in-production',
    title: 'Scaling Node.js Services in Production',
    excerpt: 'Battle-tested strategies for scaling Express and MongoDB workloads beyond 10k DAU.',
    category: 'Engineering',
    readTime: '8 min read',
    views: 12450,
    likes: 890,
    author: { name: 'Ava Johnson' }
  },
  {
    _id: '2',
    slug: 'design-systems-for-fast-moving-startups',
    title: 'Design Systems for Fast-Moving Startups',
    excerpt: 'How to ship faster with reusable UI primitives, tokens, and accessibility rules.',
    category: 'Design',
    readTime: '6 min read',
    views: 9820,
    likes: 670,
    author: { name: 'Liam Cooper' }
  },
  {
    _id: '3',
    slug: 'secure-jwt-authentication-patterns',
    title: 'Secure JWT Authentication Patterns',
    excerpt: 'Implementing access/refresh token rotation with proper server-side invalidation.',
    category: 'Security',
    readTime: '10 min read',
    views: 17430,
    likes: 1304,
    author: { name: 'Noah Patel' }
  }
];

export const comments = [
  { id: 'c1', author: 'Mia', text: 'Great breakdown. The indexing advice saved us.', replies: ['Same here.'] },
  { id: 'c2', author: 'Ethan', text: 'Would love a follow-up on Redis caching patterns.', replies: [] }
];

export const writerStats = {
  posts: 42,
  totalViews: 128440,
  totalLikes: 6891,
  comments: 932,
  followers: 2210
};
