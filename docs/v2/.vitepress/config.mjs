import { defineConfig } from 'vitepress'
import zhConfig from './locales/zh.config.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SMemory",
  description: "Documents",
  lastUpdated: true,
  srcDir: './src',
  locales: {
    root: zhConfig,
  },
  themeConfig: {
    logo: 'https://pic.imgdb.cn/item/676ba098d0e0a243d4e9d23d.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'refinedgithub', link: 'https://github.com/wangyang0210/cnblogs-theme' },
      { icon: 'github', link: 'https://github.com/BNDong/Cnblogs-Theme-SimpleMemory' },
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
