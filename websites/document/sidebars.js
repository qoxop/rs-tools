// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      link: {type: 'doc', id: 'intro/index'},
      label: '介绍',
      items: [
        { type: 'doc', id: 'intro/model'},
        { type: 'doc', id: 'intro/page-cache'},
      ],
    },
    {
      type: 'category',
      label: '使用指南',
      items: [
        { type: 'autogenerated', dirName: 'basics'},
      ],
    },
    {
      type: 'category',
      label: '更多',
      items: [
        { type: 'autogenerated', dirName: 'more'},
      ],
    },
  ],
};

module.exports = sidebars;