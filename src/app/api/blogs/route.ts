import { NextRequest, NextResponse } from 'next/server';
import { createBlog, listBlogs } from '@/lib/blog-store';
import { isAdminRequest } from '@/lib/admin-auth';

export async function GET() {
  try {
    return NextResponse.json(await listBlogs());
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to load blogs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const blog = await createBlog(await req.json());
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to create blog' }, { status: 500 });
  }
}
