import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase';

export async function GET() {
  try {
    // Storage 버킷 목록 조회로 연결 테스트
    const { data, error } = await supabase.storage.listBuckets();
    
    if (error) {
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          message: 'Supabase 연결 실패'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase 연결 성공',
      buckets: data?.map(bucket => bucket.name) || [],
      projectUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || '알 수 없는 오류',
        message: '환경 변수가 설정되지 않았거나 연결에 실패했습니다.'
      },
      { status: 500 }
    );
  }
}

