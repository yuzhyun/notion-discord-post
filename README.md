# notion-discord-post
노션에 디스코드 메시지를 적어두시면, 시간에 맞춰 디스코드 채널에 해당 메시지를 보내드립니다.

# 사용법
1. [노션 API 통합을 생성하여 API 토큰 얻기](https://www.notion.so/ko/help/create-integrations-with-the-notion-api)
2. [링크](https://instinctive-iron-d62.notion.site/notion-discord-post-46f37636879b45379693dc6757334f0d)로 이동해서 노션 페이지를 워크스페이스로 복제하기
3. [복제한 노션 페이지와 API 통합을 연결하기](https://www.notion.so/ko/help/add-and-manage-connections-with-the-api#%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90-%EC%97%B0%EA%B2%B0-%EC%B6%94%EA%B0%80)
4. 공지 발송 노션 데이터베이스 링크 얻기(보기 링크 복사)
5. [메시지를 보낼 디스코드 채널에 웹훅을 생성하고 웹훅 URL 얻기](https://support.discord.com/hc/ko/articles/228383668-%EC%9B%B9%ED%9B%85%EC%9D%84-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4)
6. 관리 데이터베이스에 4.에서 얻은 링크, 5.에서 얻은 웹훅 URL을 붙혀넣기
7. 관리 데이터베이스 보기 링크를 복사하기
8. 레포지토리를 포크하고 **Settings > Security > Secrets and variable> Actions**에 노션 API 토큰, 노션 데이터베이스 ID, 웹훅 URL을 저장하기(노션 API 토큰 : `NOTION_TOKEN`, 관리(링크)데이터베이스 	링크 주소 : `LINK_DATABASE_URL`의 이름으로)
9. Actions 탭에 가서 Github Actions 활성화하고, 노션 페이지로 이동해서 메시지 예약하기

자세한 사용법은 [여기](https://instinctive-iron-d62.notion.site/notion-discord-post-46f37636879b45379693dc6757334f0d)에서 확인하실 수 있습니다!
# 단독실행
0. 환경변수 설정(노션 API 토큰 : `NOTION_TOKEN`, 관리(링크)데이터베이스 	링크 주소 : `LINK_DATABASE_URL`)
1. 의존성 설치
```shell
npm install
```
2. 타입스크립트 파일 컴파일 및 실행
```shell
npx tsc && node app.js
```

# 기여
있으면 좋을 것 같은 기능이 있으시거나, 오류 및 문제를 찾으셨다면
Issue로 추가해주세요~!

