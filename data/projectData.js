// data/projectData.ts
const projectData = [
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
                        plain_text: "공공데이터를 활용한 서울시 축제 추천 및 실시간 기능 웹앱"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "서울시 문화 공공데이터를 기반으로 다양한 축제를 소개하고, 축제를 같이 즐길 수 있게 만드는 웹 애플리케이션입니다. 사용자는 지역 기반의 주" +
                            "차장 정보, AI 기반 축제 추천, 리뷰 및 댓글, 실시간 채팅, 스크랩, 마이페이지 관리 등 다양한 기능을 통해 서울의 문화를 쉽고 즐겁게" +
                            " 탐색할 수 있습니다. 전체 라우팅 설계부터 WebSocket 기반 실시간 기능, Kakao 지도 시각화까지 TypeScript를 활용한 프" +
                            "론트엔드 개발 경험을 강화한 프로젝트입니다."
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
                    {
                        id: "1",
                        name: "React"
                    }, {
                        id: "2",
                        name: "TypeScript"
                    }, {
                        id: "3",
                        name: "Zustand"
                    }, {
                        id: "4",
                        name: "React Query"
                    }, {
                        id: "9",
                        name: "Kakao Map SDK"
                    }, {
                        id: "10",
                        name: "공공데이터포털 API"
                    }
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
                url: "/assets/festival.png"
            }
        }
    }, {
        id: "colunch",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "COLUNCH – 밥 친구 매칭 서비스"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "카카오 로그인과 매칭 로직을 구현한 실전형 개인 매칭 서비스"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "동아리 활동 중 진행하던 AI 프로젝트의 완성이 지연되면서, 동아리 축제를 위해 새로운 프로젝트인 ‘코런치’를 기획하게 되었습니다. 이번 프로젝트에서는 프론트엔드뿐만 아니라 백엔드 개발도 직접 경험해보고자 React와 Node.js를 사용해 처음부터 끝까지 혼자 개발을 진행했습니다.백엔드에서는 Node.js로 서버를 구축하고, Kakao OAuth와 Passport를 연동해 소셜 로그인 기능을 구현했습니다. Access Token을 통해 사용자 인증과 세션 관리를 처리하며 OAuth 인증 플로우와 토큰 기반 인증 시스템 전반을 이해할 수 있었습니다. API 설계부터 서버 배포까지 백엔드 개발을 주도적으로 진행하며, 프로젝트의 전 과정을 스스로 완성할 수 있다는 자신감을 얻었습니다. 이를 통해 프론트엔드와 백엔드 모두를 혼자서 개발할 수 있는 역량을 갖추게 되었습니다."
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
                    {
                        id: "1",
                        name: "React"
                    }, {
                        id: "11",
                        name: "Recoil"
                    }, {
                        id: "5",
                        name: "Node.js"
                    }, {
                        id: "6",
                        name: "MongoDB"
                    }, {
                        id: "7",
                        name: "Passport"
                    }, {
                        id: "8",
                        name: "OAuth"
                    }
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
    }, {
        id: "comp-sci-site",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "컴공사이트 – 학과 통합 웹앱"
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
                        plain_text: `이 프로젝트는 가톨릭대학교 컴퓨터 공학과 회의실 예약 웹앱으로, 학교 생활을 더 편리하게 만들기 위한 여러 기능을 통합한 시스템입니다. 사용자는 이 웹앱을 통해 회의실 예약, 공지사항 관리, FAQ, 학교 지도, 그리고 오픈채팅방 문의 기능을 손쉽게 이용할 수 있습니다. 또한 관리자는 회의실 예약 관리와 공지사항 및 FAQ의 CRUD 작업을 효율적으로 수행할 수 있습니다.\n\n• Frontend: React, Vite를 사용하여 빠르고 최적화된 개발 환경을 제공합니다.\n• 상태 관리: Zustand와 Recoil을 사용하여 직관적이고 단순한 상태 관리를 구현했습니다.\n• API: React Query를 사용하여 효율적인 API 요청과 상태 관리를 지원합니다.\n• Routing: React Router DOM을 활용하여 페이지 내 네비게이션을 처리합니다.`

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
                    {
                        id: "1",
                        name: "React"
                    }, {
                        id: "3",
                        name: "Zustand"
                    }, {
                        id: "4",
                        name: "React Query"
                    }, { // TanStack Query 포함
                        id: "12",
                        name: "React Router DOM"
                    }, {
                        id: "13",
                        name: "Lottie"
                    }
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
    }, {
        id: "eco-market",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "에코마켓 – 업사이클링 중고 거래 웹앱"
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
                        plain_text: "에코마켓은 중고 거래에 실시간 경매 시스템을 도입한 교내 웹앱 프로젝트로, 교내 환경 공모전에 출품된 경험이 있는 환경 친화적 서비스입니다. 실시간 입찰 기능을 구현하기 위해 SockJS와 STOMP.js를 활용하여 WebSocket 기반의 양방향 실시간 통신 구조를 설계하고, 경매 상품별 채널 구독을 통해 최고 입찰가, 입찰자 수, 입찰 내역 등을 실시간 반영하도록 구현했습니다. 또한, 거래 흐름을 직관적으로 파악할 수 있도록 Chart.js와 react-chartjs-2를 활용하여 실시간 거래량 데이터를 Bar Chart 형태로 시각화하고, 사용자 맞춤형 툴팁과 축 스타일을 적용해 가독성을 높였습니다. 이미지 업로드 기능은 multipart/form-data 요청을 처리할 수 있도록 설계하였으며, 이미지 파일과 JSON 데이터를 동시에 전송하기 위한 복합 요청 처리 로직을 구현했습니다. 특히, DTO를 Blob으로 감싸는 방식으로 클라이언트-서버 간 데이터 파싱을 정확하게 처리할 수 있도록 설계한 점이 핵심입니다. 해당 프로젝트를 통해 실시간 통신, 차트 시각화, 복합 폼 데이터 처리 등 다양한 프론트엔드 고급 기술을 실전 프로젝트에 적용한 경험을 쌓았습니다."
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
                    {
                        id: "1",
                        name: "React"
                    }, {
                        id: "14",
                        name: "styled-components"
                    }, {
                        id: "15",
                        name: "Chart.js"
                    }, {
                        id: "16",
                        name: "SockJS"
                    }, {
                        id: "17",
                        name: "Stomp.js"
                    }, {
                        id: "18",
                        name: "Redux"
                    }
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
    }, {
        id: "comatching-fc",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "COMAtching FC – 부천 FC 응원 매칭 서비스"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "실제 운영된 축구 경기장 기반의 AI 매칭 서비스"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "부천 FC와의 콜라보로 진행된 ‘코매칭’ AI 친구 매칭 서비스는 학교 축제 현장에서 150명의 참여자를 대상으로 운영된 실시간 응원 매칭 프로젝트입니다. 참가자들은 자신과 잘 맞는 친구를 AI가 분석하여 연결해주는 과정을 통해 축제의 응원 문화를 더욱 풍성하게 경험할 수 있었습니다.\n프론트엔드 개발자로서, Recoil을 활용해 응원 성향, 성별 등 사용자 정보를 상태로 관리하고, 이를 바탕으로 드래그 기반의 직관적인 친구 매칭 UI를 구현했습니다. 참여 유도 강화를 위해 멀티 스텝 사용자 등록 플로우를 설계하고, 연령, 성별, SNS 아이디, 닉네임 등 입력값을 순차적으로 수집하는 동적 폼을 개발했습니다.\n또한 유형 기반 AI 분석 결과를 시각화하기 위해 Chart.js 기반 레이더 차트 컴포넌트를 제작했으며, 재미있는 설문 인터페이스와 실시간 점수 집계 로직을 통해 참여자 흥미를 유도했습니다.\n현장 인증을 위해 jsQR 라이브러리를 활용한 실시간 QR 코드 인식 시스템을 개발하였고, <canvas> 기반 영상 스트림 처리 및 티켓 코드의 유효성 검사(정규표현식)를 통해 안정적인 인증 플로우를 구현했습니다.\n마지막으로, Modal 컴포넌트를 통한 순차적 공지사항 제공 기능을 도입하여 사용자 정보 전달을 강화했습니다. 전반적으로 본 프로젝트는 AI 기반 실시간 사용자 매칭, 동적 인터랙션 UI, 실시간 인증 처리까지 포함한 복합적 경험 설계를 성공적으로 수행한 사례입니다."
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
                    {
                        id: "1",
                        name: "React"
                    }, {
                        id: "11",
                        name: "Recoil"
                    }, {
                        id: "12",
                        name: "React Router DOM"
                    }, {
                        id: "15",
                        name: "Chart.js"
                    }, {
                        id: "19",
                        name: "jsQR"
                    }, {
                        id: "20",
                        name: "react-modal"
                    }
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
    {
        id: "catspot",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "CATSPOT – 실시간 빈 강의실/도서관 좌석 탐색 웹앱"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "계단 애니메이션과 층별 구조 UI를 구현한 Hackathon 수상작"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "CATSPOT은 가톨릭대 학생들이 교내 공간(강의실, 도서관 등)을 보다 편리하게 찾을 수 있도록 돕는 웹 서비스로, 교내 해커톤에서 팀원들과 함께 개발하여 수상까지 한 의미 있는 프로젝트입니다.저는 프론트엔드 개발을 담당하며 Vercel을 활용해 실서비스를 배포하고 운영하면서 실제 사용자 트래픽을 대응하는 경험을 쌓았고, 층별 이동을 자연스럽게 표현하는 계단 애니메이션을 직접 설계해 직관적인 UX를 구현했습니다.\n특히, CSS ::before, ::after와 애니메이션을 조합하여 실제 건물 구조를 반영한 층별 강의실 시각화 UI를 구현하였고, 로컬 스토리지를 활용해 사용자 상태(currentFloor, currentIndex)를 유지함으로써 새로고침 이후에도 동일한 사용 경험을 제공했습니다.\n또한, Date 객체와 toLocaleString을 활용하여 Asia/Seoul 기준 시간 동기화 유틸 함수를 구현했고, 이를 통해 예약 및 좌석 현황 요청 시 시간 오류 없이 데이터 정합성을 보장했습니다.교내 공간을 더 편리하게 이용할 수 있도록 기여했다는 점, 그리고 그 과정에서 배운 상태 관리, UI 애니메이션, 시간 동기화 처리 등 다양한 프론트엔드 기술의 실제 적용은 매우 의미 있는 성장의 발판이 되었습니다."
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 (팀장)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    {
                        id: "1",
                        name: "React"
                    }, {
                        id: "11",
                        name: "Recoil"
                    }, {
                        id: "21",
                        name: "CSS"
                    }, {
                        id: "12",
                        name: "React Router DOM"
                    }, {
                        id: "22",
                        name: "Axios"
                    }
                ]
            },
            gitHub: {
                url: "https://github.com/ojspp41/Catspot_front"
            },
            Youtube: {
                url: "https://youtube.com/shorts/ZDS1km9BB_k?si=KI7-pVQ4PTc8RRJN"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/catspot.png"
            }
        }
    }, 
    {
        id: "portfolio-site",
        properties: {
          이름: { title: [{ plain_text: "포트폴리오 웹사이트" }] },
          요약: {
            rich_text: [
              {
                plain_text: "Next.js와 노션 API를 사용한 개인 포트폴리오 웹사이트"
              }
            ]
          },
          설명: {
            rich_text: [
              {
                plain_text: `개인 포트폴리오 웹사이트는 Next.js를 기반으로 구축되었습니다. Next.js는 서버사이드 렌더링(SSR)을 지원하여 초기 로딩 속도를 빠르게 하고, SEO(검색엔진 최적화)를 개선할 수 있습니다. 또한, 로티 애니메이션 라이브러리를 사용하여 애니메이션 효과를 쉽게 구현하고, 웹사이트에 동적인 시각적 요소를 추가했습니다.
      
      포트폴리오 데이터는 노션 API를 통해 불러오며, 노션에서 데이터베이스를 생성하고 이를 API를 통해 가져오는 방식으로 연동했습니다. 이로써 데이터 업데이트와 관리가 용이하게 이루어집니다.
      
      웹사이트는 다크 모드와 라이트 모드를 지원하며, useState와 useEffect를 사용하여 모드 변경 상태를 관리합니다. 버튼 클릭 시 모드 전환이 가능하도록 구현하여 사용자에게 편리한 UI 환경을 제공합니다.`
              }
            ]
          },
          담당: { rich_text: [{ plain_text: "프론트엔드 단독 개발" }] },
          "다중 선택": {
            multi_select: [
              { id: "1", name: "Next.js" },
              { id: "2", name: "Notion API" },
              { id: "3", name: "Lottie Animation" },
              { id: "4", name: "Tailwind CSS" },
              { id: "5", name: "Vercel" }
            ]
          },
          gitHub: { url: "https://github.com/ojspp41/Portfolio_nextjs" },
          Youtube: { url: "https://www.youtube.com/watch?v=jDAygPgQty0" }
        },
        cover: {
          file: null,
          external: { url: "/assets/portfolio.png" }
        }
      },
      
    {
        id: "comatching-v3",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "COMAtching Ver3 – AI 기반 커플 매칭 플랫폼"
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "Firebase 기반 배포, WebSocket 기능, 실사용자 800명 확보한 매칭 플랫폼"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "COMAtching은 사용자 성향, 취미, 선호도를 기반으로 최적의 친구를 매칭해주는 웹 애플리케이션으로, 학교 축제에서 실제 배포되어 약 775명의 학생이 이용하고 150만 원의 수익을 달성한 프로젝트입니다.프론트엔드 개발을 맡아 React, Vanilla CSS, Recoil, Firebase 등을 활용해 서비스 전반을 구현하였으며, Firebase Hosting을 통해 실서비스를 운영하는 경험을 쌓았습니다.전역 상태 관리를 위해 Recoil을 활용해 회원가입 단계 간 정보 유지(나이, MBTI, 관심사 등)를 구현해 이탈률을 줄였고, SockJS와 Stomp.js 기반의 실시간 WebSocket 통신을 구축해 충전 요청, 승인, 취소 내역을 즉시 반영할 수 있도록 했습니다.\n특히, 사용자 참여를 유도하기 위해 슬라이더 UI(밀어서 커플되기)를 직접 구현하였고, 드래그 이벤트와 상태를 연동하여 인터랙션 UX를 개선했습니다.Axios 인터셉터를 활용해 Access Token 자동 주입 및 응답 처리, 에러 상태별 예외 처리를 구현해 전역 인증 및 에러 핸들링 체계를 구축했으며, 인앱 브라우저 감지 및 외부 리디렉션 로직을 통해 카카오톡·인스타그램 등의 환경에서도 원활하게 동작하는 서비스 안정성을 확보했습니다.\n또한, 반복되는 입력 UI를 MyInput과 같은 컴포넌트로 추상화하여 UI 일관성 확보 및 코드 재사용성을 높였습니다.본 프로젝트는 제가 처음으로 기획부터 배포까지 주도적으로 참여한 실전 프로젝트로, 특히 프론트엔드 개발과 서버와의 통신 구조에 대한 이해와 역량을 크게 성장시킬 수 있었던 경험이었습니다"
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "프론트엔드 단독 개발 (리팩토링)"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    {
                        id: "1",
                        name: "React"
                    }, {
                        id: "11",
                        name: "Recoil"
                    }, {
                        id: "21",
                        name: "CSS"
                    }, {
                        id: "22",
                        name: "Axios"
                    }, {
                        id: "16",
                        name: "SockJS"
                    }, {
                        id: "17",
                        name: "Stomp.js"
                    }, {
                        id: "23",
                        name: "Firebase"
                    }
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
                url: "/assets/comatchingv3.png"
            }
        }
    }, 
    {
        id: "sealant-ai",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "실리콘 실란트 카트리지 제조 공정에서 발생하는 인쇄 및 사출 불량을 실시간으로 탐지하는 AI 기반 불량 검출 시스템 "
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "산업 현장에 적용 가능한 CNN 기반 불량 탐지 AI 모델 개발"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "실리콘 실란트 제조 공정에서 발생하는 인쇄 불량을 탐지하기 위한 AI 모델을 개발한 프로젝트입니다. 기존 CNN 대비 MobileNetV2 " +
                            "기반으로 정확도를 10% → 52%로 향상시켰으며, Precision 0.95를 달성했습니다. 클래스 불균형 대응, 시각화, 평가 지표 코드" +
                            "까지 직접 구현하며 산업적 적용성을 높였습니다."
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "AI 모델 개발 (인쇄 불량 검출 담당)"
                    }
                ]
            },
            분류: {
                multi_select: [
                    {
                        id: "30",
                        name: "AI"
                    }, {
                        id: "31",
                        name: "딥러닝"
                    }, {
                        id: "32",
                        name: "산업응용"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    {
                        id: "40",
                        name: "Python"
                    }, {
                        id: "41",
                        name: "TensorFlow"
                    }, {
                        id: "42",
                        name: "MobileNetV2"
                    }, {
                        id: "43",
                        name: "ImageDataGenerator"
                    }
                ]
            },
            gitHub: {
                url: ""
            },
            Youtube: {
                url: "https://1drv.ms/b/c/53a8aef9ed6672a3/EcgAKgdZCIFOuqBn2FDKT-0BwdadxxuhZc28Bcifc" +
                        "zWxng?e=X10aca"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/sealant.png"
            }
        }
    },
    {
        id: "smartstore-village",
        properties: {
            이름: {
                title: [
                    {
                        plain_text: "네이버 스마트스토어 월 평균 매출 300만 원 이상을 달성."
                    }
                ]
            },
            요약: {
                rich_text: [
                    {
                        plain_text: "제품 기획, 촬영, 등록, 마케팅, 운영 전반을 혼자 수행한 쇼핑몰 프로젝트"
                    }
                ]
            },
            설명: {
                rich_text: [
                    {
                        plain_text: "직접 제품 상세페이지를 기획하고 사진을 촬영하여 네이버 스마트스토어에 등록한 프로젝트입니다. 콘텐츠 마케팅과 검색 최적화 전략을 통해 월 평" +
                            "균 매출 300만 원 이상을 달성했으며, 고객 응대, 주문 관리, 리뷰 분석 등 전체 운영을 1인으로 진행했습니다."
                    }
                ]
            },
            담당: {
                rich_text: [
                    {
                        plain_text: "1인 운영 (기획, 촬영, 마케팅, 판매 전담)"
                    }
                ]
            },
            분류: {
                multi_select: [
                    {
                        id: "33",
                        name: "기획/운영"
                    }, {
                        id: "34",
                        name: "이커머스"
                    }, {
                        id: "35",
                        name: "브랜딩"
                    }
                ]
            },
            "다중 선택": {
                multi_select: [
                    {
                        id: "44",
                        name: "SmartStore"
                    }, {
                        id: "45",
                        name: "상품 기획"
                    }, {
                        id: "46",
                        name: "콘텐츠 마케팅"
                    }, {
                        id: "47",
                        name: "포토그래피"
                    }
                ]
            },
            gitHub: {
                url: ""
            },
            Youtube: {
                url: "https://smartstore.naver.com/krcoffee"
            }
        },
        cover: {
            file: null,
            external: {
                url: "/assets/smartstore.png"
            }
        }
    }

];

export default projectData;
