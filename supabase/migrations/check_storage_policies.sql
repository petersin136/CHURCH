-- Supabase Storage Policies 조회
-- 버킷명: media
-- 프로젝트 ID: hqpnwiaifysfpbpwixim

-- 1. 현재 Storage Policies 조회
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'objects'
    AND schemaname = 'storage'
ORDER BY policyname;

-- 2. media 버킷에 대한 Policies만 필터링하여 조회
SELECT 
    policyname,
    cmd as operation,
    roles,
    qual as using_expression,
    with_check as with_check_expression
FROM pg_policies
WHERE tablename = 'objects'
    AND schemaname = 'storage'
    AND (qual::text LIKE '%media%' OR with_check::text LIKE '%media%')
ORDER BY policyname;

-- 3. Storage 버킷 정보 조회
SELECT 
    id,
    name,
    public,
    file_size_limit,
    allowed_mime_types,
    created_at,
    updated_at
FROM storage.buckets
WHERE name = 'media';

-- 4. RLS (Row Level Security) 활성화 여부 확인
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables
WHERE schemaname = 'storage'
    AND tablename = 'objects';

