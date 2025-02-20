// 默认的占位图SVG组件
export const DefaultImage = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="200"
  height="200"
  viewBox="0 0 200 200"
  fill="none"
>
  <rect width="200" height="200" fill="#F5F5F5" />
  <path
    d="M86.667 100L100 86.667L113.333 100L100 113.333L86.667 100ZM100 73.333L126.667 100L100 126.667L73.333 100L100 73.333ZM100 60L140 100L100 140L60 100L100 60Z"
    fill="#D9D9D9"
  />
  <text
    x="100"
    y="160"
    font-family="Arial"
    font-size="14"
    fill="#999999"
    text-anchor="middle"
  >
    图片加载中
  </text>
</svg>
`;

// 将SVG转换为Data URL
export const getDefaultImageUrl = () => {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(DefaultImage)}`;
};
