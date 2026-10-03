import { NextRequest, NextResponse } from 'next/server';
import { routeProblem } from '@/lib/router/agentRouter';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Field "query" is required' },
        { status: 400 }
      );
    }

    const routeResult = routeProblem(query);

    return NextResponse.json({
      success: true,
      result: routeResult,
    });
  } catch (error) {
    console.error('API Error in /api/router:', error);
    return NextResponse.json(
      { error: 'Failed to route problem' },
      { status: 500 }
    );
  }
}
