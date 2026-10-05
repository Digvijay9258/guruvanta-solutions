import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { UserRole, UserSession } from '@/types';

const AUTH_SECRET = process.env.AUTH_SECRET || 'guruvanta_super_secret_jwt_key_928374982374982374982374';
const COOKIE_NAME = 'guruvanta_session';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function signUserToken(user: UserSession): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    AUTH_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyUserToken(token: string): UserSession | null {
  try {
    const decoded = jwt.verify(token, AUTH_SECRET) as UserSession;
    return decoded;
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<UserSession | null> {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return null;
    return verifyUserToken(token);
  } catch {
    return null;
  }
}

export function checkRoleAuthorization(currentRole: UserRole, allowedRoles: UserRole[]): boolean {
  if (currentRole === 'SUPER_ADMIN') return true;
  return allowedRoles.includes(currentRole);
}
