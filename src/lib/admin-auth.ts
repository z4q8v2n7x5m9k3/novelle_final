import { NextRequest } from 'next/server';

export function getAdminPasscode() {
  return process.env.ADMIN_PASSCODE || 'novelle2026';
}

export function isAdminRequest(req: NextRequest) {
  const provided = req.headers.get('x-admin-passcode') || '';
  return provided.length > 0 && provided === getAdminPasscode();
}
