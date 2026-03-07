(function() {
    // 检测是否在子目录
    const isSubdirectory = window.location.pathname.includes('/Project/');
    const basePath = isSubdirectory ? '../' : '';
    
    // 获取当前页面
    const path = window.location.pathname;
    const isIndex = path.endsWith('index.html') || path.endsWith('/');
    const isProject = path.includes('project.html') || path.includes('Project');
    const isContact = path.includes('contactme.html');
    
    // 导航链接配置
    const navItems = [
        { href: isIndex ? '#home' : basePath + 'index.html', text: '首页', tooltip: '返回首页', id: 'index' },
        { href: basePath + 'project.html', text: '项目', tooltip: '浏览我的项目作品', id: 'project' },
        { href: basePath + 'contactme.html', text: '联系', tooltip: '与我取得联系', id: 'contact' }
    ];
    
    // 获取当前激活页面
    function getActiveId() {
        if (isIndex) return 'index';
        if (isContact) return 'contact';
        if (isProject) return 'project';
        return null;
    }
    
    // 生成navbar HTML
    function generateNavbar() {
        const activeId = getActiveId();
        
        // 获取页面标题
        let pageTitle = '个人主页';
        if (isProject) pageTitle = '我的项目';
        if (isContact) pageTitle = '取得联系';
        
        const navHTML = `
            <nav>
                <a href="${basePath}index.html" class="logo">M1ckey</a>
                <div class="nav-intro"><h1 class="page-title">${pageTitle}</h1></div>
                <ul class="nav-links">
                    ${navItems.map(item => {
                        const isActive = item.id === activeId;
                        return `<li><a href="${item.href}" ${isActive ? 'class="active"' : ''} data-tooltip="${item.tooltip}">${item.text}</a></li>`;
                    }).join('')}
                </ul>
            </nav>
        `;
        
        // 插入navbar到body开头
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
    
    // 执行
    generateNavbar();
})();
