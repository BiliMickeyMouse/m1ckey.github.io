// 主题切换功能
(function() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
    const themeText = themeToggle.querySelector('.theme-toggle-text');

    // 检测当前页面是否在子目录中
    const isInSubdirectory = window.location.pathname.includes('/Project/');
    const iconBasePath = isInSubdirectory ? '../Icon/' : 'Icon/';

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'light') {
            themeIcon.src = iconBasePath + 'LightTheme.png';
            themeText.textContent = '浅色';
        } else {
            themeIcon.src = iconBasePath + 'DarkTheme.png';
            themeText.textContent = '深色';
        }
    }

    // 初始化主题
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
})();
