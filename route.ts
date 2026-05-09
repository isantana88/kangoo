import { NextRequest, NextResponse } from 'next/server';
import { checkSlugAvailable, requireUser } from '@/lib/server/kangoo';

export async function GET(request: NextRequest) {
  try {
    const user = await requireUser();
    const slug = request.nextUrl.searchParams.get('slug') || '';
    const available = await checkSlugAvailable(slug, user.id);
    return NextResponse.json({ available });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Erro ao validar o link.' }, { status: 400 });
  }
}
