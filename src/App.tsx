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
    result: 'AI: "수율 하락의 일반적인 원인은 장비 유지보수 지연, 원자재 오염, 공정 파라미터 이탈 등이 있습니다. 구체적인 데이터를 업로드해주시면 상관관계를 분석해드릴 수 있습니다. 어떤 장비나 라인의 데이터를 확인해드릴까요?"',
    analysis: '현상을 나열하는 백과사전식 답변에 그칩니다. 엔지니어가 다시 데이터를 정제하고 구체적인 질문을 던져야 하는 번거로움이 발생하며, 실무적인 해결책을 도출하기까지 여러 번의 대화가 더 필요합니다.',
  },
  {
    type: 'engineering',
    title: '케이스 1: 수율 분석',
    prompt: '"Photo 공정의 PR 도포 두께와 Yield 간의 상관관계를 분석해줘. 특히 PR 점도(Viscosity)가 상한치인 15cp를 초과했을 때의 수율 하락 폭을 정량적으로 계산하고, 두 인자 간의 관계를 산점도(Scatter Plot)로 시각화해줘."',
    result: 'AI: (Python 스크립트 생성) "상관분석을 수행하겠습니다. 1) 데이터를 불러와 점도 15cp 초과 데이터만 필터링합니다. 2) 해당 구간의 평균 수율을 산출합니다. 3) 전체 데이터와 비교하여 수율 저하율을 계산합니다. 4) Seaborn을 활용해 점도와 수율의 산점도를 생성합니다." [즉시 실행 가능한 코드 제공]',
    analysis: '명확한 물리적 인자(점도), 임계값(15cp), 분석 방법론(상관분석), 시각화 방식(산점도)이 포함되어 있습니다. AI는 고민 없이 즉시 엔지니어가 원하는 통계 수치와 그래프를 출력합니다.',
  },
  {
    type: 'general',
    title: '케이스 2: 장비 이상 감지',
    prompt: '"에칭 장비가 이상한 것 같아. 로그 파일 확인해줘."',
    result: 'AI: "장비의 어떤 증상이 있나요? 에러 코드나 비정상적인 로그 메시지를 복사해서 주시면 분석해드릴 수 있습니다. 혹은 로그 파일의 형식을 알려주시면 제가 읽어볼 수 있습니다."',
    analysis: '엔지니어에게 "무엇이 이상한지"를 역으로 묻습니다. AI는 도구일 뿐, 엔지니어가 문제의 범위를 좁혀주지 않으면 방대한 로그 속에서 무엇을 찾아야 할지 스스로 판단하지 못합니다.',
  },
  {
    type: 'engineering',
    title: '케이스 2: 장비 이상 감지',
    prompt: '"Dry Etch 장비의 챔버 압력 로그(Chamber_Pressure)에서 60초 주기로 발생하는 압력 변동(Pressure Hunting) 패턴을 탐지해줘. 정상 범위를 5% 초과하는 이상 구간을 감지하고, 해당 시점의 MFC(Mass Flow Controller) 가스 유량 데이터와 병합하여 상관관계를 시각화해줘."',
    result: 'AI: "시계열 이상 탐지 로직을 구현합니다. 1) FFT(고속 푸리에 변환)를 활용해 60초 주기성을 확인합니다. 2) 임계값 5%를 적용해 이상 시점을 인덱싱합니다. 3) MFC 로그와 타임스탬프 기준으로 병합(Merge)합니다. 4) 두 센서의 변화 추이를 시각화합니다." [이상 구간 목록 및 차트 생성]',
    analysis: '문제 현상(Pressure Hunting), 주기(60초), 탐지 기준(5%), 연관 데이터(MFC)를 구체적으로 지정했습니다. AI는 장비 엔지니어가 수작업으로 반나절 동안 할 업무를 10초 만에 완수합니다.',
  },
  {
    type: 'general',
    title: '케이스 3: 품질 보고서',
    prompt: '"불량 이미지 분류한 결과로 보고서 써줘."',
    result: 'AI: "불량 유형별 개수와 비중을 알려주시면 보고서 초안을 작성해드리겠습니다. 예를 들어 Scratch 10건, Particle 20건 식의 정보가 필요합니다. 보고서에 특별히 포함하고 싶은 결론이 있나요?"',
    analysis: '단순한 텍스트 요약 비서 역할만 수행합니다. 엔지니어가 데이터를 가공해서 주어야 하며, 결과물의 깊이가 얕아 실제 보고용으로 쓰기엔 부적합합니다.',
  },
  {
    type: 'engineering',
    title: '케이스 3: 품질 보고서',
    prompt: '"AOI 검사에서 검출된 Mura 불량 200건의 X, Y 좌표를 기반으로 Glass 내 위치별 Heatmap을 그려줘. 불량이 집중되는 영역(Edge/Center)을 식별하고, 전주 대비 발생 빈도 변화율을 계산하여 주간 품질 보고서 초안을 HTML 대시보드 형태로 만들어줘."',
    result: 'AI: "공간 분석 대시보드를 생성합니다. 1) 좌표 데이터를 기반으로 2D 히트맵을 생성합니다. 2) 영역별 불량 밀도를 계산합니다. 3) 전주 데이터와 비교 연산을 수행합니다. 4) Plotly를 활용해 대시보드 형태의 보고서를 출력합니다." [인터랙티브 대시보드 코드 생성]',
    analysis: '엔지니어가 데이터를 보는 관점(공간 분포)과 관리 지표(전주 대비 변화율)를 명확히 제시했습니다. AI는 단순 요약을 넘어 "분석 리포트"를 스스로 설계합니다.',
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
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '3rem' }}
            >
              <div className={`prompt-card ${item.type === 'general' ? 'general' : 'engineering'}`} style={{ height: '100%' }}>
                <span>{item.type === 'engineering' ? <Target size={18} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} /> : <MessageSquare size={18} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />}{item.title} - {item.type === 'general' ? '일반 프롬프트' : '엔지니어 프롬프트'}</span>
                <div className="prompt-box" style={{ minHeight: '120px' }}>
                  {item.prompt}
                </div>
                <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: item.type === 'general' ? '#fff1f2' : '#f0fdf4', borderRadius: '12px', border: item.type === 'general' ? '1px solid #fecaca' : '1px solid #bbf7d0' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: item.type === 'general' ? '#be123c' : '#166534' }}>AI의 반응 (Response):</strong>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5' }}>{item.result}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                <h4 style={{ color: item.type === 'general' ? '#be123c' : '#15803d', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 900 }}>
                  {item.type === 'general' ? <AlertCircle size={22} /> : <CheckCircle2 size={22} />}
                  핵심 분석 (Core Analysis)
                </h4>
                <p style={{ marginTop: '1rem', fontWeight: 800, fontSize: '1.05rem', lineHeight: '1.4' }}>{item.analysis}</p>
                <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#f8fafc', borderRadius: '16px', borderLeft: `4px solid ${item.type === 'general' ? '#64748b' : '#0071e3'}` }}>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {item.type === 'general' 
                      ? "엔지니어가 문제를 정의하지 않고 AI에게 정답을 요구하는 경우입니다. AI는 정보 부족으로 인해 원론적인 답변만 반복하며, 이는 곧 엔지니어의 시간 낭비로 이어집니다." 
                      : "엔지니어가 '도메인 지식'을 활용해 분석의 조건과 목적을 명확히 정의했습니다. AI는 엔지니어의 두뇌를 빌려 실제 동작하는 '솔루션'을 즉각적으로 도출해냅니다."}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 02. TCREI Deep Dive */}
      <section>
        <span className="section-label">02. 프롬프트 기술: TCREI</span>
        <h2>구글이 강조하는 <mark>프롬프트 5대 요소</mark></h2>
        <p className="section-intro">TCREI는 AI에게 주는 가장 완벽한 '작업지시서'의 뼈대입니다. 각 요소가 어떻게 AI의 답변 품질을 바꾸는지 상세히 분석해 보겠습니다.</p>
        
        <div className="technique-grid">
          <div className="technique-card">
            <h4>Task (작업)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>AI가 수행해야 할 구체적인 행동</p>
            <ul>
              <li className="bad">"데이터 분석해줘" (모호함)</li>
              <li className="good">"이상 구간 탐지 후 원인 인자를 순위별로 도출해줘" (구체적)</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4>Context (맥락)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>프로젝트의 배경과 목표</p>
            <ul>
              <li className="bad">"공정 데이터야"</li>
              <li className="good">"수율이 3% 급락한 신규 라인의 챔버 안정화 단계 데이터야"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4>Role (역할)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>AI에게 부여하는 전문적인 페르소나</p>
            <ul>
              <li className="bad">없음</li>
              <li className="good">"15년차 데이터 분석 전문 공정 엔지니어처럼 행동해줘"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4>Exemplar (예시)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>원하는 결과물의 구체적인 예시</p>
            <ul>
              <li className="bad">없음</li>
              <li className="good">"결과는 [시간 - 설비 - 이상항목 - 조치권고] 형태의 표로 만들어줘"</li>
            </ul>
          </div>
          <div className="technique-card">
            <h4>Input (입력)</h4>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>데이터의 형식, 제약 사항 등</p>
            <ul>
              <li className="bad">없음</li>
              <li className="good">"CSV 파일 로드, 비어있는 값은 0으로 처리, 단위는 마이크론"</li>
            </ul>
          </div>
        </div>

        <div className="deep-dive" style={{ marginTop: '3rem' }}>
          <h3>TCREI 적용 전 vs 후 상세 결과 비교</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginTop: '2rem' }}>
            <div className="yield-case-panel" style={{ background: '#f8fafc' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>기존 방식: 일반 지시 (Before)</span>
              <div className="prompt-box" style={{ margin: '1rem 0', fontSize: '0.9rem' }}>
                "센서 데이터 로그 분석해서 문제 있으면 알려주고 보고서 써줘."
              </div>
              <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', background: 'white' }}>
                <strong style={{ fontSize: '0.85rem', color: '#be123c' }}>AI의 상세 반응 (Response):</strong>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#475569', lineHeight: '1.6' }}>
                  "데이터 로그의 형식이 어떻게 되나요? CSV나 Excel 파일을 주시면 확인해 드릴 수 있습니다. 또한, 어떤 센서 데이터인지(온도, 압력 등) 알려주시면 일반적인 이상 징후를 찾아보겠습니다. 보고서에 특별히 포함하고 싶은 항목이 있다면 말씀해 주세요."
                </p>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed #e2e8f0' }}>
                  <strong style={{ fontSize: '0.8rem', color: '#be123c' }}>한계점:</strong>
                  <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', marginTop: '0.4rem', color: '#64748b' }}>
                    <li>데이터의 의미를 이해하지 못해 분석을 시작도 못 함</li>
                    <li>보고서의 수준이 엔지니어의 기대에 한참 못 미침</li>
                    <li>불필요한 대화가 2-3회 더 필요함</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="yield-case-panel" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
              <span style={{ color: '#15803d', fontSize: '0.9rem' }}>바이브 코딩: TCREI 적용 (After)</span>
              <div className="prompt-box" style={{ margin: '1rem 0', fontSize: '0.85rem', background: '#f0f7ff', borderColor: '#bbf7d0' }}>
                "네가 **15년차 공정 분석 전문가(Role)**로서, 이번 **신규 라인 수율 급락 원인 분석 프로젝트(Context)**를 수행해줘. 제공하는 **에칭 장비 압력 로그(Input)**에서 **UCL을 초과하는 이상 패턴을 탐지(Task)**하고, 원인 후보 3개를 도출해줘. 결과는 **[시간 - 이상값 - 원인후보 - 엔지니어확인사항] 순서의 표(Exemplar)**로 구성해줘."
              </div>
              <div style={{ padding: '1.5rem', border: '1px solid #bbf7d0', borderRadius: '16px', background: 'white' }}>
                <strong style={{ fontSize: '0.85rem', color: '#15803d' }}>AI의 상세 반응 (Response):</strong>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#334155', lineHeight: '1.6' }}>
                  "전문가로서 분석을 시작합니다. 1) 업로드된 압력 로그에서 통계적 공정 관리(SPC) 기준인 UCL을 산출하고 초과 시점을 모두 인덱싱하겠습니다. 2) 해당 시점의 압력 변화 속도와 변동폭을 분석하여 '가스 유량 불균형', '밸브 리크', '펌프 성능 저하' 가능성을 검토하겠습니다. 3) 요청하신 형식에 맞춰 아래와 같이 분석 표를 생성하고 보고서 초안을 작성합니다."
                </p>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed #bbf7d0' }}>
                  <strong style={{ fontSize: '0.8rem', color: '#15803d' }}>강점:</strong>
                  <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', marginTop: '0.4rem', color: '#166534' }}>
                    <li>첫 번째 질문만으로 즉시 실무 결과물 도출</li>
                    <li>엔지니어의 전문 지식(SPC, UCL)을 반영한 고도화된 분석</li>
                    <li>회의 자료로 즉시 활용 가능한 데이터 정리</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Pseudo-Prompt Expansion */}
      <section>
        <span className="section-label">03. 고급 기술: Pseudo-Prompt</span>
        <h2>코딩 없이 <mark>로직을 설계</mark>하는 법</h2>
        <p className="section-intro">
          슈도 프롬프트(Pseudo-Prompt)는 자연어와 프로그래밍 언어의 중간 형태입니다. 복잡한 문제를 단계별(Step-by-step)로 쪼개어 지시하면 AI가 훨씬 더 정교한 논리 구조를 가진 결과물을 만들어냅니다.
        </p>

        <div className="prompt-compare-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div className="yield-case-panel" style={{ padding: '2.5rem' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>일반적인 지시 (Natural Language)</h4>
            <div className="prompt-box" style={{ background: '#f8fafc' }}>
              "수율 데이터 파일에서 수율이 낮은 날만 골라서 파트장님께 보낼 메일로 요약해줘."
            </div>
            <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#f1f5f9', borderRadius: '12px', borderLeft: '4px solid #64748b' }}>
              <strong>AI의 반응:</strong> "수율이 어느 정도 이하일 때 '낮다'고 판단할까요? 그리고 메일에는 어떤 수치들을 포함할까요? 데이터를 먼저 주시면 제가 임의로 기준을 잡아볼까요?" (모호한 답변)
            </div>
          </div>

          <div className="yield-case-panel" style={{ padding: '2.5rem', border: '2px solid var(--accent)' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>슈도 프롬프트 지시 (Pseudo-Code)</h4>
            <div className="prompt-box" style={{ background: '#0f172a', color: '#38bdf8' }}>
{`[SETTING] 
- TARGET_YIELD = 94.0%
- REPORT_RECIPIENT = '품질혁신 파트장'

[STEP 1]
- daily_report.csv 파일을 로드한다.

[STEP 2]
- 'Yield' 컬럼의 값이 TARGET_YIELD 미만인 행(Row)만 필터링한다.

[STEP 3]
- 필터링된 데이터에서 [날짜, 공정명, 수율, 전일대비차이] 항목을 추출한다.

[STEP 4]
- 추출된 정보를 바탕으로 REPORT_RECIPIENT에게 보낼 보고용 메일 초안을 HTML로 생성한다.`}
            </div>
            <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#f0f7ff', borderRadius: '12px', borderLeft: '4px solid #0071e3' }}>
              <strong>AI의 반응:</strong> "지시하신 로직에 따라 스크립트를 작성합니다. 1) 수율 기준 94% 미만 데이터를 완벽히 추출하는 Python 코드를 생성했습니다. 2) 보고용 HTML 메일 양식을 깔끔하게 제작했습니다. 데이터를 주시면 바로 실행하겠습니다." (명확하고 실행 가능한 답변)
            </div>
          </div>
        </div>

        <div className="deep-dive" style={{ background: '#fff' }}>
          <h3>현장 엔지니어를 위한 슈도 프롬프트 작성 3원칙</h3>
          <div className="technique-grid" style={{ marginTop: '2rem' }}>
            <div className="technique-card">
              <h4>1. 변수 정의 (SET)</h4>
              <p>기준이 되는 수치(Spec, Threshold, 목표값)를 가장 먼저 명시하세요. AI가 계산 로직에서 이 수치를 '절대적인 기준'으로 사용합니다.</p>
            </div>
            <div className="technique-card">
              <h4>2. 단계별 분리 (STEP)</h4>
              <p>데이터 로드 {'->'} 필터링 {'->'} 계산 {'->'} 출력의 과정을 STEP 단위로 나누어 지시하세요. AI의 논리적 오류를 사전에 방지할 수 있습니다.</p>
            </div>
            <div className="technique-card">
              <h4>3. 조건문 활용 (IF/ELSE)</h4>
              <p>특정 상황(예: 불량이 발생했을 때만, 혹은 데이터가 비어있을 때)에서 수행할 동작을 명확히 구분하여 지시의 정밀도를 높이세요.</p>
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
              <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '12px', textAlign: 'left' }}>
                <strong>AI 결과 (Response):</strong>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem', lineHeight: '1.5' }}>
                  "불량은 화면 전반에 분포해 있으며, 특히 중앙부에 집중되어 있는 것으로 보입니다. 전체 불량 수량은 125건이며, 정상 제품 대비 불량률은 2.5%입니다. 추가적인 데이터가 있으면 상세 보고서를 작성해 드릴까요?"
                </p>
              </div>
              <p style={{ marginTop: '0.8rem', color: '#be123c', fontWeight: 900 }}>→ 한계: 현장 개선을 위한 데이터 근거 부족</p>
            </div>
          </div>

          <div className="yield-case-panel" style={{ border: '2px solid var(--accent)' }}>
            <span style={{ color: 'var(--accent)' }}>엔지니어 B (바이브 코딩형)</span>
            <div className="prompt-box" style={{ fontSize: '0.85rem', background: '#f0f7ff' }}>
              "검사 데이터의 X, Y 좌표를 사용하여 패널 불량 분포 Heatmap을 생성해줘. 특히 Panel edge 10mm 이내의 불량만 별도로 카운트해서 비율을 계산해. 그리고 불량 유형(Mura, Dot)별로 색상을 구분해서 시각화하고, 발견된 패턴을 품질 파트장에게 보고하는 메일 초안으로 작성해줘."
            </div>
            <div style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem', textAlign: 'center' }}>
              <ArrowRight size={24} style={{ color: 'var(--accent)', transform: 'rotate(90deg)', marginBottom: '1rem' }} />
              <div style={{ padding: '1.2rem', background: '#f0f7ff', borderRadius: '12px', textAlign: 'left' }}>
                <strong>AI 결과 (Response):</strong>
                <p style={{ fontSize: '0.85rem', color: '#15803d', marginTop: '0.5rem', lineHeight: '1.5' }}>
                  "분석 완료. 1) 패널 좌표 기반 2D Density Plot을 생성했습니다. 중앙부에 Mura 집중, 하단 Edge에 Dot 불량이 확인됩니다. 2) Edge 10mm 이내 불량은 총 45건으로 전체 불량의 36%를 차지합니다. 3) 파트장 보고용으로 'Edge 공정 점검 권고'가 포함된 HTML 보고서를 생성했습니다."
                </p>
              </div>
              <p style={{ marginTop: '0.8rem', color: '#15803d', fontWeight: 900 }}>→ 강점: 즉시 조치 및 보고 가능한 수준</p>
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
        .bad { padding-left: 1.5rem; position: relative; color: #be123c; font-weight: 700; }
        .bad::before { content: "✕"; position: absolute; left: 0; }
        .good { padding-left: 1.5rem; position: relative; color: #15803d; font-weight: 700; }
        .good::before { content: "✓"; position: absolute; left: 0; }
        .comparison-row:last-child { border-bottom: none; }
      `}</style>
    </div>
  );
}
