import './style.css'

// カテゴリの定義
const categories = [
  { id: 'game', name: 'ゲーム', icon: '🎮' },
  { id: 'video', name: '動画', icon: '📺' },
  { id: 'other', name: 'その他', icon: '✨' }
];

// コンテンツのデータ
const contents = [
  {
    title: '占い',
    icon: '🔮',
    description: '毎日占える、12星座占いをやってみよう！今日のラッキーアイテムは何かな？',
    link: 'http://scandalous-rake.surge.sh/',
    color: '#9c27b0',
    category: 'other'
  },
  {
    title: 'CYBER TENNIS',
    icon: '🎾',
    description: '2〜6名で対戦できる、オンラインのテニスゲームだよ！友達と勝負だ！',
    link: 'https://naoki-game-tennis.onrender.com/',
    color: '#4caf50',
    category: 'game'
  },
  {
    title: 'gunfight',
    icon: '🔫',
    description: '10名まで参加できるオンライン対戦の3D銃バトルゲームだよ！最先端の戦いを楽しもう！',
    link: 'https://gunfight.onrender.com/',
    color: '#f44336',
    category: 'game'
  },
  {
    title: 'ストレス発散！アンチ粉砕ランナー',
    icon: '🏃',
    description: 'ストレス発散できるゲームだよ！アンチを粉砕して、スッキリしよう！',
    link: 'https://naokigame-stressrunner.surge.sh/',
    color: '#ff9800',
    category: 'game'
  },
  {
    title: 'さかな＆ペンギンくん',
    icon: '🎬',
    description: 'さかな＆ペンギンくんの動画集だよ！楽しい動画をたくさん見てね！',
    link: 'https://www.youtube.com/channel/UCSrHe-KM_-rKINr7OE8TA9g',
    color: '#ff0000',
    category: 'video'
  }
];

// コンテンツを表示する関数
function renderContents() {
  const container = document.getElementById('content-grid');
  container.innerHTML = ''; // クリア

  categories.forEach(category => {
    // このカテゴリに属するコンテンツをフィルタリング
    const categoryContents = contents.filter(item => item.category === category.id);

    if (categoryContents.length > 0) {
      // カテゴリセクションの作成
      const section = document.createElement('section');
      section.className = 'category-section';

      const title = document.createElement('h2');
      title.className = 'category-title';
      title.innerHTML = `<span>${category.icon}</span> ${category.name}`;
      section.appendChild(title);

      const grid = document.createElement('div');
      grid.className = 'grid';
      grid.innerHTML = categoryContents.map(item => `
        <a href="${item.link}" target="_blank" class="card">
          <div>
            <h3><span class="card-icon">${item.icon}</span> ${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="btn" style="background-color: ${item.color}">あそびにいく！</div>
        </a>
      `).join('');

      section.appendChild(grid);
      container.appendChild(section);
    }
  });
}

// 泡の背景効果を作る関数
function createBubbles() {
  const container = document.getElementById('bubbles');
  const bubbleCount = 20;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // ランダムな設定
    const size = Math.random() * 60 + 20 + 'px';
    const left = Math.random() * 100 + '%';
    const delay = Math.random() * 10 + 's';
    const duration = Math.random() * 10 + 10 + 's';

    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = left;
    bubble.style.animationDelay = delay;
    bubble.style.setProperty('--d', duration);

    container.appendChild(bubble);
  }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  renderContents();
  createBubbles();
});
