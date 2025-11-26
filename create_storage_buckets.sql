-- 미디어 스토리지 버킷 생성

-- 1. 포트폴리오 이미지 버킷
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'portfolios',
  'portfolios',
  true,
  52428800, -- 50MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- 2. 블로그 이미지 버킷
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'posts',
  'posts',
  true,
  52428800, -- 50MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- 3. 영상 버킷
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  524288000, -- 500MB
  ARRAY['video/mp4', 'video/webm', 'video/quicktime']
)
ON CONFLICT (id) DO NOTHING;

-- 4. 일반 미디어 버킷
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media',
  'media',
  true,
  104857600, -- 100MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm']
)
ON CONFLICT (id) DO NOTHING;

-- Storage 정책 설정

-- 포트폴리오 버킷 정책
CREATE POLICY "포트폴리오 이미지 공개 조회" ON storage.objects
  FOR SELECT USING (bucket_id = 'portfolios');

CREATE POLICY "관리자만 포트폴리오 업로드" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'portfolios' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 포트폴리오 수정" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'portfolios' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 포트폴리오 삭제" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'portfolios' 
    AND auth.role() = 'authenticated'
  );

-- 블로그 버킷 정책
CREATE POLICY "블로그 이미지 공개 조회" ON storage.objects
  FOR SELECT USING (bucket_id = 'posts');

CREATE POLICY "관리자만 블로그 업로드" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'posts' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 블로그 수정" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'posts' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 블로그 삭제" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'posts' 
    AND auth.role() = 'authenticated'
  );

-- 영상 버킷 정책
CREATE POLICY "영상 공개 조회" ON storage.objects
  FOR SELECT USING (bucket_id = 'videos');

CREATE POLICY "관리자만 영상 업로드" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'videos' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 영상 수정" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'videos' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 영상 삭제" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'videos' 
    AND auth.role() = 'authenticated'
  );

-- 일반 미디어 버킷 정책
CREATE POLICY "미디어 공개 조회" ON storage.objects
  FOR SELECT USING (bucket_id = 'media');

CREATE POLICY "관리자만 미디어 업로드" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'media' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 미디어 수정" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'media' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "관리자만 미디어 삭제" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'media' 
    AND auth.role() = 'authenticated'
  );
