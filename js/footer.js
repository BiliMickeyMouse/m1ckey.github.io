(function() {
    // 检测是否在子目录
    const isSubdirectory = window.location.pathname.includes('/Project/');
    const basePath = isSubdirectory ? '../' : '';
    
    // 生成footer HTML
    function generateFooter() {
        const footerHTML = `
            <footer>
                <div class="footer-content">
                    <p>M1ckey_</p>
                    <div class="social-links">
                        <a href="https://github.com/BiliMickeyMouse" data-tooltip="查看我的 GitHub 主页"><img src="${basePath}Icon/ContactMeGithub.png" alt="GitHub" style="width: 24px; height: 24px; object-fit: contain; vertical-align: middle;"></a>
                        <a href="https://space.bilibili.com/3690998569895956" data-tooltip="访问我的哔哩哔哩主页"><img src="${basePath}Icon/ContactMeBilibili.png" alt="BiliBili" style="width: 24px; height: 24px; object-fit: contain; vertical-align: middle;"></a>
                    </div>
                    <button class="theme-toggle" id="themeToggle" data-tooltip="切换主题">
                        <img class="theme-toggle-icon" src="${basePath}Icon/DarkTheme.png" alt="主题">
                        <span class="theme-toggle-text">浅色</span>
                    </button>
                </div>
            </footer>
            
            <div class="tooltip" id="tooltip"></div>
        `;
        
        // 插入footer到main之后
        const main = document.querySelector('main');
        if (main) {
            main.insertAdjacentHTML('afterend', footerHTML);
        }
    }
    
    // 执行
    generateFooter();
})();
