import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { isAdminRequest } from '@/lib/admin-auth';

const CONFIG_PATH = path.join(process.cwd(), 'src', 'content.json');

function readConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {
      brandName: 'Al Novelle',
      phone: '050 234 8625',
      email: 'contact@novelle.ae',
      address: 'Al Zahiyah, Abu Dhabi, UAE',
      homepage: {
        hero: {
          title: 'World-Class Aesthetic Training Programmes',
          subtitle: 'Courses & Workshops',
          description: 'Internationally aligned programmes in beauty therapy, laser technologies, semi-permanent makeup, and body slimming treatment education.',
          backgroundImage: '/academy-images/academy-approach-session.png',
        },
        bigStatement: {
          image1: '/academy-images/training-consultation.png',
          image2: '/academy-images/laser-device-training.png',
        },
        academyApproach: {
          image: '/academy-images/academy-approach-session.png',
        },
      },
    };
  }
}

function writeConfig(config: Record<string, unknown>) {
  // TODO [SUPABASE MIGRATION]: Vercel serverless functions are read-only.
  // This fs.writeFileSync will fail in production on Vercel.
  // Replace this with Supabase:
  // await supabase.from('settings').upsert({ id: 'global', ...config })
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

export async function GET() {
  return NextResponse.json(readConfig());
}

export async function POST(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const config = readConfig();
  const updatedConfig = {
    ...config,
    ...(await req.json()),
  };

  writeConfig(updatedConfig);
  return NextResponse.json(updatedConfig);
}
