import { motion } from 'framer-motion';
import {
  Zap,
  Target,
  FileText,
  MessageSquare,
  Sparkles,
  Bot,
  Brain,
  Code2,
  Database,
  Terminal,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const lessonFlow = [
  { time: '5분', label: '공정 지식과 AI 협업' },
  { time: '10분', label: '엔지니어 마인드셋 비교' },
  { time: '10분', label: 'TCREI 프레임워크 심화' },
  { time: '10분', label: 'Pseudo-Code 설계 실전' },
  { time: '5분', label: '실무 사례 & 정리' },
];

const promptComparison = [
  {
    type: 'general',
    title: '케이스 1: 수율 분석',
    prompt: '"이번 달 반도체 수율이 왜 떨어졌는지 분석해줘."',
    result: 'AI: "일반적으로 수율 하락 원인은 장비 고장, 원자재 불량, 작업자 실수 등이 있습니다. 데이터를 주시면 분석해 드릴게요."',
    analysis: '현상을 나열할 뿐 구체적인 액션이 불가능함.',
  },
  {
    type: 'engineering',
    title: '케이스 1: 수율 분석',
    prompt: '"Photo 공정의 PR 도포 두께와 Yield 간의 상관관계를 분석해줘. 특히 PR 점도(Viscosity)가 상한치를 초과했을 때의 수율 하락 폭을 계산하고, 이를 산점도로 시각화해줘."',
    result: 'AI: (Python 코드 생성) 상관계수 계산, 점도 임계값 기준 필터링, 하락 폭 수치화 및 산점도 시각화 코드 제공.',
    analysis: '명확한 인자(PR 점도)와 분석 방식(상관관계)이 포함됨.',
  },
  {
    type: 'general',
    title: '케이스 2: 장비 이상 감지',
    prompt: '"에칭 장비가 이상한 것 같아. 로그 파일 확인해줘."',
    result: 'AI: "로그 파일의 어떤 부분을 확인해야 하나요? 에러 코드를 알려주세요."',
    analysis: '질문에 질문으로 답함.',
  },
  {
    type: 'engineering',
    title: '케이스 2: 장비 이상 감지',
    prompt: '"Dry Etch 장비의 챔버 압력 로그에서 60초 주기로 발생하는 압력 변동(Pressure Hunting) 패턴을 탐지해줘. 정상 범위를 5% 초과하는 구간을 감지하고, 해당 구간의 MFC(Mass Flow Controller) 유량 변화와 매칭시켜줘."',
    result: 'AI: (시계열 분석 로직) 이동평균 기반 변동 탐지, MFC 데이터 병합 및 상관관계 분석 대시보드 초안 생성.',
    analysis: '주기성 패턴(Hunting)과 비교 대상(MFC 유량)을 구체화함.',
  },
  {
    type: 'general',
    title: '케이스 3: 품질 보고서',
    prompt: '"불량 이미지 분류한 결과로 보고서 써줘."',
    result: 'AI: "분류 결과가 어떻게 되나요? 총 개수와 유형별 개수를 알려주시면 작성해 드릴게요."',
    analysis: '단순 텍스트 요약에 그침.',
  },
  {
    type: 'engineering',
    title: '케이스 3: 품질 보고서',
    prompt: '"AOI 검사에서 검출된 Mura 불량 200건의 좌표를 기반으로 Heatmap을 그려줘. 불량이 집중되는 Glass 위치(Top-Left 등)를 식별하고, 전주 대비 불량 발생 빈도 변화율을 포함한 주간 품질 보고서 초안을 HTML로 만들어줘."',
    result: 'AI: (시각화 로직) 좌표 데이터 기반 Heatmap 생성, 위치별 통계 추출, 변화율 계산 및 세련된 웹 보고서 레이아웃 생성.',
    analysis: '공간 정보(좌표)와 비즈니스 지표(변화율)를 결합함.',
  },
];

const pseudoExamples = [
  {
    title: '일반적인 지시 (Natural Language)',
    content: '"데이터에서 수율 낮은 것만 찾아서 메일로 보내줘."',
    diff: 'AI는 "어떤 데이터?" "낮은 기준은?" "메일 본문은?"을 계속 물어보거나 임의로 작성하여 결과가 부정확함.',
  },
  {
    title: '슈도 프롬프트 지시 (Pseudo-Code)',
    content: `[SETTING] THRESHOLD = 92.5%
[STEP 1] DATA = LOAD('daily_yield.csv')
[STEP 2] TARGET = DATA where Yield < THRESHOLD
[STEP 3] IF len(TARGET) > 0:
    SUMMARY = Group TARGET by 'Process_ID'
    SEND_ALERT(to='PI팀', body=SUMMARY)
[STEP 4] ELSE:
    PRINT('정상 범위 내')`,
    diff: 'AI는 논리 구조(조건문, 반복문)를 즉시 파악하여, 에러 없는 완벽한 자동화 스크립트를 생성함.',
  },
];

export default function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-top">
          <motion.div 
            className="logo-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img 
              src="https://heekeunlee.github.io/lecture01/logo.png" 
              alt="내일도렛유인" 
              className="header-logo"
            />
          </motion.div>
          <div className="header-tag-container">
            <span className="header-tag">첨단 기술 엔지니어를 위한 바이브 코딩 실전</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-section"
        >
          <h1>바이브 코딩 2강:<br />의도를 결과로 바꾸는 <mark>프롬프트 설계</mark></h1>
          <p className="subtitle">반도체·디스플레이·2차전지 공정 데이터를 요리하는 엔지니어의 작업지시서 작성법</p>
          
          <div className="lesson-meta">
            <span>40분 집중</span>
            <span>엔지니어 맞춤</span>
            <span>프롬프트 엔지니어링 80%</span>
          </div>
        </motion.div>
      </header>

      {/* 01. Mindset Expansion */}
      <section>
        <span className="section-label">01. 마인드셋 비교</span>
        <h2><Zap size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} /> 엔지니어의 언어가 <mark>결과의 차이</mark>를 만듭니다</h2>
        <p className="section-intro">
          같은 의도를 가지고 있어도, 일반적인 대화형 프롬프트와 엔지니어링 프롬프트는 AI가 생성하는 결과물의 품질에서 하늘과 땅 차이를 보입니다.
        </p>
        
        <div className="prompt-compare-grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
          {promptComparison.map((item, index) => (
            <motion.div 
              key={index} 
              className="comparison-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '3rem' }}
            >
              <div className={`prompt-card ${item.type === 'general' ? 'general' : 'engineering'}`} style={{ height: '100%' }}>
                <span>{item.type === 'engineering' ? <Target size={18} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} /> : <MessageSquare size={18} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />}{item.title} - {item.type === 'general' ? '일반 프롬프트' : '엔지니어 프롬프트'}</span>
                <div className="prompt-box" style={{ minHeight: '120px' }}>
                  {item.prompt}
                </div>
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: item.type === 'general' ? '#fff1f2' : '#f0fdf4', borderRadius: '12px' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem' }}>AI의 반응:</strong>
                  <p style={{ fontSize: '0.9rem', color: '#334155' }}>{item.result}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                <h4 style={{ color: item.type === 'general' ? '#be123c' : '#15803d', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {item.type === 'general' ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
                  핵심 분석
                </h4>
                <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>{item.analysis}</p>
                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {item.type === 'general' 
                    ? "AI는 엔지니어의 '의도'를 짐작할 뿐, 실제 동작하는 도구를 만들 준비가 되지 않았습니다." 
                    : "AI는 엔지니어의 '기준'과 '절차'를 즉시 파악하여, 현장에서 바로 쓸 수 있는 분석 스크립트를 생성합니다."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 02. TCREI Deep Dive */}
      <section>
        <span className="section-label">02. 프롬프트 기술: TCREI</span>
        <h2><Brain size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} /> 구글이 강조하는 <mark>프롬프트 5대 요소</mark></h2>
        <p className="section-intro">TCREI는 AI에게 주는 가장 완벽한 '작업지시서'의 뼈대입니다. 각 요소가 빠졌을 때와 들어갔을 때의 결과물을 비교해보세요.</p>
        
        <div className="technique-grid">
          <div className="technique-card">
            <h4><Activity size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Task (작업)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>AI가 수행해야 할 구체적인 행동</p>
            <ul>
              <li className="bad">"분석해줘"</li>
              <li className="good">"이상 구간을 탐지하고 보고서를 써줘"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><Database size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Context (맥락)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>프로젝트의 배경과 목표</p>
            <ul>
              <li className="bad">"데이터야"</li>
              <li className="good">"신규 라인 셋업을 위한 센서 데이터야"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><Bot size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Role (역할)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>AI에게 부여하는 전문적인 페르소나</p>
            <ul>
              <li className="bad">없음</li>
              <li className="good">"15년차 수율 개선 담당 파트장처럼 말해줘"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><FileText size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Exemplar (예시)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>원하는 결과물의 구체적인 예시</p>
            <ul>
              <li className="bad">없음</li>
              <li className="good">"표의 첫 열은 날짜, 두 번째 열은 불량률"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><Code2 size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Input (입력)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>데이터의 형식, 제약 사항 등</p>
            <ul>
              <li className="bad">없음</li>
              <li className="good">"CSV 형식, 헤더 포함, 단위는 mm"</li>
            </ul>
          </div>
        </div>

        <div className="deep-dive" style={{ marginTop: '3rem' }}>
          <h3>TCREI 적용 전 vs 후 결과 비교</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
            <div className="yield-case-panel" style={{ background: '#f8fafc' }}>
              <span style={{ color: '#64748b' }}>미적용 (일반 지시)</span>
              <p style={{ fontStyle: 'italic', margin: '1rem 0' }}>"센서 데이터 분석해서 문제 있으면 알려줘."</p>
              <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'white' }}>
                <strong style={{ fontSize: '0.8rem' }}>AI 출력 예상:</strong>
                <p style={{ fontSize: '0.85rem' }}>"어떤 데이터를 분석할까요? 구체적인 파일이나 수치를 알려주시면 문제점을 찾아보겠습니다." (답변 정체)</p>
              </div>
            </div>
            <div className="yield-case-panel" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
              <span style={{ color: '#15803d' }}>TCREI 적용 (엔지니어 지시)</span>
              <p style={{ fontStyle: 'italic', margin: '1rem 0' }}>"네가 수율 분석 전문가(R)로서, 이번 Dry Etch 로그(I)에서 압력 변동 구간을 탐지(T)해줘. 셋업 초기 데이터(C)니까 평소보다 기준을 타이트하게 잡고, 결과는 [시간-설비-압력] 순서의 표(E)로 보여줘."</p>
              <div style={{ padding: '1rem', border: '1px solid #bbf7d0', borderRadius: '12px', background: 'white' }}>
                <strong style={{ fontSize: '0.8rem' }}>AI 출력 예상:</strong>
                <p style={{ fontSize: '0.85rem' }}>"알겠습니다. 셋업 초기 데이터임을 감안하여 임계값의 2%를 초과하는 변동을 탐지하겠습니다. (즉시 분석 코드 및 표 생성)"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Pseudo-Prompt Expansion */}
      <section>
        <span className="section-label">03. 고급 기술: Pseudo-Prompt</span>
        <h2><Terminal size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} /> 코딩 없이 <mark>로직을 설계</mark>하는 법</h2>
        <p className="section-intro">
          슈도 프롬프트(Pseudo-Prompt)는 자연어와 프로그래밍 언어의 중간 형태입니다. 복잡한 문제를 단계별(Step-by-step)로 쪼개어 지시하면 AI가 훨씬 더 정교한 논리 구조를 가진 결과물을 만들어냅니다.
        </p>

        <div className="prompt-compare-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
          {pseudoExamples.map((item, index) => (
            <div key={index} className="yield-case-panel" style={{ padding: '2.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: index === 0 ? 'var(--text-secondary)' : 'var(--accent)' }}>
                {item.title}
              </h4>
              <div className="prompt-box" style={{ background: index === 0 ? '#f8fafc' : '#0f172a', color: index === 0 ? 'inherit' : '#38bdf8' }}>
                {item.content}
              </div>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f1f5f9', borderRadius: '12px', borderLeft: '4px solid #64748b' }}>
                <strong>차이점:</strong> {item.diff}
              </div>
            </div>
          ))}
        </div>

        <div className="deep-dive" style={{ background: '#fff' }}>
          <h3>현장 엔지니어를 위한 슈도 프롬프트 작성 3원칙</h3>
          <div className="technique-grid" style={{ marginTop: '2rem' }}>
            <div className="technique-card">
              <h4>1. 변수 정의 (SET)</h4>
              <p>기준이 되는 수치(Spec, Threshold)를 먼저 명시하세요. AI가 계산 로직에서 이 수치를 정확히 사용합니다.</p>
            </div>
            <div className="technique-card">
              <h4>2. 단계별 분리 (STEP)</h4>
              <p>데이터 로드 {'->'} 필터링 {'->'} 계산 {'->'} 출력의 과정을 STEP 단위로 나누어 지시하세요.</p>
            </div>
            <div className="technique-card">
              <h4>3. 조건문 활용 (IF/ELSE)</h4>
              <p>특정 상황(예: 불량이 발생했을 때만)에서 수행할 동작을 명확히 구분하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Case Study Expansion */}
      <section className="deep-dive">
        <div className="deep-dive-heading">
          <span className="section-label">04. 실전 사례 심화</span>
          <h3>디스플레이 패널 검사: 불량 패턴의 시각화</h3>
          <p>단순히 "분석해줘"라고 했을 때와, 엔지니어링 프롬프트를 사용했을 때의 결과물 차이를 봅니다.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
          <div className="yield-case-panel">
            <span style={{ color: '#ef4444' }}>엔지니어 A (일반형)</span>
            <div className="prompt-box" style={{ fontSize: '0.85rem' }}>
              "검사 데이터 보고 불량 위치 좀 알려줘. 그리고 리포트 써줘."
            </div>
            <div style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem', textAlign: 'center' }}>
              <ArrowRight size={24} style={{ color: '#be123c', transform: 'rotate(90deg)', marginBottom: '1rem' }} />
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px' }}>
                <strong>AI 결과:</strong>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>
                  "불량은 화면 중앙과 가장자리에 분포해 있습니다. 리포트 초안은 다음과 같습니다..."
                </p>
              </div>
              <p style={{ marginTop: '0.5rem', color: '#be123c', fontWeight: 700 }}>→ 결과: 실무 활용 불가</p>
            </div>
          </div>

          <div className="yield-case-panel" style={{ border: '2px solid var(--accent)' }}>
            <span style={{ color: 'var(--accent)' }}>엔지니어 B (바이브 코딩형)</span>
            <div className="prompt-box" style={{ fontSize: '0.85rem', background: '#f0f7ff' }}>
              "검사 데이터의 X, Y 좌표를 사용하여 패널 불량 분포 Heatmap을 생성해줘. 특히 Panel edge 10mm 이내의 불량만 별도로 카운트해서 비율을 계산해..."
            </div>
            <div style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem', textAlign: 'center' }}>
              <ArrowRight size={24} style={{ color: 'var(--accent)', transform: 'rotate(90deg)', marginBottom: '1rem' }} />
              <div style={{ padding: '1rem', background: '#f0f7ff', borderRadius: '12px' }}>
                <strong>AI 결과:</strong>
                <p style={{ fontSize: '0.85rem', color: '#15803d' }}>[Python 시각화 코드 & 정교한 히트맵 & 메일 초안 생성]</p>
              </div>
              <p style={{ marginTop: '0.5rem', color: '#15803d', fontWeight: 700 }}>→ 결과: 즉시 현장 적용 가능</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <span className="section-label">강의 요약</span>
        <h2>오늘의 <mark>강의 흐름</mark></h2>
        <div className="lesson-timeline">
          {lessonFlow.map((step, index) => (
            <div key={index} className="timeline-step">
              <strong>{step.time}</strong>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                {index === 0 && <Activity size={16} />}
                {index === 1 && <Target size={16} />}
                {index === 2 && <Brain size={16} />}
                {index === 3 && <Terminal size={16} />}
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer className="philosophy-section">
        <h2><Sparkles size={32} style={{ marginBottom: '1rem' }} /><br />"프롬프트 설계는<br />엔지니어의 새로운 설계도입니다."</h2>
        <p>복잡한 코드는 AI에게 맡기고, 여러분은 현장의 전문성을<br />논리적인 단계로 쪼개어 전달하는 것에 집중하세요.<br />그것이 바로 바이브 코딩의 본질입니다.</p>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Bot size={24} />
          <Code2 size={24} />
          <Database size={24} />
          <FileText size={24} />
          <MessageSquare size={24} />
          <Zap size={24} />
        </div>
      </footer>

      <style>{`
        .bad { padding-left: 1.5rem; position: relative; color: #be123c; }
        .bad::before { content: "✕"; position: absolute; left: 0; }
        .good { padding-left: 1.5rem; position: relative; color: #15803d; }
        .good::before { content: "✓"; position: absolute; left: 0; }
        .comparison-row:last-child { border-bottom: none; }
      `}</style>
    </div>
  );
}
