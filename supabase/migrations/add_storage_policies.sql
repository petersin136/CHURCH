-- Supabase Storage Policy 생성
-- 버킷명: media
-- 프로젝트 ID: hqpnwiaifysfpbpwixim
-- 모든 사용자(public)에게 업로드, 읽기, 업데이트, 삭제 권한 부여

-- 기존 Policy가 있으면 삭제 (안전하게 재실행 가능하도록)
DROP POLICY IF EXISTS "Public INSERT for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public SELECT for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public UPDATE for media bucket" ON storage.objects;
DROP POLICY IF EXISTS "Public DELETE for media bucket" ON storage.objects;

-- 1. INSERT Policy - 파일 업로드 권한
CREATE POLICY "Public INSERT for media bucket"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'media');

-- 2. SELECT Policy - 파일 읽기/다운로드 권한
CREATE POLICY "Public SELECT for media bucket"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'media');

-- 3. UPDATE Policy - 파일 업데이트 권한
CREATE POLICY "Public UPDATE for media bucket"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'media')
WITH CHECK (bucket_id = 'media');

-- 4. DELETE Policy - 파일 삭제 권한
CREATE POLICY "Public DELETE for media bucket"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'media');

