import { NextRequest, NextResponse } from 'next/server';
import { deleteBlog, getBlog, updateBlog } from '@/lib/blog-store';
import { isAdminRequest } from '@/lib/admin-auth';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const blog = await getBlog(id);
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to load blog' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: RouteContext) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const blog = await updateBlog(id, await req.json());
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to update blog' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteContext) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    await deleteBlog(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to delete blog' }, { status: 500 });
  }
}
