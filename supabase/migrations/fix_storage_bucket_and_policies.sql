-- Supabase Storage 버킷 설정 수정 및 Policies 재생성
-- 버킷명: media
-- 프로젝트 ID: hqpnwiaifysfpbpwixim
-- "File name is invalid" 에러 해결

-- 1. 기존 Policies 삭제 (재생성을 위해)
DROP POLICY IF EXISTS "Public INSERT for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public SELECT for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public UPDATE for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public DELETE for media bucket" ON storage.objects;

-- 2. 버킷 설정 업데이트 (파일명 제한 완화)
-- 파일명에 특수문자 허용, 파일 크기 제한 50MB, 이미지/비디오 MIME 타입 허용
UPDATE storage.buckets
SET 
    file_size_limit = 52428800, -- 50MB (50 * 1024 * 1024)
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
    ]
WHERE name = 'media';

-- 3. INSERT Policy - 파일 업로드 권한 (파일명 검증 완화)
-- 파일명에 한글, 영문, 숫자, 하이픈, 언더스코어, 점, 공백 허용
CREATE POLICY "Public INSERT for media bucket"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
    bucket_id = 'media'
    AND (
        -- 파일명 길이 제한 (255자)
        length((name)::text) <= 255
        -- 파일명에 허용된 문자만 포함 (한글, 영문, 숫자, 하이픈, 언더스코어, 점, 공백)
        AND (name)::text ~ '^[a-zA-Z0-9가-힣._\-\s]+$'
    )
);

-- 4. SELECT Policy - 파일 읽기/다운로드 권한
CREATE POLICY "Public SELECT for media bucket"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'media');

-- 5. UPDATE Policy - 파일 업데이트 권한
CREATE POLICY "Public UPDATE for media bucket"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'media')
WITH CHECK (
    bucket_id = 'media'
    AND (
        length((name)::text) <= 255
        AND (name)::text ~ '^[a-zA-Z0-9가-힣._\-\s]+$'
    )
);

-- 6. DELETE Policy - 파일 삭제 권한
CREATE POLICY "Public DELETE for media bucket"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'media');

-- 7. RLS 활성화 확인 및 활성화 (필요시)
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

