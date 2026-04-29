import { motion } from 'framer-motion';
import {
  Server,
  Layout,
  Cpu,
  Zap,
  MessageSquare,
  Globe,
  Database,
  Code2,
  Sparkles,
  Bot,
  Brain,
  Terminal,
} from 'lucide-react';

const webBasics = [
  {
    icon: Globe,
    title: '클라이언트 (Client)',
    description: '우리가 사용하는 브라우저나 앱. 사용자의 입력을 받고 결과를 보여주는 "얼굴"입니다.',
  },
  {
    icon: Server,
    title: '서버 (Server)',
    description: '데이터를 처리하고 저장하는 "두뇌". 클라이언트의 요청에 응답합니다.',
  },
  {
    icon: Database,
    title: '데이터베이스 (DB)',
    description: '정보를 체계적으로 저장하는 "금고". 엑셀 파일의 거대한 버전이라고 생각하면 쉽습니다.',
  },
];

const webPillars = [
  {
    icon: Layout,
    title: 'HTML',
    description: '웹의 "뼈대". 제목, 본문, 이미지 등 무엇이 들어갈지 결정합니다.',
  },
  {
    icon: Code2,
    title: 'CSS',
    description: '웹의 "피부". 색상, 폰트, 간격 등 디자인을 담당합니다.',
  },
  {
    icon: Terminal,
    title: 'JavaScript',
    description: '웹의 "근육". 버튼 클릭 시 동작, 데이터 로딩 등 움직임을 만듭니다.',
  },
];

const aiConcepts = [
  {
    title: 'LLM (대규모 언어 모델)',
    description: '바이브 코딩의 엔진. 인간의 언어를 이해하고 코드를 생성하는 핵심 AI입니다.',
  },
  {
    title: '프롬프트 엔지니어링',
    description: 'AI에게 정확한 의도를 전달하는 기술. "무엇을 어떻게" 시킬지 정의합니다.',
  },
  {
    title: '컨텍스트 (Context)',
    description: 'AI가 현재 대화나 프로젝트에서 기억하고 있는 맥락. 기억력의 범위입니다.',
  },
  {
    title: '할루시네이션 (Hallucination)',
    description: 'AI가 그럴듯하게 내뱉는 거짓말. 엔지니어의 검증이 필요한 이유입니다.',
  },
];

const advancedAi = [
  {
    icon: Bot,
    title: 'AI 에이전트',
    description: '단순 대화를 넘어, 스스로 판단하고 파일 수정/터미널 명령 등을 수행하는 도우미.',
  },
  {
    icon: Zap,
    title: 'MCP (Model Context Protocol)',
    description: 'AI가 다양한 도구(GitHub, DB, 로컬 파일 등)와 안전하게 대화하기 위한 표준 규격.',
  },
];

const lessonFlow = [
  { time: '5분', label: '도입 & 목표' },
  { time: '10분', label: '웹 서비스 구조' },
  { time: '10분', label: 'AI 핵심 원리' },
  { time: '10분', label: '에이전트 & MCP' },
  { time: '5분', label: '정리 & 실습 준비' },
];

export default function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-top">
          <div className="logo-group">
            <Sparkles className="header-logo" style={{ color: '#0071e3' }} />
            <span style={{ fontWeight: 900, fontSize: '1.5rem', marginLeft: '0.5rem' }}>Vibe Code</span>
          </div>
          <div className="header-tag">
            Vibe Coding 101: Session 2<br />
            <span style={{ color: '#86868b', fontSize: '0.9rem' }}>비개발자를 위한 최소한의 IT 지식</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-section"
        >
          <div className="one-line-definition">
            <span>Core Objective</span>
            <strong>"AI와 대화하기 위해 필요한 최소한의 공통 언어를 습득합니다."</strong>
          </div>
          <h1>의도를 현실로 만드는<br />지식의 지도</h1>
          <p className="subtitle">코딩 문법 대신, 서비스가 돌아가는 원리를 이해합니다.</p>
          
          <div className="lesson-meta">
            <span>40분 세션</span>
            <span>비개발자 맞춤</span>
            <span>AI 협업 기초</span>
          </div>
        </motion.div>
      </header>

      <section>
        <span className="section-label">01. Web Foundation</span>
        <h2>서비스가 작동하는 <mark>3가지 구성 요소</mark></h2>
        <div className="card-grid">
          {webBasics.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <item.icon size={40} color="#0071e3" style={{ marginBottom: '1.5rem' }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="section-label">02. The 3 Pillars</span>
        <h2>웹을 구성하는 <mark>3가지 언어</mark></h2>
        <div className="card-grid">
          {webPillars.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <item.icon size={40} color="#22c55e" style={{ marginBottom: '1.5rem' }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="section-label">03. AI Intelligence</span>
        <h2>AI를 다루는 <mark>핵심 개념</mark></h2>
        <div className="concept-grid">
          {aiConcepts.map((item, index) => (
            <div key={index} className="concept-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <span className="section-label">04. Next Step</span>
        <h2>AI는 이제 <mark>에이전트</mark>가 됩니다</h2>
        <div className="card-grid">
          {advancedAi.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              whileHover={{ scale: 1.02 }}
              style={{ border: '2px solid #0071e3' }}
            >
              <item.icon size={40} color="#0071e3" style={{ marginBottom: '1.5rem' }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="section-label">Schedule</span>
        <h2>오늘의 <mark>강의 흐름</mark></h2>
        <div className="lesson-timeline">
          {lessonFlow.map((step, index) => (
            <div key={index} className="timeline-step">
              <strong>{step.time}</strong>
              <span style={{ fontWeight: 800 }}>{step.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="philosophy-section">
        <h2>"만들면서 익히는 것이<br />가장 빠른 학습입니다."</h2>
        <p>이론에 매몰되지 마세요. 용어는 AI와의 대화를 돕는 도구일 뿐입니다.<br />우리의 목표는 완벽한 암기가 아니라, 의도를 정확히 전달하는 것입니다.</p>
      </footer>
    </div>
  );
}
