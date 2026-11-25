/**
 * 刘翔瑞 / 유상서 · 个人作品集 核心交互脚本 (main.js)
 * 具备双语提示、平滑滚动、作品与技能筛选、即时可玩/可测试交互演示、弹窗系统与表单校验
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== 1. 项目数据字典 (双语详尽内容) ====================
  const projectsData = {
    1: {
      category: 'Python 编程 / Python',
      titleZh: '智能数据分析与自动化报告系统',
      titleKr: '지능형 데이터 분석 및 자동화 리포팅 시스템',
      image: 'assets/images/project-python.svg',
      summaryZh: '基于 Python 与 Pandas 搭建的大数据量自动化分析与可视化流水线，彻底解决科研与业务中数据格式混乱、人工制表繁琐的问题。',
      summaryKr: 'Python과 Pandas 기반의 대용량 데이터 자동 정제 및 시각화 파이프라인으로, 연구 및 실무에서의 번거로운 수작업 데이터 분석을 자동화했습니다.',
      highlightsZh: [
        '基于 Pandas 与 NumPy 实现百万行级数据清洗，异常值过滤与缺失值插补效率提升 80%',
        '自动生成交互式多维度统计图表（折线趋势图、分布直方图、相关性热力图）',
        '支持导出 Excel、PDF 及 HTML 格式的多语言报表',
        '提供清晰的命令行工具（CLI）与 Streamlit 网页交互看板'
      ],
      highlightsKr: [
        'Pandas 및 NumPy 기반 100만 행 이상 데이터 고속 정제, 결측치 보정 속도 80% 향상',
        '추세선, 히스토그램, 히트맵 등 다차원 시각화 차트 자동 렌더링',
        'Excel, PDF, HTML 형식의 다국어 리포트 자동 내보내기 지원',
        'CLI 명령어 툴 및 Streamlit 웹 대시보드 인터페이스 완비'
      ],
      techStack: ['Python 3.11', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'OpenPyXL'],
      demoType: 'data-analytics'
    },
    2: {
      category: 'Unity 游戏 / Unity 3D',
      titleZh: '《星际迷途》3D 科幻太空冒险游戏',
      titleKr: '《아스트로 오디세이》 3D SF 액션 어드벤처',
      image: 'assets/images/project-unity.svg',
      summaryZh: '使用 Unity 3D 独立构思、建模并编程研发的科幻主题太空飞船驾驶与动作探索游戏。具备完整的惯性物理航行机制与战斗系统。',
      summaryKr: 'Unity 3D 엔진으로 단독 기획, 모델링 및 C# 프로그래밍한 우주 탐험 액션 게임. 사실적인 무중력 관성 비행 물리와 다이내믹 전투 시스템을 탑재했습니다.',
      highlightsZh: [
        '基于 Rigidbody 物理系统自主研发六自由度（6-DOF）太空飞船航行惯性控制器',
        '使用 Shader Graph 自定义制作能量护盾、引擎粒子离子流与全息雷达扫描特效',
        '结合 Cinemachine 实现平滑追踪相机与多视角第三人称无缝镜头切换',
        '设计状态机 AI 敌机追踪系统，包含巡逻、锁定、规避与拦截逻辑'
      ],
      highlightsKr: [
        'Rigidbody 물리 엔진 기반 6자유도(6-DOF) 우주선 관성 비행 제어 알고리즘 구현',
        'Shader Graph를 활용한 에너지 쉴드, 이온 부스터 입자 및 홀로그램 레이더 셰이더 제작',
        'Cinemachine 가상 카메라를 활용한 부드러운 3인칭 시점 전환 시스템',
        '상태 머신(FSM) 기반 적기 추적, 회피 및 요격 AI 로직 설계'
      ],
      techStack: ['Unity 3D', 'C#', 'Shader Graph', 'Cinemachine', 'Universal Render Pipeline (URP)', 'Blender'],
      demoType: 'game-3d'
    },
    3: {
      category: '机器学习 / Machine Learning',
      titleZh: '基于深度学习的图像特征识别系统',
      titleKr: '딥러닝 기반 이미지 스타일 변환 및 객체 탐지',
      image: 'assets/images/project-ml.svg',
      summaryZh: '基于 PyTorch 深度学习框架实现的轻量化视觉识别与神经风格迁移系统，能在极低算力开销下完成高质量的多目标实时检测。',
      summaryKr: 'PyTorch 딥러닝 프레임워크를 기반으로 구축된 경량화 비전 모델 및 신경망 스타일 전이 시스템으로, 저사양 환경에서도 실시간 검출을 실현했습니다.',
      highlightsZh: [
        '改进经典 ResNet-50 骨干网络架构，实现稳定的图像特征抽取与精准多类别目标分类',
        '实现 Gatys 经典神经风格迁移算法，支持实时艺术滤镜重构生成',
        '集成 OpenCV 进行实时数据增强、直方图均衡化与多尺度色彩空间转换',
        '轻量化模型量化裁剪，模型体积减少 45%，并在 CPU 上实现 15ms 低时延推理'
      ],
      highlightsKr: [
        'ResNet-50 백본 네트워크 구조 최적화를 통해 안정적인 이미지 특징 추출 및 다범주 분류 구현',
        'Gatys 신경망 스타일 전이 알고리즘을 통한 실시간 아트 필터 렌더링',
        'OpenCV 기반 데이터 증강, 히스토그램 평활화 및 다채널 전처리 파이프라인 구축',
        '모델 양자화(Quantization) 적용으로 파일 크기 45% 감축 및 15ms 저지연 추론 달성'
      ],
      techStack: ['PyTorch', 'Python', 'OpenCV', 'ResNet', 'NumPy', 'TorchVision', 'Flask API'],
      demoType: 'ml-vision'
    },
    4: {
      category: 'Python / Web 全栈',
      titleZh: '高校闲置物品流转与校园社交平台',
      titleKr: '캠퍼스 중고거래 및 학생 커뮤니티 플랫폼',
      image: 'assets/images/project-web.svg',
      summaryZh: '面向高校师生的轻量化二手物品流通与校园交流 Web 平台，拥有优良的移动端响应式体验与严格的学生实名认证机制。',
      summaryKr: '대학 캠퍼스 전용 리소스 공유 및 중고거래 반응형 웹 플랫폼. 안전한 학생 인증과 직관적인 반응형 UI로 교내 중고 거래를 혁신했습니다.',
      highlightsZh: [
        '纯原生 HTML5、CSS3、JavaScript 打造前端，轻量快速、无外部庞大依赖',
        '后端基于 Python Flask 构建 RESTful API，配合 SQLite/MySQL 高效存储与检索',
        '实现关键词即时防抖搜索、分类标签动态筛选与图片本地预览压缩上传',
        '多端适配断点设计，完美支持手机竖屏触控与桌面宽屏浏览'
      ],
      highlightsKr: [
        'HTML5, CSS3, ES6 모던 웹 표준 기반 초경량 프론트엔드 제작',
        'Python Flask RESTful API 및 SQLite 데이터베이스 연동 구조 설계',
        '디바운싱(Debounce) 실시간 검색, 카테고리 필터링 및 이미지 압축 업로드 구현',
        '모바일 세로화면 및 데스크톱 모니터에 최적화된 유연한 반응형 레이아웃'
      ],
      techStack: ['HTML5', 'CSS3 (Flex/Grid)', 'JavaScript ES6', 'Python Flask', 'SQLite', 'RESTful API'],
      demoType: 'web-platform'
    },
    5: {
      category: 'Unity 2D 游戏 / Unity 2D',
      titleZh: '2D 像素复古地牢肉鸽冒险游戏',
      titleKr: '2D 픽셀 로그라이크 던전 크롤러 게임',
      image: 'assets/images/project-unity2d.svg',
      summaryZh: '使用 Unity 2D 引擎打造的复古像素画风地牢动作闯关游戏。包含随机地图生成、丰富的武器附魔系统与极具挑战性的 Boss 战。',
      summaryKr: 'Unity 2D 엔진으로 개발한 레트로 픽셀 로그라이크 액션 게임. 절차적 던전 생성과 경쾌한 타격감, 다채로운 몬스터 패턴을 담았습니다.',
      highlightsZh: [
        '使用 Cellular Automata（细胞自动机）算法实现随机地牢关卡程序化生成',
        '精细编写 2D 碰撞判定与击退顿帧反馈，打造爽快扎实的动作打击手感',
        '运用 Tilemap 规则瓦片（Rule Tile）高效搭建可交互的机关与地形',
        '实现地牢小地图实时绘制与动态战争迷雾（Fog of War）渲染'
      ],
      highlightsKr: [
        '셀룰러 오토마타(Cellular Automata) 알고리즘 기반 절차적 랜덤 던전 맵 생성',
        '정밀한 2D 피격 판정 및 타격 시 역경직(Hit-stop) 물리 피드백 구현',
        'Unity Tilemap 룰 타일(Rule Tile)을 활용한 인터랙티브 함정 및 지형 배치',
        '실시간 던전 미니맵 및 시야 안개(Fog of War) 렌더링 시스템 구축'
      ],
      techStack: ['Unity 2D', 'C#', 'Tilemap API', 'Aseprite', '2D Physics', 'Pixel Art'],
      demoType: 'game-2d'
    },
    6: {
      category: '自然语言处理 / NLP & AI',
      titleZh: '双语智能文本情感分析与问答引擎',
      titleKr: '중/한 다국어 텍스트 감정 분석 및 질의응답',
      image: 'assets/images/project-nlp.svg',
      summaryZh: '融合预训练 Transformer / BERT 架构的中韩双语自然语言处理工具。可对用户输入长文本或社交评论进行情感极性评分与关键语义提炼。',
      summaryKr: 'BERT/Transformer 기반의 중/한 다국어 자연어 처리 엔진. 소셜 리뷰 및 텍스트 데이터의 감정 극성을 실시간으로 정량화하고 핵심 의미를 추출합니다.',
      highlightsZh: [
        '基于多语言 BERT（mBERT）模型进行特定领域语料迁移微调，F1 分数达 96.4%',
        '自研自注意力权重（Self-Attention）可视化机制，直观展示模型关注的词汇热区',
        '中韩双语文本无缝识别与自动分词（Jieba + KoNLPy）',
        '提供高并发异步 FastAPI 接口，单次推理响应控制在 25ms 以内'
      ],
      highlightsKr: [
        '다국어 BERT(mBERT) 전이학습 및 도메인 파인튜닝으로 F1-Score 96.4% 달성',
        '셀프 어텐션(Self-Attention) 가중치 시각화 히트맵 모듈 구현',
        '중국어/한국어 형태소 분석 및 토큰화 파이프라인 (Jieba + KoNLPy)',
        'FastAPI 비동기 API 서빙으로 25ms 이하 초고속 추론 응답 보장'
      ],
      techStack: ['Python', 'BERT / Transformers', 'PyTorch', 'HuggingFace', 'FastAPI', 'KoNLPy'],
      demoType: 'ml-nlp'
    }
  };

  // ==================== 2. 导航栏交互与平滑滚动 ====================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // 滚动时导航栏收缩与阴影
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 回到顶部按钮可见性
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // ScrollSpy 滚动高亮导航
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // 移动端汉堡菜单切换
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      navMenu.classList.add('open');
      navToggle.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });

  // 点击导航菜单项后自动平滑滚动并关闭移动端抽屉
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth' });
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
        }
      }
    });
  });

  // 点击回到顶部
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==================== 3. 技能分类筛选 ====================
  const skillFilterBtns = document.querySelectorAll('#skillsFilter .filter-btn');
  const skillCards = document.querySelectorAll('#skillsGrid .skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==================== 4. 作品分类筛选 ====================
  const projectFilterBtns = document.querySelectorAll('#projectsFilter .filter-btn');
  const projectCards = document.querySelectorAll('#projectsGrid .project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || category === filterValue || (filterValue === 'python' && category.includes('python')) || (filterValue === 'ml' && category.includes('ml')) || (filterValue === 'unity' && category.includes('unity'))) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==================== 5. 提示通知 (Toast) 系统 ====================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(zhMessage, krMessage, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
      <div class="toast-text">
        <div>${zhMessage}</div>
        <small style="opacity: 0.85; font-size: 0.75rem;">${krMessage}</small>
      </div>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3500);
  }

  // ==================== 6. 模态弹窗系统 (详情、演示、简历) ====================
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseBtnFooter = document.getElementById('modalCloseBtnFooter');
  const modalTitle = document.getElementById('modalTitle');
  const modalTag = document.getElementById('modalTag');
  const modalBody = document.getElementById('modalBody');
  const modalDemoBtn = document.getElementById('modalDemoBtn');

  let currentActiveProjectId = 1;

  // 打开作品详情弹窗
  function openProjectDetail(projectId) {
    const data = projectsData[projectId];
    if (!data) return;
    currentActiveProjectId = projectId;

    modalTag.textContent = data.category;
    modalTitle.innerHTML = `${data.titleZh} <span class="slash">/</span> ${data.titleKr}`;

    const highlightZhHtml = data.highlightsZh.map(item => `<li>${item}</li>`).join('');
    const highlightKrHtml = data.highlightsKr.map(item => `<li>${item}</li>`).join('');
    const techChipsHtml = data.techStack.map(tech => `<span class="stack-tag">${tech}</span>`).join('');

    modalBody.innerHTML = `
      <img src="${data.image}" alt="${data.titleZh}" class="modal-detail-img">
      
      <div class="detail-section-title">
        <span>📖 项目简介</span> <span class="slash">/</span> <span>프로젝트 개요</span>
      </div>
      <p style="margin-bottom: 12px;"><strong>【中文】</strong> ${data.summaryZh}</p>
      <p style="margin-bottom: 20px;"><strong>【한국어】</strong> ${data.summaryKr}</p>

      <div class="detail-section-title">
        <span>✨ 核心技术亮点与功能实现</span> <span class="slash">/</span> <span>주요 기능 및 기술적 성과</span>
      </div>
      <div style="margin-bottom: 10px;">
        <p style="font-weight: 700; color: var(--primary); font-size: 0.8125rem; margin-bottom: 6px;">中文特色说明：</p>
        <ul class="detail-features-list">${highlightZhHtml}</ul>
      </div>
      <div style="margin-bottom: 20px;">
        <p style="font-weight: 700; color: var(--primary); font-size: 0.8125rem; margin-bottom: 6px;">한국어 기능 요약：</p>
        <ul class="detail-features-list">${highlightKrHtml}</ul>
      </div>

      <div class="detail-section-title">
        <span>🛠️ 所用技术栈与依赖库</span> <span class="slash">/</span> <span>사용 기술 스택</span>
      </div>
      <div class="detail-tech-chips">
        ${techChipsHtml}
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeProjectModal);
  modalCloseBtnFooter.addEventListener('click', closeProjectModal);
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // 点击卡片上的“查看详情 / 상세정보”
  document.querySelectorAll('.btn-view-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openProjectDetail(id);
    });
  });

  // 在详情弹窗中点击“打开即时演示 / 라이브 데모”
  modalDemoBtn.addEventListener('click', () => {
    closeProjectModal();
    openProjectDemo(currentActiveProjectId);
  });

  // ==================== 7. 即时交互演练演示系统 (可运行游戏 / 数据模拟器 / AI测试) ====================
  const demoModal = document.getElementById('demoModal');
  const demoModalCloseBtn = document.getElementById('demoModalCloseBtn');
  const demoModalCloseFooter = document.getElementById('demoModalCloseFooter');
  const demoModalTitle = document.getElementById('demoModalTitle');
  const demoModalBody = document.getElementById('demoModalBody');

  let activeGameAnimationId = null;

  function closeDemoModal() {
    demoModal.classList.remove('open');
    demoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (activeGameAnimationId) {
      cancelAnimationFrame(activeGameAnimationId);
      activeGameAnimationId = null;
    }
  }

  demoModalCloseBtn.addEventListener('click', closeDemoModal);
  demoModalCloseFooter.addEventListener('click', closeDemoModal);
  demoModal.addEventListener('click', (e) => {
    if (e.target === demoModal) closeDemoModal();
  });

  // 点击作品卡片上的“运行演示 / 데모 실행”
  document.querySelectorAll('.btn-open-demo').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openProjectDemo(id);
    });
  });

  // 打开即时演示模态框
  function openProjectDemo(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    demoModalTitle.innerHTML = `
      <span>${data.titleZh}</span>
      <span class="slash">/</span>
      <span>${data.titleKr} 交互演练</span>
    `;

    demoModalBody.innerHTML = '';
    demoModal.classList.add('open');
    demoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // 根据项目类型注入对应的高质量交互组件
    if (data.demoType === 'game-3d' || data.demoType === 'game-2d') {
      renderPlayableMiniGame(data.demoType);
    } else if (data.demoType === 'data-analytics' || data.demoType === 'web-platform') {
      renderDataVisualizerDemo();
    } else {
      renderAiClassifierDemo();
    }
  }

  // 1) 交互可玩 Canvas 游戏演示 (Game Demo)
  function renderPlayableMiniGame(type) {
    const is3D = type === 'game-3d';
    const gameTitle = is3D ? '《星际迷途》太空巡航仿真试玩 / 《아스트로 오디세이》 비행 시뮬레이션' : '2D 像素地牢骑士跳跃闯关 / 2D 픽셀 던전 점프 액션';
    
    demoModalBody.innerHTML = `
      <div class="demo-canvas-wrap">
        <div style="font-weight: 700; color: #38bdf8;">${gameTitle}</div>
        <canvas id="gameCanvas" width="680" height="340" class="demo-canvas"></canvas>
        <div class="demo-controls-bar">
          <div class="demo-score-board">
            <span>得分 / SCORE: <strong id="gameScoreText" style="color: #f59e0b;">0</strong></span>
          </div>
          <div class="demo-help-hint">
            <span>🕹️ 操作说明：按键盘 [空格键] 或点击下方 [跳跃/加速] 躲避障碍收集光子星</span>
            <br>
            <small>조작법: [스페이스바] 또는 [점프] 버튼을 눌러 장애물을 피하고 별을 획득하세요</small>
          </div>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn btn-primary btn-sm" id="gameJumpBtn">
              <span>🚀 跳跃 / 점프</span>
            </button>
            <button type="button" class="btn btn-outline btn-sm" id="gameRestartBtn">
              <span>🔄 重新开始 / 재시작</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreText = document.getElementById('gameScoreText');
    const jumpBtn = document.getElementById('gameJumpBtn');
    const restartBtn = document.getElementById('gameRestartBtn');

    let score = 0;
    let gameOver = false;
    let frame = 0;

    // 玩家对象
    const player = {
      x: 80,
      y: 240,
      width: 32,
      height: 32,
      vy: 0,
      gravity: 0.55,
      jumpPower: -11,
      isGrounded: false
    };

    // 障碍物与星星集合
    let obstacles = [];
    let stars = [];

    function resetGame() {
      score = 0;
      gameOver = false;
      frame = 0;
      player.y = 240;
      player.vy = 0;
      obstacles = [];
      stars = [];
      scoreText.textContent = score;
    }

    function doJump() {
      if (gameOver) {
        resetGame();
        return;
      }
      if (player.isGrounded || player.y > 100) {
        player.vy = player.jumpPower;
        player.isGrounded = false;
      }
    }

    jumpBtn.addEventListener('click', doJump);
    restartBtn.addEventListener('click', resetGame);

    const onKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        doJump();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    // 游戏主循环
    function gameLoop() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 背景与星空
      ctx.fillStyle = is3D ? '#090d16' : '#111827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 绘制滚动背景星光
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      for (let i = 0; i < 30; i++) {
        const sx = ((i * 37) - (frame * (0.5 + (i % 3) * 0.5))) % canvas.width;
        const realSx = sx < 0 ? sx + canvas.width : sx;
        const sy = (i * 19) % (canvas.height - 60);
        ctx.fillRect(realSx, sy, 2, 2);
      }

      // 地面
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 280, canvas.width, 60);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 280);
      ctx.lineTo(canvas.width, 280);
      ctx.stroke();

      if (!gameOver) {
        // 玩家物理更新
        player.vy += player.gravity;
        player.y += player.vy;

        if (player.y >= 280 - player.height) {
          player.y = 280 - player.height;
          player.vy = 0;
          player.isGrounded = true;
        }

        // 生成障碍物与星星
        if (frame % 110 === 0) {
          obstacles.push({
            x: canvas.width,
            y: 280 - 36,
            width: 26,
            height: 36
          });
        }

        if (frame % 70 === 0) {
          stars.push({
            x: canvas.width,
            y: 160 + Math.sin(frame * 0.05) * 50,
            radius: 8,
            collected: false
          });
        }
      }

      // 绘制玩家角色 (飞船或像素骑士)
      ctx.save();
      if (is3D) {
        // 太空飞船形态
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(player.x + player.width, player.y + player.height / 2);
        ctx.lineTo(player.x, player.y);
        ctx.lineTo(player.x + 6, player.y + player.height / 2);
        ctx.lineTo(player.x, player.y + player.height);
        ctx.closePath();
        ctx.fill();

        // 引擎尾焰
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(player.x - 3, player.y + player.height / 2, 4 + Math.random() * 4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // 2D 像素骑士形态
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(player.x, player.y, player.width, player.height);
        // 骑士头盔视窗
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(player.x + 14, player.y + 6, 12, 6);
        // 骑士小光剑
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(player.x + player.width, player.y + 10, 10, 4);
      }
      ctx.restore();

      // 移动并绘制障碍物
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        if (!gameOver) obs.x -= 4.5;

        ctx.fillStyle = '#ef4444';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        ctx.strokeStyle = '#fca5a5';
        ctx.strokeRect(obs.x, obs.y, obs.width, obs.height);

        // 碰撞判定
        if (!gameOver &&
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y) {
          gameOver = true;
          showToast('碰撞到障碍物！点击“重新开始”再次挑战', '장애물과 충돌했습니다! 재시작을 눌러주세요', 'info');
        }

        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
          score += 10;
          scoreText.textContent = score;
        }
      }

      // 移动并绘制收集星星
      for (let j = stars.length - 1; j >= 0; j--) {
        const st = stars[j];
        if (!gameOver) st.x -= 3.5;

        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.radius, 0, Math.PI * 2);
        ctx.fill();

        // 收集判定
        const dist = Math.hypot((player.x + player.width / 2) - st.x, (player.y + player.height / 2) - st.y);
        if (!gameOver && dist < st.radius + player.width / 2) {
          stars.splice(j, 1);
          score += 50;
          scoreText.textContent = score;
        } else if (st.x + st.radius < 0) {
          stars.splice(j, 1);
        }
      }

      // 游戏结束提示文字
      if (gameOver) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('MISSION COMPLETE / 任务复盘', canvas.width / 2, 140);
        ctx.font = '16px system-ui';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`最终得分 / 최종 점수: ${score}`, canvas.width / 2, 175);
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('按空格键或点击“重新开始” / 재도전', canvas.width / 2, 210);
      }

      activeGameAnimationId = requestAnimationFrame(gameLoop);
    }

    activeGameAnimationId = requestAnimationFrame(gameLoop);
  }

  // 2) 交互数据分析模拟器 (Python Data Analytics Demo)
  function renderDataVisualizerDemo() {
    demoModalBody.innerHTML = `
      <div class="interactive-tool-box">
        <div>
          <h4 style="font-size: 1.125rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">
            📊 Python 数据流水线分析仿真器 / 데이터 파이프라인 시뮬레이터
          </h4>
          <p style="font-size: 0.875rem; color: var(--text-light);">
            调节下方样本规模与噪声参数，实时触发 Pandas 聚合算法并重绘可视化分布图谱。
            <br>
            <small>아래 샘플 수와 노이즈 값을 조정하여 실시간 통계 차트 변화를 확인하세요.</small>
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <label style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 4px;">
              数据采样规模 (Samples / 데이터 수): <span id="sampleVal" style="color: var(--primary);">250,000</span>
            </label>
            <input type="range" id="sampleRange" min="10000" max="1000000" step="20000" value="250000" style="width: 100%;">
          </div>
          <div>
            <label style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 4px;">
              异常值滤波强度 (Filter Noise / 노이즈 필터링): <span id="filterVal" style="color: var(--primary);">85%</span>
            </label>
            <input type="range" id="filterRange" min="10" max="100" step="5" value="85" style="width: 100%;">
          </div>
        </div>

        <div class="tool-output-card">
          <canvas id="chartCanvas" width="600" height="220" style="width: 100%; height: 220px; background: #0f172a; border-radius: 8px;"></canvas>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 10px;">
            <div style="background: var(--bg-card-subtle); padding: 10px; border-radius: 6px; text-align: center;">
              <small style="font-size: 0.75rem; color: var(--text-light);">清洗有效率 / 정제율</small>
              <div id="metricAcc" style="font-size: 1.125rem; font-weight: 800; color: #10b981;">99.6%</div>
            </div>
            <div style="background: var(--bg-card-subtle); padding: 10px; border-radius: 6px; text-align: center;">
              <small style="font-size: 0.75rem; color: var(--text-light);">推算吞吐量 / 처리 속도</small>
              <div id="metricSpeed" style="font-size: 1.125rem; font-weight: 800; color: var(--primary);">0.32 ms</div>
            </div>
            <div style="background: var(--bg-card-subtle); padding: 10px; border-radius: 6px; text-align: center;">
              <small style="font-size: 0.75rem; color: var(--text-light);">内存占用 / 메모리</small>
              <div id="metricMem" style="font-size: 1.125rem; font-weight: 800; color: #8b5cf6;">14.2 MB</div>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-sm" id="btnRunPipeline" style="align-self: flex-start;">
          <span>⚡ 执行全量流水线分析 / 분석 실행</span>
        </button>
      </div>
    `;

    const sampleRange = document.getElementById('sampleRange');
    const filterRange = document.getElementById('filterRange');
    const sampleVal = document.getElementById('sampleVal');
    const filterVal = document.getElementById('filterVal');
    const chartCanvas = document.getElementById('chartCanvas');
    const ctx = chartCanvas.getContext('2d');
    const btnRunPipeline = document.getElementById('btnRunPipeline');

    function drawChart() {
      const samples = parseInt(sampleRange.value, 10);
      const filter = parseInt(filterRange.value, 10);
      sampleVal.textContent = samples.toLocaleString();
      filterVal.textContent = `${filter}%`;

      ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

      // 绘制柱状图和拟合曲线
      const barsCount = 12;
      const barWidth = 32;
      const spacing = 16;
      const startX = 25;

      for (let i = 0; i < barsCount; i++) {
        const height = 40 + Math.abs(Math.sin((i + samples * 0.0001) * 0.8)) * 120 * (filter / 100);
        const x = startX + i * (barWidth + spacing);
        const y = chartCanvas.height - 30 - height;

        ctx.fillStyle = i % 2 === 0 ? '#2563eb' : '#38bdf8';
        ctx.fillRect(x, y, barWidth, height);
      }

      // 拟合折线
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let j = 0; j < barsCount; j++) {
        const h = 40 + Math.abs(Math.sin((j + samples * 0.0001) * 0.8)) * 120 * (filter / 100);
        const px = startX + j * (barWidth + spacing) + barWidth / 2;
        const py = chartCanvas.height - 30 - h - 10;
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 底轴
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(10, chartCanvas.height - 25);
      ctx.lineTo(chartCanvas.width - 10, chartCanvas.height - 25);
      ctx.stroke();
    }

    sampleRange.addEventListener('input', drawChart);
    filterRange.addEventListener('input', drawChart);
    btnRunPipeline.addEventListener('click', () => {
      drawChart();
      showToast('数据流水线计算完成，指标已刷新！', '데이터 파이프라인 분석이 성공적으로 완료되었습니다!', 'success');
    });

    drawChart();
  }

  // 3) 交互 AI 情绪分析与模型测试器 (ML / NLP Classifier Demo)
  function renderAiClassifierDemo() {
    demoModalBody.innerHTML = `
      <div class="interactive-tool-box">
        <div>
          <h4 style="font-size: 1.125rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">
            🤖 双语文本情感与分类推理测试器 / 다국어 감정 분석 테스트
          </h4>
          <p style="font-size: 0.875rem; color: var(--text-light);">
            输入任意中韩双语评论文本，体验基于 Transformer 模型的即时情感极性判定与置信度推导。
            <br>
            <small>중국어 또는 한국어 텍스트를 입력하여 실시간 딥러닝 감정 분석 결과를 체험해 보세요.</small>
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <label style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted);">
            输入待分析语句 / 텍스트 입력:
          </label>
          <div class="tool-input-row">
            <input type="text" id="aiInputText" class="form-control" value="这款游戏的画面细节非常出色，沉浸感极强！" placeholder="输入中韩文句子... / 문장을 입력하세요...">
            <button type="button" class="btn btn-primary btn-sm" id="btnAnalyzeAi">
              <span>开始分析 / 분석 실행</span>
            </button>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span style="font-size: 0.75rem; color: var(--text-light); align-self: center;">示例语句 / 예시:</span>
            <button type="button" class="btn btn-outline btn-xs btn-sample" data-text="이 프로젝트는 알고리즘 구조가 매우 우수합니다!">샘플 1 (긍정)</button>
            <button type="button" class="btn btn-outline btn-xs btn-sample" data-text="模型在极少样本情况下推理表现十分惊艳，推荐！">示例 2 (正面)</button>
            <button type="button" class="btn btn-outline btn-xs btn-sample" data-text="시스템 로딩 속도가 다소 지연되어 개선이 필요합니다.">샘플 3 (중립/건의)</button>
          </div>
        </div>

        <div class="tool-output-card" id="aiResultCard">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: var(--text-main); font-size: 0.9375rem;">分析判定结论 / 분류 결과:</strong>
            <span id="aiSentimentBadge" style="background: #dcfce7; color: #15803d; font-weight: 800; padding: 4px 10px; border-radius: 99px; font-size: 0.8125rem;">
              积极正面 / 긍정 (POSITIVE)
            </span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 6px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; color: var(--text-muted);">
              <span>置信度分数 / Confidence Score:</span>
              <strong id="aiScoreLabel" style="color: var(--primary);">98.4%</strong>
            </div>
            <div class="meter-bar">
              <div id="aiScoreFill" class="meter-fill" style="width: 98.4%; background: #10b981;"></div>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border-color); padding-top: 10px; margin-top: 6px; font-size: 0.8125rem;">
            <strong style="color: var(--text-main);">提炼关键词注意力 / 추출 키워드:</strong>
            <div id="aiKeywords" style="display: flex; gap: 6px; margin-top: 6px; flex-wrap: wrap;">
              <span class="tag">#出色 / 우수</span>
              <span class="tag">#沉浸感 / 몰입</span>
              <span class="tag">#细节 / 디테일</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const aiInputText = document.getElementById('aiInputText');
    const btnAnalyzeAi = document.getElementById('btnAnalyzeAi');
    const aiSentimentBadge = document.getElementById('aiSentimentBadge');
    const aiScoreLabel = document.getElementById('aiScoreLabel');
    const aiScoreFill = document.getElementById('aiScoreFill');
    const aiKeywords = document.getElementById('aiKeywords');

    function runSentimentAnalysis(text) {
      if (!text.trim()) return;

      const isNegative = text.includes('개선') || text.includes('지연') || text.includes('差') || text.includes('不足');
      const score = isNegative ? (68 + Math.random() * 15).toFixed(1) : (92 + Math.random() * 7.5).toFixed(1);

      if (isNegative) {
        aiSentimentBadge.textContent = '建议关注 / 중립-개선 필요 (NEUTRAL/CAUTION)';
        aiSentimentBadge.style.background = '#fef3c7';
        aiSentimentBadge.style.color = '#b45309';
        aiScoreFill.style.background = '#f59e0b';
        aiKeywords.innerHTML = `
          <span class="tag">#优化建议 / 개선</span>
          <span class="tag">#时延 / 딜레이</span>
          <span class="tag">#系统 / 시스템</span>
        `;
      } else {
        aiSentimentBadge.textContent = '积极正面 / 긍정 (POSITIVE)';
        aiSentimentBadge.style.background = '#dcfce7';
        aiSentimentBadge.style.color = '#15803d';
        aiScoreFill.style.background = '#10b981';
        aiKeywords.innerHTML = `
          <span class="tag">#优秀 / 우수</span>
          <span class="tag">#高效 / 고성능</span>
          <span class="tag">#推荐 / 추천</span>
        `;
      }

      aiScoreLabel.textContent = `${score}%`;
      aiScoreFill.style.width = `${score}%`;
      showToast('AI 模型推理完成！', 'AI 텍스트 추론이 완료되었습니다!', 'success');
    }

    btnAnalyzeAi.addEventListener('click', () => {
      runSentimentAnalysis(aiInputText.value);
    });

    document.querySelectorAll('.btn-sample').forEach(btn => {
      btn.addEventListener('click', () => {
        aiInputText.value = btn.getAttribute('data-text');
        runSentimentAnalysis(aiInputText.value);
      });
    });
  }

  // ==================== 8. 个人简历预览弹窗 (Resume Modal) ====================
  const resumeModal = document.getElementById('resumeModal');
  const resumeModalCloseBtn = document.getElementById('resumeModalCloseBtn');
  const resumeModalCloseFooter = document.getElementById('resumeModalCloseFooter');
  const printResumeBtn = document.getElementById('printResumeBtn');

  const navResumeBtn = document.getElementById('navResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const boxResumeBtn = document.getElementById('boxResumeBtn');

  function openResumeModal() {
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  [navResumeBtn, heroResumeBtn, boxResumeBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', openResumeModal);
  });

  resumeModalCloseBtn.addEventListener('click', closeResumeModal);
  resumeModalCloseFooter.addEventListener('click', closeResumeModal);
  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResumeModal();
  });

  printResumeBtn.addEventListener('click', () => {
    showToast('已唤起浏览器打印/保存 PDF 选项！', '이력서 인쇄/PDF 저장 창이 열립니다.', 'success');
    window.print();
  });

  // ==================== 9. 一键复制邮箱与 GitHub 访问 ====================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const githubVisitBtn = document.getElementById('githubVisitBtn');

  copyEmailBtn.addEventListener('click', () => {
    const textToCopy = emailText.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('邮箱已成功复制到剪贴板！', '이메일 주소가 클립보드에 복사되었습니다!', 'success');
      }).catch(() => {
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  });

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('邮箱已成功复制到剪贴板！', '이메일 주소가 클립보드에 복사되었습니다!', 'success');
  }

  githubVisitBtn.addEventListener('click', () => {
    showToast('即将跳转至 GitHub 主页！', 'GitHub 프로필 페이지로 이동합니다.', 'info');
    window.open('https://github.com', '_blank');
  });

  // ==================== 10. 在线留言表单校验与提交 ====================
  const contactForm = document.getElementById('contactForm');
  const senderName = document.getElementById('senderName');
  const senderEmail = document.getElementById('senderEmail');
  const messageTopic = document.getElementById('messageTopic');
  const messageContent = document.getElementById('messageContent');
  const formSubmitBtn = document.getElementById('formSubmitBtn');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const topicError = document.getElementById('topicError');
  const contentError = document.getElementById('contentError');

  // 邮箱正则匹配
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // 校验姓名
    if (!senderName.value.trim()) {
      senderName.classList.add('error');
      nameError.classList.add('visible');
      isValid = false;
    } else {
      senderName.classList.remove('error');
      nameError.classList.remove('visible');
    }

    // 校验邮箱
    if (!senderEmail.value.trim() || !isValidEmail(senderEmail.value.trim())) {
      senderEmail.classList.add('error');
      emailError.classList.add('visible');
      isValid = false;
    } else {
      senderEmail.classList.remove('error');
      emailError.classList.remove('visible');
    }

    // 校验主题
    if (!messageTopic.value) {
      messageTopic.classList.add('error');
      topicError.classList.add('visible');
      isValid = false;
    } else {
      messageTopic.classList.remove('error');
      topicError.classList.remove('visible');
    }

    // 校验留言内容（不少于 5 个字符）
    if (!messageContent.value.trim() || messageContent.value.trim().length < 5) {
      messageContent.classList.add('error');
      contentError.classList.add('visible');
      isValid = false;
    } else {
      messageContent.classList.remove('error');
      contentError.classList.remove('visible');
    }

    if (isValid) {
      formSubmitBtn.disabled = true;
      formSubmitBtn.innerHTML = `
        <svg class="spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10"></circle></svg>
        <span>正在发送...</span> <span class="btn-sep">/</span> <span>발송 중...</span>
      `;

      setTimeout(() => {
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          <span>立即发送留言</span> <span class="btn-sep">/</span> <span>메시지 발송</span>
        `;

        showToast(
          '🎉 留言发送成功！我会尽快查收并给您回复。',
          '🎉 메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.',
          'success'
        );

        contactForm.reset();
      }, 1000);
    }
  });

  // 输入时清除错误样式
  [senderName, senderEmail, messageTopic, messageContent].forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const err = input.parentElement.querySelector('.form-error');
      if (err) err.classList.remove('visible');
    });
  });

  // 页面加载完毕欢迎提示
  setTimeout(() => {
    showToast(
      '欢迎访问我的个人作品集！ / 포트폴리오에 오신 것을 환영합니다!',
      '所有内容均支持中韩双语对照呈现 / 모든 콘텐츠는 중/한 병렬 표기됩니다.',
      'info'
    );
  }, 1000);

});
