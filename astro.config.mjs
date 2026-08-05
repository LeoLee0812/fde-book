// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// 主站在 Cloudflare Workers，canonical / sitemap 指向主域名 leolee0812.site
	site: 'https://fdebook.leolee0812.site',
	integrations: [
		starlight({
			title: '前线部署工程师（FDE）',
			// 全站中文，用 root 语言覆盖默认英文
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
			},
			description: '范冰（XDash）著《前线部署工程师：人工智能时代的客户价值交付秘籍》在线全文阅读',
			social: [
				{
					icon: 'github',
					label: 'GitHub 原仓库',
					href: 'https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer',
				},
			],
			customCss: ['./src/styles/custom.css'],
			// Cloudflare Web Analytics：手动注入 beacon，统计数据进 CF 后台
			head: [
				{
					tag: 'script',
					attrs: {
						defer: true,
						src: 'https://static.cloudflareinsights.com/beacon.min.js',
						'data-cf-beacon': '{"token": "f5b1fbf53cad4881b713ff74cffaf80f"}',
					},
				},
			],
			// 正文以二级标题分节，目录只抓 h2/h3
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{
					label: '正文',
					items: [
						{ label: '第 1 章 FDE 的崛起', slug: 'book/ch1' },
						{ label: '第 2 章 解决正确的问题', slug: 'book/ch2' },
						{ label: '第 3 章 赢得客户', slug: 'book/ch3' },
						{ label: '第 4 章 激活部署', slug: 'book/ch4' },
						{ label: '第 5 章 守住续约', slug: 'book/ch5' },
						{ label: '第 6 章 扩大收入', slug: 'book/ch6' },
						{ label: '第 7 章 规模化复制', slug: 'book/ch7' },
						{ label: '第 8 章 完整案例集', slug: 'book/ch8' },
						{ label: '后记 FDE 的职业道德', slug: 'book/epilogue' },
					],
				},
				{
					label: '附录',
					items: [
						{ label: '附录 A 常用指标', slug: 'book/appendix-a' },
						{ label: '附录 B 人物与团队名单', slug: 'book/appendix-b' },
						{ label: '附录 C 案例索引与出处', slug: 'book/appendix-c' },
					],
				},
			],
		}),
	],
});
