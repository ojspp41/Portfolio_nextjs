// data/projectData.js
const projectData = [
    // 경력 프로젝트들
    {
        id: "ptkorea-qa-automation",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "PTkorea 대기업 글로벌 QA 자동화 프론트엔드 인턴 (2025.06 ~ )"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "TypeScript | Django | Tailwind | React | Zustand | Python | Jira | Git | AEM"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• 대기업 QA 자동화 플랫폼 개발: DNT(Do Not Translate) 단어 검증으로 'SAMSUNG, AI' 등 브랜드명 번역 오류 자동 검출, 96개국 번역 데이터 일괄 검증 시스템 및 크롤링\n\n• 초기 로딩 시간 65% 단축 (3.7초 → 1.3초): 1,000건 이상의 전체 데이터를 한 번에 렌더링하던 방식을 개선, 페이지 단위로 데이터를 요청하고 표시하여 초기 응답 속도 및 사용자 경험 향상\n\n• 반복적인 Excel 보고서 생성 자동화로 월 10시간의 업무 시간 단축: 수작업으로 15분 이상 소요되던 보고서 제작 프로세스를 Excel.js를 활용하여 자동화\n\n• 폐쇄망(사내) 환경을 위한 데스크톱 애플리케이션 개발: Electron을 활용하여 인트라넷 환경에서 동작하는 독립 실행형(.exe) 앱 개발, 로컬 DB를 탑재하여 데이터 응답성 향상\n\n• 96개국 글로벌 웹사이트 퍼블리싱: Jira 기반 업무 프로세스를 통해 SAMSUNG.COM의 AEM 컴포넌트 개발 및 유지보수 담당"
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 인턴"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "TypeScript" },
                    { id: "2", name: "React" },
                    { id: "3", name: "Zustand" },
                    { id: "4", name: "Tailwind" },
                    { id: "5", name: "Python" },
                    { id: "6", name: "Django" },
                    { id: "7", name: "Electron" },
                    { id: "8", name: "AEM" }
                ]
            },
            gitHub: {
                url: "#"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/ptkorea-qa.png"  // 이미지 파일명 제안
            }
        }
    },
    {
        id: "bucheon-fc",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "부천 FC 프로젝트 - AI 기반 축구 관람 매칭 서비스 (2024.09 ~ 2024.10)"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "React | Recoil | jsQR | Chart.js"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• QR 티켓 인증: jsQR 라이브러리와 Canvas API로 실시간 티켓 스캔 기능 구현, 정규표현식 검증으로 인증 정확도 증가\n\n• 성향 분석 시스템: 6가지 응원 유형을 Chart.js 레이더 차트로 응원 유형 시각화\n\n• 스와이프 UX: 모바일 터치 제스처 기반 매칭 인터페이스로 사용자 참여율 향상\n\n• 실제 서비스 운영: 부천 FC 경기장에서 실 서비스 배포 및 운영 (100명 ~ 1000명 참여)"
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 개발"
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
                url: "#"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/bucheon-fc.png"  // 이미지 파일명 제안
            }
        }
    },
    {
        id: "githru-opensource",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "Githru VSCode Extension - Git 저장소 시각화 분석 도구 오픈소스 기여 (2025.06.21 ~ )"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "TypeScript | Tailwind | React | Zustand | D3.js"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• OSSCA 2025 컨트리뷰션 아카데미 - Githru 프로젝트 참여\n\n• TemporalFilter 컴포넌트 렌더링 성능 최적화 PR 기여 (#812)\n\n• 라인 차트 데이터 처리 로직 최적화를 통해 렌더링 성능을 최대 18.9% 개선하고, 성능 변동성을 93% 감소시켜 안정적인 사용자 경험 제공\n\n• React useMemo를 활용한 데이터 정렬 연산 최적화로 불필요한 리렌더링 제거\n\n• D3.js 차트 컴포넌트의 불필요한 재계산 방지로 대용량 커밋 데이터 처리 성능 향상"
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "오픈소스 컨트리뷰터"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "TypeScript" },
                    { id: "2", name: "React" },
                    { id: "3", name: "Zustand" },
                    { id: "4", name: "Tailwind" },
                    { id: "5", name: "D3.js" }
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
                url: "/assets/githru.png"  // 이미지 파일명 제안
            }
        }
    },

    // 프로젝트들
    {
        id: "ai-festival",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "AI 축제 추천 서비스 (FE 단독 개발) (2025.03 ~ 2025.05)"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "React | TypeScript | Zustand | TanStack Query | SockJS + STOMP | CSS Modules | Styled Components | Kakao Map SDK"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• 초기 렌더링 시간 78% 단축 (14ms → 3ms): Intersection Observer 기반 무한 스크롤 직접 구현 및 React Query 캐싱 전략으로 네트워크 사용량 최적화 및 사용자 경험 개선\n\n• 1:N 실시간 채팅 기능 구현: WebSocket(SockJS, STOMP)을 활용하고, Zustand를 통한 상태 관리로 채팅 유형별(1:1, 그룹) UI/UX 분기 처리 로직 설계\n\n• 지도 기반 데이터 시각화: Kakao Map SDK와 공공데이터 API를 연동하여 실시간 주차 정보를 마커로 시각화하고, useQueries로 병렬 호출하여 로딩 성능 최적화"
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
                    { id: "1", name: "React" },
                    { id: "2", name: "TypeScript" },
                    { id: "3", name: "Zustand" },
                    { id: "4", name: "TanStack Query" },
                    { id: "5", name: "SockJS" },
                    { id: "6", name: "STOMP" },
                    { id: "7", name: "Kakao Map SDK" },
                    { id: "8", name: "CSS Modules" },
                    { id: "9", name: "Styled Components" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/Seoul_Data_Fe-RE-TS-"
            },
            Youtube: {
                url: "https://youtube.com/shorts/ZDS1km9BB_k?si=KI7-pVQ4PTc8RRJN"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/ai-festival.png"  // 이미지 파일명 제안
            }
        }
    },
    {
        id: "comatching-v3,v3.5,v4",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "COMAtching Ver3, Ver 3.5, Ver4 (팀장)"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "React | Recoil | SockJS + STOMP | Docker | Toss Payments SDK"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• 프론트엔드 CI/CD 환경 구축: Docker와 Jenkins 기반의 배포 자동화 파이프라인을 설계하여 빌드 및 배포 속도와 운영 효율성 증대\n\n• 토스페이먼츠 결제 시스템 도입: TossPayments SDK를 연동하고 Idempotency-Key를 활용하여 중복 결제를 방지하는 등 안정적인 결제 시스템 설계 및 구현\n\n• 프로젝트 상용화 및 성과 창출: Vercel 배포 및 실제 운영을 통해 약 800명의 사용자 유치 및 350만 원의 매출을 달성"
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
                    { id: "2", name: "Recoil" },
                    { id: "3", name: "SockJS" },
                    { id: "4", name: "STOMP" },
                    { id: "5", name: "Docker" },
                    { id: "6", name: "Toss Payments SDK" }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/COMAtching_FE_Ver3"
            },
            Youtube: {
                url: "https://www.youtube.com/watch?v=jDAygPgQty0&t=59s"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/comatching.png"  // 이미지 파일명 제안
            }
        }
    },
    {
        id: "auction-platform",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "실시간 경매 플랫폼 (프론트엔드)"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "Next.js (App Router) | Zustand | WebSocket | Chart.js | Vercel"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• Next.js 렌더링 전략 최적화: 페이지 특성에 맞춰 ISR, SSR, CSR 적용하여 초기 로딩 속도, SEO, 실시간 상호작용 적용\n\n• 실시간 경매 기능 구현: WebSocket과 Chart.js를 활용하여 끊김 없는 실시간 입찰 및 데이터 시각화 기능을 구현하며 사용자 몰입감 향상"
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 개발"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    { id: "1", name: "Next.js" },
                    { id: "2", name: "Zustand" },
                    { id: "3", name: "WebSocket" },
                    { id: "4", name: "Chart.js" },
                    { id: "5", name: "Vercel" }
                ]
            },
            gitHub: {
                url: "#"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/auction-platform.png"  // 이미지 파일명 제안
            }
        }
    },
    {
        id: "lunch-matching",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "점심 친구 매칭 서비스 (풀스택) (2025.02 ~ 2025.04)"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "React | Recoil | Node.js | MongoDB | Passport | Vercel | Render"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• 풀스택 설계 및 개발: Node.js, MongoDB 기반으로 JWT 인증, 동적 사용자 라우팅, Mongoose 복합 쿼리를 활용한 지능형 매칭 로직 등 백엔드 시스템 직접 설계 및 구현\n\n• 실사용자 대상 서비스 상용화: 기획부터 개발, 배포(Vercel, Render)까지 전 과정을 주도하여 실제 사용자 300명이 사용하는 서비스를 성공적으로 운영"
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "풀스택 개발"
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
                    { id: "6", name: "Vercel" },
                    { id: "7", name: "Render" }
                ]
            },
            gitHub: {
                url: "#"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/lunch-matching.png"  // 이미지 파일명 제안
            }
        }
    },
    {
        id: "cs-department-site",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "컴퓨터공학과 공식 사이트 (팀장) (2025.01 ~ 2025.03)"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "React | Zustand | TanStack Query | React Calendar"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• TanStack Query 기반 성능 최적화: staleTime 캐싱 전략으로 API 호출 수를 약 30% 감소시켜 서버 부하를 줄이고, invalidateQueries로 데이터 정합성 확보\n\n• Zustand를 통한 전역 상태 관리: Prop Drilling 문제를 해결하고, persist 미들웨어를 활용하여 UI 상태를 유지함으로써 코드 유지보수성 및 사용자 경험 일관성 확보"
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
                    { id: "2", name: "Zustand" },
                    { id: "3", name: "TanStack Query" },
                    { id: "4", name: "React Calendar" }
                ]
            },
            gitHub: {
                url: "#"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/cs-department.png"  // 이미지 파일명 제안
            }
        }
    },
    {
        id: "ai-print-defect",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "AI 기반 인쇄 불량 검출 모델 개발 (AI 모델 개발) (2024.09 ~ 2024.10)"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "Python | TensorFlow | Keras | MobileNetV2"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "• CNN 모델 성능 5배 향상: MobileNetV2 전이 학습을 적용하여 실리콘 실란트 인쇄 불량 검출 모델의 테스트 정확도를 10.4%에서 52.5%로 개선\n\n• 산업 현장 문제 해결: 기업과의 협업을 통해 실제 제조 공정에서 발생하는 문제를 AI 기술로 해결하는 실무 경험 습득"
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "AI 모델 개발"
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
                url: "#"
            },
            Youtube: {
                url: ""
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/ai-print-defect.png"  // 이미지 파일명 제안
            }
        }
    }
];

export default projectData;