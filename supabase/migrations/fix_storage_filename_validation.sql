-- Supabase Storage 파일명 검증 완화
-- 버킷명: media
-- "File name is invalid" 에러 해결을 위한 파일명 검증 완화

-- 기존 INSERT Policy 삭제
DROP POLICY IF EXISTS "Public INSERT for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public UPDATE for media bucket" ON storage.objects;

-- 파일명 검증을 완화한 INSERT Policy
-- 더 많은 특수문자 허용 (URL 인코딩된 파일명도 허용)
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
        -- 한글, 영문, 숫자, 특수문자(., -, _, 공백, %, +, =, & 등) 허용
        AND (name)::text !~ '[[:cntrl:]]' -- 제어 문자 제외
        AND (name)::text !~ '^\.' -- 점으로 시작하는 파일명 제외 (숨김 파일)
        AND (name)::text !~ '\.\.' -- 상위 디렉토리 참조 제외
    )
);

-- 파일명 검증을 완화한 UPDATE Policy
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

