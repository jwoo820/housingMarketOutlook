# Vercel 배포 가이드 (Next.js)

## 1) 사전 준비
- Node.js 20 이상 설치
- npm 또는 pnpm 설치
- GitHub 원격 저장소 연결

## 2) 로컬 검증
```bash
npm install
npm run build
npm run start
```

## 3) Vercel 배포
1. Vercel 대시보드에서 New Project 클릭
2. 이 저장소 Import
3. Framework Preset: Next.js 확인
4. Deploy 클릭

## 4) 보안 헤더 확인
브라우저 개발자도구 Network 탭에서 응답 헤더 확인:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security
- Content-Security-Policy
