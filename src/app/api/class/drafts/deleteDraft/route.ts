import { NextRequest, NextResponse } from 'next/server';

const END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;

export const DELETE = async (request: NextRequest) => {
  if (!END_POINT) {
    return NextResponse.json({
      status: 500,
      message: '환경 변수가 설정되지 않았습니다.',
    });
  }

  const searchParams = request.nextUrl.searchParams;
  const lectureId = searchParams.get('lectureId');

  if (!lectureId) {
    return NextResponse.json({
      status: 401,
      message: 'id값이 존재하지 않습니다.',
    });
  }

  const tokenValue = request.headers.get('cookie')?.split('=')[1]?.trim();

  if (!tokenValue) {
    return NextResponse.json({
      status: 401,
      message: '토큰이 존재하지 않습니다.',
    });
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${tokenValue}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(
    END_POINT + '/lecture-temporarily-save/' + lectureId,
    {
      method: 'DELETE',
      credentials: 'include',
      headers,
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    return NextResponse.json(
      {
        status: response.status,
        message: errorData.message || '서버 요청 오류',
      },
      { status: response.status },
    );
  }

  const result = await response.json();

  return NextResponse.json(result);
};