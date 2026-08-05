# 《前线部署工程师（FDE）》在线阅读版

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Starlight](https://img.shields.io/badge/Starlight-0.41-4F46E5?style=flat-square&logo=astro&logoColor=white)](https://starlight.astro.build)
[![Cloudflare Workers](https://img.shields.io/badge/deploy-Cloudflare%20Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://fdebook.leolee0812.site)
[![版权](https://img.shields.io/badge/正文版权-归原作者范冰-orange?style=flat-square)](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer)

范冰（XDash）著《前线部署工程师：人工智能时代的客户价值交付秘籍》的在线阅读站，正文一字未改，只做了排版与导航。

- 在线阅读：<https://fdebook.leolee0812.site>（备用地址 <https://fdebook.openfde.online>）
- 原始仓库：<https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer>

## 这个仓库做了什么

原仓库把全书拆成 12 个 Markdown 文件放在根目录，只能在 GitHub 上一篇篇点开看。本站把这些章节原样搬进 Astro Starlight，补上了：

- 左侧章节目录 + 右侧小节目录，长文里不迷路
- 全站中文搜索（Pagefind，构建期生成本地索引，不依赖第三方服务）
- 上一章 / 下一章翻页、深色模式、移动端适配
- 针对中文长文调过的行距与引用块样式
- PDF 全本下载入口

## 本地开发

```bash
pnpm install
pnpm dev      # 本地预览
pnpm build    # 产出静态站到 dist/
```

## 目录结构

```
src/content/docs/
├── index.mdx          # 首页（关于本书 + 目录卡片）
└── book/
    ├── ch1.md ~ ch8.md    # 正文 8 章
    ├── epilogue.md        # 后记
    └── appendix-a/b/c.md  # 三个附录
public/fde-v1.0.6.pdf      # 全本 PDF
```

章节内容由脚本从原仓库 Markdown 转换而来：剥掉正文首行的一级标题（交给 Starlight 渲染），补上 frontmatter，其余内容原样保留。

## 版权

本书著作权归作者**范冰**所有，原仓库由作者本人授权公开，供**免费阅读与非商业性分享**，转载须注明出处与作者；商业用途须事先获得作者书面许可。

本仓库仅为方便阅读而做的站点工程代码，正文版权不因此转移。若作者希望下线本站，提 Issue 告知即可立即处理。
