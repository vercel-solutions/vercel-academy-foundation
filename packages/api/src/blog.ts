import { faker } from '@faker-js/faker';

// Type definitions
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  coverImage: string;
  publishedAt: Date;
  readingTime: number;
  views: number;
  likes: number;
};

// Categories for blog posts
const CATEGORIES = [
  'Technology',
  'Design',
  'Business',
  'Marketing',
  'Development',
  'Product',
  'Engineering',
  'Data Science',
  'AI/ML',
  'DevOps',
];

// Generate a single blog post
const generateBlogPost = (overrides?: Partial<BlogPost>): BlogPost => {
  const title = faker.lorem.sentence({ min: 3, max: 8 });
  const slug = faker.helpers.slugify(title).toLowerCase();
  const content = faker.lorem.paragraphs({ min: 8, max: 15 }, '\n\n');
  const wordCount = content.split(' ').length;
  const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute

  return {
    id: faker.string.uuid(),
    slug,
    title,
    excerpt: faker.lorem.paragraph({ min: 2, max: 4 }),
    content,
    category: faker.helpers.arrayElement(CATEGORIES),
    tags: faker.helpers.arrayElements(
      [
        'javascript',
        'typescript',
        'react',
        'nextjs',
        'nodejs',
        'css',
        'html',
        'web',
        'mobile',
        'cloud',
        'database',
        'api',
        'tutorial',
        'guide',
        'tips',
      ],
      { min: 2, max: 5 }
    ),
    author: {
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      bio: faker.person.bio(),
    },
    coverImage: faker.image.urlPicsumPhotos({ width: 1200, height: 630 }),
    publishedAt: faker.date.recent({ days: 90 }),
    readingTime,
    views: faker.number.int({ min: 100, max: 50_000 }),
    likes: faker.number.int({ min: 10, max: 5000 }),
    ...overrides,
  };
};

// Memoize generated posts to maintain consistency during development
let cachedPosts: BlogPost[] | null = null;

const getAllPosts = (): BlogPost[] => {
  if (!cachedPosts) {
    cachedPosts = Array.from({ length: 50 }, () => generateBlogPost());
  }
  return cachedPosts;
};

/**
 * Fetch a list of blog posts
 * @param limit - Number of posts to return (default: 10)
 * @param offset - Number of posts to skip (default: 0)
 * @returns Array of blog posts
 */
export async function fetchPosts(limit = 10, offset = 0): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const allPosts = getAllPosts();
  const sortedPosts = allPosts.sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  return sortedPosts.slice(offset, offset + limit);
}

/**
 * Fetch blog posts by category
 * @param category - Category name to filter by
 * @param limit - Number of posts to return (default: 10)
 * @returns Array of blog posts in the specified category
 */
export async function fetchPostsByCategory(
  category: string,
  limit = 10
): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const allPosts = getAllPosts();
  const categoryPosts = allPosts
    .filter((post) => post.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);

  // If no posts found in category, generate some
  if (categoryPosts.length === 0) {
    return Array.from({ length: limit }, () =>
      generateBlogPost({ category })
    ).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  return categoryPosts;
}

/**
 * Fetch a single blog post by slug
 * @param slug - The slug of the blog post
 * @returns Single blog post or null if not found
 */
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === slug);

  // If not found, generate a new post with the given slug
  if (!post) {
    return generateBlogPost({ slug });
  }

  return post;
}

/**
 * Fetch recommended posts based on a given post slug
 * @param slug - The slug of the current blog post
 * @param limit - Number of recommendations to return (default: 5)
 * @returns Array of recommended blog posts
 */
export async function fetchRecommendedPostsBySlug(
  slug: string,
  limit = 5
): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const allPosts = getAllPosts();
  const currentPost = allPosts.find((p) => p.slug === slug);

  if (!currentPost) {
    // If post not found, return random posts
    return faker.helpers.shuffle(allPosts).slice(0, limit);
  }

  // Get posts from the same category or with similar tags
  const recommendedPosts = allPosts
    .filter((post) => {
      if (post.slug === slug) {
        return false; // Exclude current post
      }

      // Check if same category
      if (post.category === currentPost.category) {
        return true;
      }

      // Check if has common tags
      const commonTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      return commonTags.length > 0;
    })
    .sort((a, b) => {
      // Sort by relevance (same category first, then by common tags)
      const aRelevance =
        (a.category === currentPost.category ? 10 : 0) +
        a.tags.filter((tag) => currentPost.tags.includes(tag)).length;
      const bRelevance =
        (b.category === currentPost.category ? 10 : 0) +
        b.tags.filter((tag) => currentPost.tags.includes(tag)).length;

      return bRelevance - aRelevance;
    })
    .slice(0, limit);

  // If not enough recommendations, add random posts
  if (recommendedPosts.length < limit) {
    const additionalPosts = allPosts.filter(
      (post) =>
        post.slug !== slug &&
        !recommendedPosts.some((r) => r.slug === post.slug)
    );

    const randomPosts = faker.helpers
      .shuffle(additionalPosts)
      .slice(0, limit - recommendedPosts.length);

    return [...recommendedPosts, ...randomPosts];
  }

  return recommendedPosts;
}

/**
 * Get available categories
 * @returns Array of category names
 */
export async function fetchCategories(): Promise<string[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return CATEGORIES;
}

/**
 * Search posts by query
 * @param query - Search query
 * @param limit - Number of results to return (default: 10)
 * @returns Array of matching blog posts
 */
export async function searchPosts(
  query: string,
  limit = 10
): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  const allPosts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  const searchResults = allPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        post.category.toLowerCase().includes(lowerQuery)
    )
    .sort((a, b) => {
      // Prioritize title matches
      const aInTitle = a.title.toLowerCase().includes(lowerQuery) ? 10 : 0;
      const bInTitle = b.title.toLowerCase().includes(lowerQuery) ? 10 : 0;

      if (aInTitle !== bInTitle) {
        return bInTitle - aInTitle;
      }

      // Then sort by date
      return b.publishedAt.getTime() - a.publishedAt.getTime();
    })
    .slice(0, limit);

  return searchResults;
}
