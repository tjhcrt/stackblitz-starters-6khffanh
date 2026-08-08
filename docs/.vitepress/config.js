import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "你的文档标题",
  description: "",

  vite: {
    ssr: {
      noExternal: true
    },
    plugins: [
      {
        name: 'debug‑ssr‑import',
        resolveId(source) {
          // 打印所有 https:// 的导入源
          if (source.startsWith('https:')) {
            console.error('🔴 SSR 检测到 https 导入地址：', source)
          }
          return null
        }
      }
    ]
  }
})