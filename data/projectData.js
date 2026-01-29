// data/projectData.js
const projectData = [
    // 1. 한솔그룹 AI 아틀라스 - LLM 서비스 (신규 - 핵심 경력)
    {
        id: "hansol-ai-atlas",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "한솔그룹 AI 아틀라스 - 사내 LLM 서비스"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "13개 계열사·1만 명 규모 LLM 서비스 프론트엔드 총괄 및 런칭"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[주요 성과] 5년 차 시니어 포지션 대체 및 서비스 리딩
• 사수 이탈 상황에서 입사 2개월 만에 13개 계열사·1만 명 규모 서비스의 기획-개발-테스트-운영 전 과정을 주도하여 성공적 런칭

[LLM 스트리밍 렌더링 최적화]
• 초당 50+ 토큰 유입 시 병목 현상 해결을 위해 3ms 단위 큐 배칭(Queue Batching) 도입
• 레이아웃 계산 비용 86% 절감 및 60fps 성능 확보
• CPU 사용량 85%에서 35%로 대폭 개선

[메모리 최적화 - 전역 상태와 View 분리]
• 데이터 수집과 화면 렌더링의 생명주기를 분리하는 3단계 Cleanup 시스템 구현
• isMounted Ref 패턴으로 Race Condition 차단
• 장시간 서비스 구동 시 메모리 누수 100% 해결

[스마트 툴팁 (OverflowTooltip) 모듈 개발]
• scrollWidth/clientWidth 비교로 조건부 감지, 300ms Debounce 적용
• 초기 렌더링 시 불필요한 DOM Reflow 원천 차단으로 60fps 렌더링 성능 방어

[점진적 마크다운 파서 개발]
• 실시간 정규표현식 보정 로직으로 미완성 마크다운 문법 자동 보정
• Jest 기반 TDD 도입, 15개 이상 엣지 케이스 테스트로 무결성 보장
• Layout Shift 현상 100% 제거

[Dockerfile 고도화]
• 컨테이너 이미지 용량 85% 감축 (1.2GB → 180MB)
• K8s Pod 기동 시간 82% 단축 (45초 → 8초)
• 환경변수 누락에 의한 배포 사고 0건 달성`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 총괄 (On-Premise)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "Next.js 15" },
                    { id: "2", name: "React 19" },
                    { id: "3", name: "TypeScript" },
                    { id: "4", name: "Zustand" },
                    { id: "5", name: "WebSocket" },
                    { id: "6", name: "Docker" },
                    { id: "7", name: "TanStack Query" },
                    { id: "8", name: "Playwright" },
                    { id: "9", name: "Jest" }
                ]
            },
            gitHub: {
                url: ""
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/hansol.jpg"
            }
        }
    },
    // 2. 삼성닷컴 QA 자동화 프로젝트 (신규)
    {
        id: "samsung-qa-automation",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "삼성닷컴 글로벌 웹사이트 QA 자동화 플랫폼"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "96개국 번역 데이터 검증 시스템 및 QA 자동화 개발"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[DNT(Do Not Translate) 검증 시스템]
• 'SAMSUNG', 'AI' 등 브랜드명 번역 오류 자동 검출
• 96개국 번역 데이터 일괄 검증 시스템 및 크롤링 구현

[성능 개선]
• 데이터 요청 방식 개선(전체→페이지 단위)으로 초기 로딩 시간 65% 단축 (3.7초 → 1.3초)

[업무 자동화]
• DNT 검증 시스템 및 Excel 보고서 생성 자동화로 월 10시간 이상 수작업 시간 절감

[사내 앱 개발]
• 폐쇄망 환경을 위한 Electron 기반 독립 실행형(.exe) 애플리케이션 개발

[글로벌 퍼블리싱]
• 96개국 AEM 컴포넌트 개발 및 유지보수
• Jira 기반 QA 프로세스 경험`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 개발 인턴 (25.06 ~ 25.09)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "TypeScript" },
                    { id: "2", name: "React" },
                    { id: "3", name: "Django" },
                    { id: "4", name: "Tailwind CSS" },
                    { id: "5", name: "Zustand" },
                    { id: "6", name: "Python" },
                    { id: "7", name: "AEM" },
                    { id: "8", name: "Electron" }
                ]
            },
            gitHub: {
                url: ""
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/ptkorea.jpg"
            }
        }
    },
    // 3. Githru VSCode Extension - 오픈소스 기여
    {
        id: "githru-vscode",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "Githru VSCode Extension - Git 저장소 시각화 분석 도구"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "OSSCA 2025 컨트리뷰션 아카데미 우수상 (과학기술정보통신부 장관상)"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[오픈소스 기여 - PR #812]
• TemporalFilter 컴포넌트 렌더링 성능 최적화 기여

[성능 개선 성과]
• 라인 차트 데이터 처리 로직 최적화를 통해 렌더링 성능 최대 18.9% 개선
• 성능 변동성 93% 감소시켜 안정적인 사용자 경험 제공
• D3.js 차트 컴포넌트의 불필요한 재계산 방지로 대용량 커밋 데이터 처리 성능 향상

[수상]
• 2025 오픈소스 컨트리뷰션 아카데미 우수상 - GITHRU 프로젝트
• 과학기술정보통신부 장관상 수상`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "오픈소스 컨트리뷰터 (25.06 ~)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "TypeScript" },
                    { id: "2", name: "React" },
                    { id: "3", name: "Zustand" },
                    { id: "4", name: "D3.js" },
                    { id: "5", name: "Tailwind CSS" }
                ]
            },
            gitHub: {
                url: "https://github.com/githru/githru-vscode-ext"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/githru.png"
            }
        }
    },
    // 4. Favus - S3 대용량 파일 멀티파트 업로드 도구
    {
        id: "favus-s3-upload",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "Favus - AWS S3 대용량 파일 멀티파트 업로드 최적화 솔루션"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "2025 오픈소스 개발자 대회 우수작 (직장인 부문)"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[프로젝트 배경]
• AWS S3 대용량 파일 전송 중단 및 비용 누수 문제 해결

[멀티파트 업로드 안정성 혁신]
• Go 기반 병렬 청킹 시스템과 상태 저장 메커니즘 구현
• 네트워크 중단 시에도 자동 재개 가능한 업로드 시스템 개발
• 대용량 파일 전송 실패율 90% 감소

[실시간 모니터링 시스템]
• WebSocket 기반 3계층 통신 아키텍처 설계 (CLI → Python Server → React UI)
• 업로드 진행률과 파트별 상태를 실시간 시각화
• 운영 투명성 확보

[수상]
• 2025 오픈소스 개발자 대회 우수작 (직장인 부문)`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "팀장 / 프론트엔드 개발 (25.06 ~ 25.09)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "Go" },
                    { id: "2", name: "Next.js" },
                    { id: "3", name: "React" },
                    { id: "4", name: "Python" },
                    { id: "5", name: "WebSocket" },
                    { id: "6", name: "AWS S3" }
                ]
            },
            gitHub: {
                url: ""
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/portfolio.png"
            }
        }
    },
    // 5. AI 축제 추천 서비스
    {
        id: "ai-festival",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "AI 축제 추천 서비스"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "공공데이터 활용 서울시 축제 추천 및 실시간 커뮤니티 플랫폼"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[초기 렌더링 성능 최적화]
• 초기 렌더링 시간 78% 단축 (14ms → 3ms)
• Intersection Observer 기반 무한 스크롤 직접 구현
• React Query 캐싱 전략(staleTime 4시간)으로 불필요한 API 재요청 방지

[1:N 실시간 채팅 기능]
• WebSocket(SockJS, STOMP)을 활용한 실시간 채팅 구현
• Zustand를 통한 상태 관리로 채팅 유형별(1:1, 그룹) UI/UX 분기 처리 로직 설계

[지도 기반 데이터 시각화]
• Kakao Map SDK와 공공데이터 API 연동
• 실시간 주차 정보를 마커로 시각화
• useQueries로 병렬 호출하여 로딩 성능 최적화

[서울 공공데이터 공모전 출품작 (예선)]`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 단독 개발 (25.03 ~ 25.05)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "React" },
                    { id: "2", name: "TypeScript" },
                    { id: "3", name: "Zustand" },
                    { id: "4", name: "TanStack Query" },
                    { id: "5", name: "SockJS" },
                    { id: "6", name: "STOMP" },
                    { id: "7", name: "Kakao Map SDK" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/Seoul_Data_Fe-RE-TS-"
            },
            Youtube: {
                url: "https://youtube.com/shorts/ZDS1km9BB_k"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/festival.png"
            }
        }
    },
    // 6. COMAtching Ver4
    {
        id: "comatching-v4",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "COMAtching Ver3/Ver4 - AI 기반 커플 매칭 플랫폼"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "2년간 누적 사용자 2,000명, 매출 800만 원 달성 상용화 서비스"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[서비스 상용화 성과]
• 팀장으로 풀스택 설계 기획·개발·운영 주도
• 2년간 누적 사용자 2,000명 달성
• 총 매출 800만 원 달성

[결제 시스템 구축]
• Toss Payments SDK 연동
• Idempotency-Key 적용으로 중복 결제 방지 시스템 구축
• MainPaymentModal/PaymentSecondModal UI 흐름 설계

[개발 효율화]
• Docker/Jenkins CI/CD 파이프라인 구축
• Node.js 기반 백엔드 매칭 로직 직접 설계

[실시간 기능]
• SockJS와 Stomp.js 기반 WebSocket 통신 구축
• 충전 요청, 승인, 취소 내역 즉시 반영

[UX 개선]
• 슬라이더 UI(밀어서 커플되기) 직접 구현
• 인앱 브라우저 감지 및 외부 리디렉션 로직으로 서비스 안정성 확보`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "팀장 / 프론트엔드 개발 (23.06 ~ 25.05)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "React" },
                    { id: "2", name: "Recoil" },
                    { id: "3", name: "SockJS" },
                    { id: "4", name: "STOMP" },
                    { id: "5", name: "Docker" },
                    { id: "6", name: "Toss Payments" },
                    { id: "7", name: "Node.js" },
                    { id: "8", name: "MongoDB" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/COMAtching4_FE"
            },
            Youtube: {
                url: "https://youtube.com/shorts/162_NbnTIWE"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/comatchingv3.png"
            }
        }
    },
    // 7. 부천 FC 응원 매칭 서비스
    {
        id: "comatching-fc",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "COMAtching FC - 부천 FC AI 기반 축구 관람 매칭 서비스"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "부천 FC 경기장 실 서비스 배포 및 운영 (700명 참여)"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[실제 서비스 운영]
• 부천 FC 경기장에서 실 서비스 배포 및 운영
• 700명 참여 달성

[성향 분석 시스템]
• 6가지 응원 유형을 Chart.js 레이더 차트로 시각화
• 유형 기반 AI 분석 결과 시각화

[현장 인증 시스템]
• jsQR 라이브러리를 활용한 실시간 QR 코드 인식 시스템 개발
• <canvas> 기반 영상 스트림 처리 및 티켓 코드 유효성 검사

[인터랙션 UI]
• 드래그 기반 직관적인 친구 매칭 UI 구현
• 멀티 스텝 사용자 등록 플로우 설계`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 (2인 공동 개발) (24.09 ~ 24.10)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "React" },
                    { id: "2", name: "Recoil" },
                    { id: "3", name: "jsQR" },
                    { id: "4", name: "Chart.js" }
                ]
            },
            gitHub: {
                url: "https://github.com/COMAtching/COMATCHING_FC_FE"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/comatchingfc.png"
            }
        }
    },
    // 8. Nyaong - 블록체인 기반 보안 메신저
    {
        id: "nyaong-blockchain",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "Nyaong - 블록체인 기반 보안 메신저"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "Web3j와 스마트 컨트랙트를 활용한 메시지 무결성 시스템"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[블록체인 기반 메시지 무결성 시스템]
• Web3j와 스마트 컨트랙트를 활용한 메시지 위변조 방지 시스템 개발
• 전자서명 인증 시스템으로 공공기관 수준의 보안성 확보

[실시간 채팅 아키텍처]
• 분산 노드 시스템(Node-to-Node)과 WebSocket 기반 실시간 통신 구현
• 안정적인 메시지 동기화 및 자동 새로고침 기능 개발`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "개발 (24.09 ~ 24.12)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "Java" },
                    { id: "2", name: "JavaFX" },
                    { id: "3", name: "Web3j" },
                    { id: "4", name: "Ethereum" },
                    { id: "5", name: "MySQL" }
                ]
            },
            gitHub: {
                url: ""
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/portfolio.png"
            }
        }
    },
    // 9. CATSPOT - 빈 강의실/도서관 좌석 탐색
    {
        id: "catspot",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "CATSPOT - 실시간 빈 강의실/도서관 좌석 탐색 웹앱"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "GGUM 교내 해커톤 우수상 - 도서관 좌석 및 빈 강의실 시각화 서비스"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[프로젝트 소개]
• 가톨릭대학교 도서관 좌석 및 빈 강의실 현황 시각화 및 예약 알림 서비스
• GGUM 교내 해커톤 우수상 수상

[UI/UX 구현]
• CSS ::before, ::after와 애니메이션을 조합하여 층별 강의실 시각화 UI 구현
• 계단 애니메이션으로 층별 이동을 자연스럽게 표현

[상태 관리]
• 로컬 스토리지를 활용해 사용자 상태(currentFloor, currentIndex) 유지
• 새로고침 이후에도 동일한 사용 경험 제공

[시간 동기화]
• Date 객체와 toLocaleString을 활용한 Asia/Seoul 기준 시간 동기화 유틸 함수 구현
• 예약 및 좌석 현황 요청 시 데이터 정합성 보장`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 팀장"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "React" },
                    { id: "2", name: "TypeScript" },
                    { id: "3", name: "Recoil" },
                    { id: "4", name: "CSS" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/Catspot_front"
            },
            Youtube: {
                url: "https://youtube.com/shorts/ZDS1km9BB_k"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/catspot.png"
            }
        }
    },
    // 10. AI 인쇄 불량 검출 모델
    {
        id: "sealant-ai",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "AI 기반 인쇄 불량 검출 모델"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "MobileNetV2 전이 학습으로 CNN 모델 성능 5배 향상"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[CNN 모델 성능 5배 향상]
• MobileNetV2 전이 학습을 적용하여 실리콘 실란트 인쇄 불량 검출 모델 개발
• 테스트 정확도 10.4%에서 52.5%로 개선 (5배 향상)

[산업 현장 문제 해결]
• 기업과의 협업을 통해 실제 제조 공정에서 발생하는 문제를 AI 기술로 해결
• 클래스 불균형 대응, 시각화, 평가 지표 코드 직접 구현`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "AI 모델 개발 (24.09 ~ 24.10)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "Python" },
                    { id: "2", name: "TensorFlow" },
                    { id: "3", name: "Keras" },
                    { id: "4", name: "MobileNetV2" }
                ]
            },
            gitHub: {
                url: ""
            },
            Youtube: {
                url: "https://1drv.ms/b/c/53a8aef9ed6672a3/EcgAKgdZCIFOuqBn2FDKT-0BwdadxxuhZc28BcifczWxng?e=X10aca"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/sealant.png"
            }
        }
    },
    // 11. 에코마켓
    {
        id: "eco-market",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "에코마켓 - 업사이클링 중고 거래 웹앱"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "실시간 경매 기반의 친환경 중고 거래 플랫폼"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[실시간 경매 시스템]
• SockJS와 STOMP.js를 활용한 WebSocket 기반 양방향 실시간 통신 구조 설계
• 경매 상품별 채널 구독을 통해 최고 입찰가, 입찰자 수, 입찰 내역 실시간 반영

[데이터 시각화]
• Chart.js와 react-chartjs-2를 활용하여 실시간 거래량 데이터를 Bar Chart 형태로 시각화
• 사용자 맞춤형 툴팁과 축 스타일 적용

[복합 폼 데이터 처리]
• multipart/form-data 요청으로 이미지 파일과 JSON 데이터 동시 전송
• DTO를 Blob으로 감싸는 방식으로 클라이언트-서버 간 데이터 파싱 정확도 향상`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 (2인 공동 개발)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "React" },
                    { id: "2", name: "styled-components" },
                    { id: "3", name: "Chart.js" },
                    { id: "4", name: "SockJS" },
                    { id: "5", name: "STOMP" },
                    { id: "6", name: "Redux" }
                ]
            },
            gitHub: {
                url: "https://github.com/EcoMarket-CUK/EcoMarket_Front"
            },
            Youtube: {
                url: "https://www.youtube.com/watch?v=CN5CtII1nvI"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/ecomarket.png"
            }
        }
    },
    // 12. 컴공사이트
    {
        id: "comp-sci-site",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "컴공사이트 - 학과 통합 웹앱"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "회의실 예약과 공지사항 관리 기능 중심의 컴공 학과 전용 웹앱"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[프로젝트 소개]
• 가톨릭대학교 컴퓨터 공학과 회의실 예약 웹앱
• 회의실 예약, 공지사항 관리, FAQ, 학교 지도, 오픈채팅방 문의 기능 통합

[기술 스택]
• React, Vite를 사용하여 빠르고 최적화된 개발 환경 제공
• Zustand와 Recoil을 사용하여 직관적이고 단순한 상태 관리 구현
• React Query를 사용하여 효율적인 API 요청과 상태 관리 지원
• React Router DOM을 활용하여 페이지 내 네비게이션 처리`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 (팀장, 2인 팀)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "React" },
                    { id: "2", name: "Zustand" },
                    { id: "3", name: "React Query" },
                    { id: "4", name: "React Router DOM" },
                    { id: "5", name: "Lottie" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/Meeting_Room"
            },
            Youtube: {
                url: "https://www.youtube.com/watch?v=CN5CtII1nvI"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/meetingroom.png"
            }
        }
    },
    // 13. COLUNCH
    {
        id: "colunch",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "COLUNCH - 밥 친구 매칭 서비스"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "카카오 로그인과 매칭 로직을 구현한 풀스택 개인 프로젝트"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[풀스택 개발]
• React와 Node.js를 사용해 프론트엔드와 백엔드 모두 단독 개발

[인증 시스템]
• Kakao OAuth와 Passport를 연동해 소셜 로그인 기능 구현
• Access Token을 통한 사용자 인증과 세션 관리 처리

[성과]
• OAuth 인증 플로우와 토큰 기반 인증 시스템 전반 이해
• API 설계부터 서버 배포까지 백엔드 개발 주도적 진행`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 + 백엔드 (개인 개발)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "React" },
                    { id: "2", name: "Recoil" },
                    { id: "3", name: "Node.js" },
                    { id: "4", name: "MongoDB" },
                    { id: "5", name: "Passport" },
                    { id: "6", name: "OAuth" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/Colunch"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/colunch.png"
            }
        }
    },
    // 14. 포트폴리오 웹사이트
    {
        id: "portfolio-site",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "포트폴리오 웹사이트"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "Next.js 기반 개인 포트폴리오 웹사이트"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: `[기술 스택]
• Next.js 기반 서버사이드 렌더링(SSR)으로 초기 로딩 속도 및 SEO 최적화
• Lottie 애니메이션 라이브러리로 동적인 시각적 요소 추가

[다크 모드 지원]
• useState와 useEffect를 사용하여 다크/라이트 모드 전환 상태 관리
• 버튼 클릭 시 모드 전환 가능

[배포]
• Vercel을 통한 실서비스 배포 및 운영`
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 단독 개발"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "Next.js" },
                    { id: "2", name: "Tailwind CSS" },
                    { id: "3", name: "Lottie" },
                    { id: "4", name: "Vercel" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/Portfolio_nextjs"
            },
            Youtube: {
                url: "https://www.youtube.com/watch?v=jDAygPgQty0"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/portfolio.png"
            }
        }
    }
];

export default projectData;
