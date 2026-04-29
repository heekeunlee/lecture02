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
} from 'lucide-react';

const lessonFlow = [
  { time: '5분', label: '공정 지식과 AI' },
  { time: '10분', label: '일반 vs 엔지니어 프롬프트' },
  { time: '15분', label: 'TCREI & Pseudo-Code' },
  { time: '10분', label: '공정 실무 사례 적용' },
];

const promptComparison = [
  {
    type: 'general',
    title: '일반적인 프롬프트 (비효율적)',
    context: '공정 데이터를 분석하고 싶을 때',
    prompt: '"CVD 공정의 두께 데이터를 분석해서 그래프로 그려줘. 이상한 부분이 있으면 알려줘."',
    result: 'AI가 일반적인 평균값이나 추세선만 그려줌. 엔지니어가 진짜 궁금한 "특정 Lot의 산포"나 "챔버 간 편차"는 놓치기 쉬움.',
  },
  {
    type: 'engineering',
    title: '엔지니어의 프롬프트 (효과적)',
    context: '첨단 공정 현장의 언어 적용',
    prompt: '"CVD 두께 로그(CSV)에서 Lot별 Thickness 산포를 Box plot으로 시각화해줘. 목표치 120nm ± 5nm를 벗어난 Outlier는 빨간색으로 표시하고, 해당 Lot의 압력(Pressure) 상관관계를 분석해줘. 결과는 엔지니어 리뷰용 대시보드 형태로 구성해."',
    result: '명확한 기준(±5nm)과 분석 도구(Box plot, 상관분석), 출력 형식(대시보드)이 포함되어 즉시 실무에 사용 가능한 수준의 코드가 생성됨.',
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

      <section>
        <span className="section-label">01. 마인드셋</span>
        <h2><Zap size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} /> 엔지니어의 언어가 <mark>최고의 프롬프트</mark>입니다</h2>
        <p className="section-intro">
          AI는 공정의 물리적 현상을 알지 못합니다. 하지만 엔지니어가 "챔버 간 편차(Inter-chamber variation)", "수율 하락(Yield drop)", "산포(Dispersion)"와 같은 현장 용어를 사용해 명확한 가이드라인을 주면, AI는 그 즉시 수만 줄의 코드를 정확히 생성해냅니다.
        </p>
        
        <div className="prompt-compare-grid">
          {promptComparison.map((item, index) => (
            <motion.div 
              key={index} 
              className={`prompt-card ${item.type}`}
              whileHover={{ y: -5 }}
            >
              <span>{item.type === 'engineering' ? <Target size={18} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} /> : <MessageSquare size={18} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />}{item.title}</span>
              <h3>{item.context}</h3>
              <div className="prompt-box">
                {item.prompt}
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                {item.result}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="section-label">02. 프롬프트 기술: TCREI</span>
        <h2><Brain size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} /> 구글이 권장하는 <mark>TCREI 프레임워크</mark></h2>
        <p className="section-intro">작업지시서를 작성할 때 다음 5가지 요소를 포함하면 AI의 답변 품질이 비약적으로 상승합니다.</p>
        
        <div className="technique-grid">
          <div className="technique-card">
            <h4><Activity size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Task (작업)</h4>
            <ul>
              <li>"분석해줘"보다는 구체적으로</li>
              <li>"이상 탐지 로직을 구현해줘"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><Database size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Context (맥락)</h4>
            <ul>
              <li>"반도체 에칭 공정 데이터야"</li>
              <li>"신입 엔지니어가 볼 차트야"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><Bot size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Role (역할)</h4>
            <ul>
              <li>"10년차 공정기술 전문가처럼"</li>
              <li>"데이터 사이언티스트처럼"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><FileText size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Exemplar (예시)</h4>
            <ul>
              <li>"이런 식으로 출력해줘 (예시 첨부)"</li>
              <li>"A와 B를 비교하는 방식이면 좋아"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4><Code2 size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Input (입력)</h4>
            <ul>
              <li>"CSV 파일의 첫 행은 헤더야"</li>
              <li>"단위는 nm와 degC야"</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <span className="section-label">03. 고급 기술: Pseudo-Prompt</span>
        <h2><Terminal size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} /> 로직을 설계하는 <mark>의사코드(Pseudo-code)</mark> 기법</h2>
        <p className="section-intro">복잡한 공정 분석 로직은 코딩을 하듯 구조적으로 명령을 내리는 것이 유리합니다.</p>
        
        <div className="yield-case-panel prompt-panel">
          <span><Sparkles size={16} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} /> 고급 프롬프트 예시</span>
          <h4>의사코드 스타일의 지시서</h4>
          <div className="prompt-box" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
{`[STEP 1] Data Load: sensor_log.csv 파일을 읽는다.
[STEP 2] Pre-processing: 'temp' 컬럼에서 -999인 이상치를 평균값으로 대체한다.
[STEP 3] Calculation: 5-point 이동평균을 계산하여 'ma_temp' 컬럼을 추가한다.
[STEP 4] Detection: ma_temp가 UCL(150도)을 초과하는 시점을 탐지한다.
[STEP 5] Output: 탐지된 시점의 Timestamp와 설비 ID를 표로 출력한다.`}
          </div>
        </div>
      </section>

      <section className="deep-dive">
        <div className="deep-dive-heading">
          <span className="section-label">04. 실전 사례</span>
          <h3>2차전지 전극 공정: 두께 불균일 원인 분석</h3>
          <p>현장에서 발생하는 문제를 바이브 코딩 프롬프트로 해결하는 실제 흐름입니다.</p>
        </div>

        <div className="yield-case-panel">
          <span>현장의 문제 (Problem)</span>
          <h4>"코팅 이후 건조 과정에서 특정 구간의 두께가 계속 얇게 나옵니다."</h4>
          <p style={{ color: 'var(--text-secondary)' }}>
            엔지니어는 수동으로 엑셀을 열어 롤러 속도와 온도를 매칭하며 반나절을 보냅니다.
          </p>
        </div>

        <div className="yield-case-panel prompt-panel">
          <span>바이브 코딩 지시 (Prompt)</span>
          <h4>엔지니어의 전문성이 담긴 지시</h4>
          <p>
            "건조 공정 데이터에서 Roll Speed와 Temperature를 독립 변수로, Coating Thickness를 종속 변수로 설정해서 다중 회귀 분석을 수행해줘. 두께 하락에 가장 큰 영향을 주는 인자를 찾고, 온도 편차가 3도 이상 벌어진 구간만 필터링해서 그래프에 음영 처리해줘. 보고서는 회의용 PPT에 바로 넣을 수 있게 깔끔한 HTML 형식을 원해."
          </p>
        </div>

        <div className="yield-case-panel" style={{ border: '2px dashed var(--accent)', background: '#fff' }}>
          <span>AI의 산출물 (After)</span>
          <h4>분석 결과 대시보드 초안</h4>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ flex: 1, height: '150px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontWeight: 800 }}>회귀 분석 차트 (R²: 0.89)</div>
            <ArrowRight size={24} style={{ alignSelf: 'center', color: 'var(--text-secondary)' }} />
            <div style={{ flex: 1, height: '150px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', fontWeight: 800 }}>이상 구간 (온도 편차 발생)</div>
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
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="philosophy-section">
        <h2>"프롬프트는 엔지니어의<br />지식을 AI에게 전달하는 통로입니다."</h2>
        <p>복잡한 수식과 코드를 직접 적으려 하지 마세요.<br />여러분의 공정 지식을 AI가 이해할 수 있는 '구조적인 언어'로 바꾸는 연습이 바이브 코딩의 80%입니다.</p>
      </footer>
    </div>
  );
}
