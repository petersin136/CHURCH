-- ============================================
-- Supabase Storage 버킷 및 Policy 설정
-- 프로젝트 ID: hqpnwiaifysfpbpwixim
-- 버킷명: media
-- ============================================

-- 1. media 버킷 생성 (이미 있으면 무시)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media',
  'media',
  true,
  52428800, -- 50MB
  ARRAY[
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'video/mp4',
    'video/mpeg',
    'video/quicktime',
    'video/x-msvideo',
    'video/webm',
    'application/pdf'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  file_size_limit = 52428800,
  allowed_mime_types = ARRAY[
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'video/mp4',
    'video/mpeg',
    'video/quicktime',
    'video/x-msvideo',
    'video/webm',
    'application/pdf'
  ];

-- 2. 기존 Policies 삭제 (재생성을 위해)
DROP POLICY IF EXISTS "Public INSERT for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public SELECT for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public UPDATE for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public DELETE for media bucket" ON storage.objects;

-- 3. RLS 활성화
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 4. INSERT Policy - 파일 업로드 권한 (파일명 검증 완화)
CREATE POLICY "Public INSERT for media bucket"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
    bucket_id = 'media'
    AND (
        -- 파일명 길이 제한 (255자)
        length((name)::text) <= 255
        -- 파일명이 비어있지 않음
        AND length((name)::text) > 0
        -- 기본적인 파일명 검증 (대부분의 문자 허용, 단 제어 문자 제외)
        AND (name)::text !~ '[[:cntrl:]]' -- 제어 문자 제외
        AND (name)::text !~ '^\.' -- 점으로 시작하는 파일명 제외 (숨김 파일)
        AND (name)::text !~ '\.\.' -- 상위 디렉토리 참조 제외
    )
);

-- 5. SELECT Policy - 파일 읽기/다운로드 권한
CREATE POLICY "Public SELECT for media bucket"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'media');

-- 6. UPDATE Policy - 파일 업데이트 권한
CREATE POLICY "Public UPDATE for media bucket"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'media')
WITH CHECK (
    bucket_id = 'media'
    AND (
        length((name)::text) <= 255
        AND length((name)::text) > 0
        AND (name)::text !~ '[[:cntrl:]]'
        AND (name)::text !~ '^\.'
        AND (name)::text !~ '\.\.'
    )
);

-- 7. DELETE Policy - 파일 삭제 권한
CREATE POLICY "Public DELETE for media bucket"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'media');

