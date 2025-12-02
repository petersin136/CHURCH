# Supabase 마이그레이션 가이드

## 실행 순서

### 1. 기본 설정 (권장)
**파일**: `01_setup_media_bucket.sql`
- media 버킷 생성 및 설정
- Public Policy 설정 (모든 사용자 접근 가능)
- 파일명 검증 완화

**실행 방법:**
1. Supabase Dashboard → SQL Editor
2. `01_setup_media_bucket.sql` 파일 내용 복사
3. 붙여넣기 후 RUN 클릭

### 2. 기존 파일들 (참고용)

- `add_storage_policies.sql` - 기본 Public Policy (간단한 버전)
- `fix_storage_bucket_and_policies.sql` - 버킷 설정 수정 + Policy
- `fix_storage_filename_validation.sql` - 파일명 검증 완화
- `check_storage_policies.sql` - Policy 확인용 쿼리

### 3. 확인

**파일**: `check_storage_policies.sql`
- 실행 후 Policy가 제대로 생성되었는지 확인

## 주의사항

⚠️ 현재 설정은 모든 사용자(public)에게 완전한 접근 권한을 부여합니다.
프로덕션 환경에서는 보안을 고려하여 인증된 사용자에게만 권한을 부여하는 Policy로 변경하는 것을 권장합니다.

