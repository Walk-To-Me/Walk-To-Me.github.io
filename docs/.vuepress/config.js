module.exports = {
  title: "IDocker",
  description: "Walk-To-Me",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "何某人blog",
        desc: "老单身🐕了！？",
        avatar: "http://60.205.255.147/profile.jpg",
        link: "http://60.205.255.147",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    lastUpdated: "Last Updated",
    author: "Air_Code",
    authorAvatar: "/avatar.png",
    record: "xxxx",
    startYear: "2017",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 网络文件示例
          {
            name: "강남역 4번 출구",
            artist: "Plastic / Fallin` Dild",
            url: "https://assets.smallsunnyfox.com/music/2.mp3",
            cover: "https://assets.smallsunnyfox.com/music/2.jpg",
          },
        ],
      },
    ],
  ],
};
