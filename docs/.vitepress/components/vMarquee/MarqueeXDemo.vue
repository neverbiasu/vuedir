<template>
    <div v-marquee="{
        direction: 'x',
        speed: 100,
        onStart: handleStart,
        onScroll: handleScroll,
        onComplete: handleComplete
    }" class="marquee-container">
        <div class="marquee-content">
            <div class="news-item">
                🚀 Vue 3.4 版本正式发布！性能提升20%，新增 Composition API 优化
                🌟 TypeScript 5.0 新特性：装饰器改进、模块解析增强
                🎉 前端框架趋势报告：Vue 使用率持续上升，React 保持领先
                💡 WebAssembly 2.0 草案发布，带来多线程和垃圾回收支持
                🛠 Vite 4.0 更新：构建速度再提升，插件生态更加完善
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { vMarquee } from '@cp-vuedir/core'

// 回调函数
const handleStart = () => {
    // console.log('🎬 滚动开始')
}

const handleScroll = (progress: number) => {
    // console.log(`📊 滚动进度: ${Math.round(progress * 100)}%`)
}

const handleComplete = () => {
    // console.log('✅ 单次滚动完成')
}
</script>

<style scoped>
.marquee-container {
    width: 50%;
    /* 设置高度 */
    height: 85px;
    padding: 15px;
    background: var(--vp-c-bg-soft);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    position: relative;
    left: 25%;
}

.marquee-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.marquee-content {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.news-item {
    padding: 12px 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #2c3e50;
    line-height: 1.5;
    transition: transform 0.2s ease;
    display: flex;
    align-items: center;
}

.news-item:hover {
    transform: translateX(5px);
}

.news-item::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #42b983;
    border-radius: 50%;
    margin-right: 10px;
}

.news-item:nth-child(odd) {
    background: #f8f9fa;
}

.news-item:nth-child(2)::before {
    background: #ff6b6b;
}

.news-item:nth-child(3)::before {
    background: #4ecdc4;
}

.news-item:nth-child(4)::before {
    background: #ff9f43;
}

.news-item:nth-child(5)::before {
    background: #a55eea;
}
</style>