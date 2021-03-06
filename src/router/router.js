import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/auth/login.vue'], resolve); }
};

export const signupRouter = {
    path: '/signup',
    name: 'signup',
    meta: {
        title: 'Signup - 注册'
    },
    component: resolve => { require(['@/views/auth/signup.vue'], resolve); }
};

export const resetPasswdRouter = {
    path: '/resetpasswd',
    name: 'resetpasswd',
    meta: {
        title: 'Reset Password - 重置密码'
    },
    component: resolve => { require(['@/views/auth/resetpasswd.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// export const preview = {
//     path: '/preview',
//     name: 'preview',
//     component: resolve => { require(['@/views/form/article-publish/preview.vue'], resolve); }
// };

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['@/views/main-components/lockscreen/components/locking-page.vue'], resolve); }
};

// // 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/blank.vue'], resolve); } },

    ]
};


export const appRouter = [
        {
            path: '/jiaodui',
            icon: 'ios-grid-view',
            name: 'jiaodui',
            title: '切分流程',
            component: Main,
            children: [
                { path: 'confidence/:tid*', title: '置信校对', name: 'confidence', icon: 'arrow-graph-up-right', component: resolve => { require(['@/views/jiaodui/b_confidence.vue'], resolve); } },
                { path: 'classify/:tid*', title: '聚类校对', name: 'classify', icon: 'ios-keypad', component: resolve => { require(['@/views/jiaodui/b_classify.vue'], resolve); } },
                // { path: 'checkleak/:tid*', title: '查漏校对', name: 'chalou-jiaodui', icon: 'pinpoint', component: resolve => { require(['@/views/jiaodui/b_CheckLeak.vue'], resolve); } },
                { path: 'onebyone/:tid*', title: '逐字校对', name: 'onebyone', icon: 'images', component: resolve => { require(['@/views/jiaodui/b_OneByOneCheck.vue'], resolve); } },
                { path: 'checkdel/:tid*', title: '删除审定', name: 'checkdel', icon: 'ios-close-outline', component: resolve => { require(['@/views/jiaodui/b_CheckDel.vue'], resolve); } },
                // { path: 'compare/:tid*', title: '反馈审查', name: 'fankui-jiaodui', icon: 'ios-shuffle-strong', component: resolve => { require(['@/views/jiaodui/b_compare.vue'], resolve); } },
            ]
        },
        {
            path: '/mytask',
            icon: 'ios-list-outline',
            name: 'task',
            title: '我的任务',
            component: Main,
            children: [
                { path: 'confidence', title: '置信校对', name: 'zhixin-task', icon: 'arrow-graph-up-right', component: resolve => { require(['@/views/mytask/task_confidence.vue'], resolve); } },
                { path: 'classify', title: '聚类校对', name: 'julei-task', icon: 'ios-keypad', component: resolve => { require(['@/views/mytask/task_classify.vue'], resolve); } },
                // { path: 'checkleak', title: '查漏校对', name: 'chalou-task', icon: 'pinpoint', component: resolve => { require(['@/views/mytask/task_CheckLeak.vue'], resolve); } },
                { path: 'onebyone', title: '逐字校对', name: 'zhuzi-task', icon: 'images', component: resolve => { require(['@/views/mytask/task_OneByOneCheck.vue'], resolve); } },
                { path: 'checkdel', title: '删除审定', name: 'shanchu-task', icon: 'ios-close-outline', component: resolve => { require(['@/views/mytask/task_CheckDel.vue'], resolve); } },
                // { path: 'compare', title: '反馈审查', name: 'fankui-task', icon: 'ios-shuffle-strong', component: resolve => { require(['@/views/mytask/task_compare.vue'], resolve); } },
            ]
        },
        {
            path: '/collate',
            icon: 'ios-list-outline',
            name: 'collate',
            title: '校勘流程',
            component: Main,
            children: [
                { path: 'correct', title: '文字校对', name: 'correct', icon: 'checkmark-round', component: resolve => { require(['@/views/collate/correct.vue'], resolve); } },
                { path: 'judge', title: '校勘判取', name: 'judge', icon: 'ios-shuffle-strong', component: resolve => { require(['@/views/collate/judge.vue'], resolve); } },
            ]
        },
    ]

