# CHURCH

교회 홈페이지 전문 제작 - 마케팅 웹사이트

Next.js + TypeScript + Tailwind CSS + Supabase 기반 마케팅 웹사이트

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database & Storage**: Supabase
- **Deployment**: Vercel

## 프로젝트 정보

- **프로젝트 ID**: hqpnwiaifysfpbpwixim
- **Storage 버킷**: media
- **버킷 설정**: Public, 50MB 제한, video/image 파일 허용

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## Supabase Storage Policy 설정

Storage 버킷 'media'에 파일 업로드가 400 에러로 실패하는 경우, Storage Policy가 설정되지 않았을 수 있습니다.

### SQL 실행 방법

1. **Supabase Dashboard 접속**
   - [Supabase Dashboard](https://supabase.com/dashboard)에 로그인
   - 프로젝트 `hqpnwiaifysfpbpwixim` 선택

2. **SQL Editor 열기**
   - 좌측 메뉴에서 **SQL Editor** 클릭
   - **New query** 버튼 클릭

3. **SQL 파일 내용 복사 및 실행**
   - `supabase/migrations/add_storage_policies.sql` 파일의 내용을 복사
   - SQL Editor에 붙여넣기
   - **RUN** 버튼 클릭하여 실행

4. **정책 확인**
   - 좌측 메뉴에서 **Storage** → **Policies** 클릭
   - `media` 버킷에 다음 정책이 생성되었는지 확인:
     - `Public INSERT for media bucket`
     - `Public SELECT for media bucket`
     - `Public UPDATE for media bucket`
     - `Public DELETE for media bucket`

### 설정되는 Policy

- **INSERT**: 모든 사용자가 파일 업로드 가능
- **SELECT**: 모든 사용자가 파일 읽기/다운로드 가능
- **UPDATE**: 모든 사용자가 파일 업데이트 가능
- **DELETE**: 모든 사용자가 파일 삭제 가능

### 주의사항

⚠️ 이 Policy는 모든 사용자(public)에게 완전한 접근 권한을 부여합니다. 
프로덕션 환경에서는 보안을 고려하여 인증된 사용자에게만 권한을 부여하는 Policy로 변경하는 것을 권장합니다.

## 환경 변수 설정

`.env.local` 파일 생성 및 다음 환경 변수 설정:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 배포

Vercel을 통한 배포:

1. GitHub에 프로젝트 푸시
2. [Vercel Dashboard](https://vercel.com/dashboard)에서 프로젝트 Import
3. 환경 변수 설정
4. Deploy

## 라이선스

Private

