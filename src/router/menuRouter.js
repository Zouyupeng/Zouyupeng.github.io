import IconMaterialSymbolsCodeBlocksOutline from '~icons/uiw/html5'

export const menuRouter = [
  {
    path: 'page-show',
    name: 'PageShow',
    meta: {
      title: '页面展示',
      icon: markRaw(IconMaterialSymbolsCodeBlocksOutline)
    },
    redirect: { name: 'PageSelect' },
    children: [
      {
        path: 'page-select',
        name: 'PageSelect',
        meta: {
          title: '页面选择'
        },
        component: () => import('@/views/ShowPage.vue')
      }
    ]
  }
]

/**
 * @description 菜单路由数组 format
 * @param { Array } router 路由数组
 * @param { String } parentPath 父级路由 path
 * @return { Array }
 */
export const menuRouterFormat = (router, parentPath) =>
  router.map(item => {
    // 拼接路由，例：'devtools' -> '/devtools'  'regular' -> '/devtools/regular'
    item.path = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`

    // 存在 children 属性，且 children 数组长度大于 0，开始递归
    if (item.children && item.children.length > 0) {
      item.children = menuRouterFormat(item.children, item.path)
    }

    return Object.assign({}, item, item.meta || {})
  })

// 解析后 路由菜单列表
export const menuRouterFormatList = menuRouterFormat([...menuRouter])