// // 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
// export const appRouter = [
//     {
//         path: '/access',
//         icon: 'key',
//         name: 'access',
//         title: '权限管理',
//         component: Main,
//         children: [
//             { path: 'index', title: '权限管理', name: 'access_index', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
//         ]
//     },
//     {
//         path: '/access-test',
//         icon: 'lock-combination',
//         title: '权限测试页',
//         name: 'accesstest',
//         access: 0,
//         component: Main,
//         children: [
//             { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: resolve => { require(['@/views/access/access-test.vue'], resolve); } }
//         ]
//     },
//     {
//         path: '/international',
//         icon: 'earth',
//         title: {i18n: 'international'},
//         name: 'international',
//         component: Main,
//         children: [
//             { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: resolve => { require(['@/views/international/international.vue'], resolve); } }
//         ]
//     },
//     {
//         path: '/component',
//         icon: 'social-buffer',
//         name: 'component',
//         title: '组件',
//         component: Main,
//         children: [
//             {
//                 path: 'text-editor',
//                 icon: 'compose',
//                 name: 'text-editor',
//                 title: '富文本编辑器',
//                 component: resolve => { require(['@/views/my-components/text-editor/text-editor.vue'], resolve); }
//             },
//             {
//                 path: 'md-editor',
//                 icon: 'pound',
//                 name: 'md-editor',
//                 title: 'Markdown编辑器',
//                 component: resolve => { require(['@/views/my-components/markdown-editor/markdown-editor.vue'], resolve); }
//             },
//             {
//                 path: 'image-editor',
//                 icon: 'crop',
//                 name: 'image-editor',
//                 title: '图片预览编辑',
//                 component: resolve => { require(['@/views/my-components/image-editor/image-editor.vue'], resolve); }
//             },
//             {
//                 path: 'draggable-list',
//                 icon: 'arrow-move',
//                 name: 'draggable-list',
//                 title: '可拖拽列表',
//                 component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); }
//             },
//             {
//                 path: 'area-linkage',
//                 icon: 'ios-more',
//                 name: 'area-linkage',
//                 title: '城市级联',
//                 component: resolve => { require(['@/views/my-components/area-linkage/area-linkage.vue'], resolve); }
//             },
//             {
//                 path: 'file-upload',
//                 icon: 'android-upload',
//                 name: 'file-upload',
//                 title: '文件上传',
//                 component: resolve => { require(['@/views/my-components/file-upload/file-upload.vue'], resolve); }
//             },
//             {
//                 path: 'count-to',
//                 icon: 'arrow-graph-up-right',
//                 name: 'count-to',
//                 title: '数字渐变',
//                 component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
//             }
//             // {
//             //     path: 'clipboard-page',
//             //     icon: 'clipboard',
//             //     name: 'clipboard-page',
//             //     title: '一键复制',
//             //     component: resolve => { require(['@/views/my-components/clipboard/clipboard.vue'], resolve); }
//             // }
//         ]
//     },
//     {
//         path: '/form',
//         icon: 'android-checkbox',
//         name: 'form',
//         title: '表单编辑',
//         component: Main,
//         children: [
//             { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: resolve => { require(['@/views/form/article-publish/article-publish.vue'], resolve); } },
//             { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['@/views/form/work-flow/work-flow.vue'], resolve); } }

//         ]
//     },
//     // {
//     //     path: '/charts',
//     //     icon: 'ios-analytics',
//     //     name: 'charts',
//     //     title: '图表',
//     //     component: Main,
//     //     children: [
//     //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
//     //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

//     //     ]
//     // },
//     {
//         path: '/tables',
//         icon: 'ios-grid-view',
//         name: 'tables',
//         title: '表格',
//         component: Main,
//         children: [
//             { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['@/views/tables/dragable-table.vue'], resolve); } },
//             { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: resolve => { require(['@/views/tables/editable-table.vue'], resolve); } },
//             { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
//             { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } },
//             { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: resolve => { require(['@/views/tables/table-to-image.vue'], resolve); } }
//         ]
//     },
//     {
//         path: '/advanced-router',
//         icon: 'ios-infinite',
//         name: 'advanced-router',
//         title: '高级路由',
//         component: Main,
//         children: [
//             { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: resolve => { require(['@/views/advanced-router/mutative-router.vue'], resolve); } },
//             { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: resolve => { require(['@/views/advanced-router/argument-page.vue'], resolve); } }
//         ]
//     },
//     {
//         path: '/error-page',
//         icon: 'android-sad',
//         title: '错误页面',
//         name: 'errorpage',
//         component: Main,
//         children: [
//             { path: 'index', title: '错误页面', name: 'errorpage_index', component: resolve => { require(['@/views/error-page/error-page.vue'], resolve); } }
//         ]
//     }
// ];

// // 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    signupRouter,
    resetPasswdRouter,
    otherRouter,
    // preview,
    // locking,
    ...appRouter,
    page500,
    page403,
    page404
];


// export const routers = [
//     loginRouter,
//     otherRouter,
//     ...appRouter,
// ];
