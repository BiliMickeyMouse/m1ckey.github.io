(function() {
    // 检测是否在子目录
    const isSubdirectory = window.location.pathname.includes('/Project/');
    const basePath = isSubdirectory ? '../' : '';
    
    // sidebar导航项配置
    const sidebarItems = [
        { href: 'project.html', text: '全部项目', tooltip: '查看所有项目', id: 'all' },
        { href: 'Project/ProjectMinecraftResourcePack.html', text: 'MC资源包', tooltip: 'Minecraft 游戏外观修改', id: 'mcresourcepack' },
        { href: 'Project/ProjectPersonalWebsite.html', text: '个人网站', tooltip: '这个网站本身也是一个项目', id: 'personalwebsite' }
    ];
    
    // 获取当前页面标识
    function getCurrentPageId() {
        const path = window.location.pathname;
        if (path.includes('ProjectMinecraftResourcePack.html')) return 'mcresourcepack';
        if (path.includes('ProjectPersonalWebsite.html')) return 'personalwebsite';
        if (path.includes('project.html')) return 'all';
        return null;
    }
    
    // 生成sidebar HTML
    function generateSidebar() {
        const currentPageId = getCurrentPageId();
        
        const sidebarHTML = `
            <aside class="sidebar">
                <h2 class="sidebar-title">项目分类</h2>
                <ul class="sidebar-nav">
                    ${sidebarItems.map(item => {
                        const href = item.href.startsWith('#') ? item.href : basePath + item.href;
                        const isActive = item.id === currentPageId;
                        const linkText = isActive ? `<span>${item.text}</span>` : item.text;
                        return `
                            <li>
                                <a href="${href}" ${isActive ? 'class="active"' : ''} data-tooltip="${item.tooltip}">${linkText}</a>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </aside>
        `;
        
        // 插入sidebar到nav之后
        const nav = document.querySelector('nav');
        if (nav) {
            nav.insertAdjacentHTML('afterend', sidebarHTML);
        }
    }
    
    // 执行
    generateSidebar();
})();
