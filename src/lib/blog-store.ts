import fs from 'fs';
import path from 'path';

export type Blog = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  published: boolean;
};

export type BlogInput = Partial<Omit<Blog, 'id' | 'slug' | 'date'>> & {
  title: string;
  content: string;
};

function getDataPath() {
  const directPath = path.join(process.cwd(), 'data', 'blogs.json');
  if (fs.existsSync(directPath)) return directPath;

  const localWorktreePath = path.join(process.cwd(), 'novelle_final_latest', 'data', 'blogs.json');
  if (fs.existsSync(localWorktreePath)) return localWorktreePath;

  return directPath;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function readBlogs(): Blog[] {
  try {
    return JSON.parse(fs.readFileSync(getDataPath(), 'utf-8'));
  } catch {
    return [];
  }
}

function writeBlogs(blogs: Blog[]) {
  // TODO [SUPABASE MIGRATION]: Vercel serverless functions are read-only. 
  // This fs.writeFileSync will fail in production on Vercel.
  // Replace this with Supabase: 
  // const { data, error } = await supabase.from('blogs').upsert(blogs)
  fs.writeFileSync(getDataPath(), JSON.stringify(blogs, null, 2));
}

export async function listBlogs() {
  return readBlogs();
}

export async function getBlog(idOrSlug: string) {
  return readBlogs().find((blog) => blog.id === idOrSlug || blog.slug === idOrSlug) || null;
}

export async function createBlog(input: BlogInput) {
  const blogs = readBlogs();
  const blog: Blog = {
    id: Date.now().toString(),
    slug: slugify(input.title),
    title: input.title,
    category: input.category || 'Laser Therapy',
    excerpt: input.excerpt || '',
    coverImage: input.coverImage || '/uploads/blog-placeholder.svg',
    author: input.author || 'Novelle Academy',
    date: new Date().toISOString().slice(0, 10),
    readTime: input.readTime || '5 min read',
    content: input.content,
    published: input.published ?? true,
  };

  blogs.unshift(blog);
  writeBlogs(blogs);
  return blog;
}

export async function updateBlog(id: string, input: BlogInput) {
  const blogs = readBlogs();
  const idx = blogs.findIndex((blog) => blog.id === id);
  if (idx === -1) return null;

  blogs[idx] = {
    ...blogs[idx],
    ...input,
    id,
    slug: slugify(input.title),
    coverImage: input.coverImage || blogs[idx].coverImage,
    readTime: input.readTime || blogs[idx].readTime,
    published: input.published ?? blogs[idx].published,
  };

  writeBlogs(blogs);
  return blogs[idx];
}

export async function deleteBlog(id: string) {
  writeBlogs(readBlogs().filter((blog) => blog.id !== id));
  return true;
}

export async function uploadImage(file: File) {
  const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
  const bytes = Buffer.from(await file.arrayBuffer());
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  fs.mkdirSync(uploadDir, { recursive: true });
  const localPath = path.join(uploadDir, safeName);
  
  // TODO [SUPABASE MIGRATION]: Vercel serverless functions are read-only.
  // This fs.writeFileSync will fail in production on Vercel.
  // Replace this with Supabase Storage:
  // await supabase.storage.from('uploads').upload(safeName, file)
  // return supabase.storage.from('uploads').getPublicUrl(safeName).data.publicUrl
  
  fs.writeFileSync(localPath, bytes);
  return `/uploads/${safeName}`;
}
