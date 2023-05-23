import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-TW',
    description: '讓 MIUI 再次偉大！',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "最後更新",
        darkModeSwitchLabel: '深色模式',
        returnToTopLabel: '回到頂部',
        outline: {
            label: '目錄'
        },

        editLink: {
            pattern: 'https://github.com/Cemiuiler-Development-Team/website/edit/main/:path',
            text: '在 GitHub 中編輯此頁'
        }
    }
})

function nav() {
    return [
        { text: '下載', link: '/zh_TW/Download.html' },
        { text: '贊助', link: 'https://www.sevtinge.cc/t/donation.html' },
        { text: '感謝名單', link: '/zh_TW/Thank.html' }
    ]
}
