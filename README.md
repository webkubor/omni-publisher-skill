# 🚀 Omni-Publisher Expert (Gemini Skill)

[![Gemini CLI](https://img.shields.io/badge/Gemini--CLI-Skill-blueviolet)](https://github.com/google-gemini/gemini-cli)
[![Status](https://img.shields.io/badge/Status-Beta-orange)](https://github.com/webkubor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Omni-Publisher Expert** 是一个专为全平台内容创作与分发打造的 AI 技能插件。它能够让你的 AI 瞬间掌握 **小红书、网易云、掘金、微信公众号** 等多个平台的“流量密码”与视觉美学，实现一次创作，全网精彩。

## ✨ 核心特性

- **📸 爆款小红书**: 自动适配反差感标题与高互动 Emoji 排版。
- **🌙 氛围网易云**: 深夜感性的白描美学，精准捕捉情绪共鸣。
- **💻 技术向掘金**: 结构化 Markdown 优化，代码块深度美化。
- **📱 品牌公众号**: 移动端适配的优雅布局与品牌粘性引导。

## 🛠 安装指南

确保您已安装 [Gemini CLI](https://github.com/google-gemini/gemini-cli)，然后在终端执行：

```bash
gemini skills install https://raw.githubusercontent.com/webkubor/omni-publisher-skill/main/omni-publisher.skill --scope user
```

## 📖 使用方法

您可以对 Gemini 发出以下指令：

- *"进行全平台分发"* (会提示您选择具体平台)
- *"帮我把这段文案改成小红书风格"*
- *"用网易云白描手法润色一下"*

## ⚙️ 目录结构

符合 Anthropic Skills 与 Gemini CLI 混合规范：
- `SKILL.md`: 技能大脑指令（Instructions）。
- `scripts/`: (选配) 物理分发逻辑脚本。
- `LICENSE`: MIT 协议。

---
Created by [webkubor](https://github.com/webkubor)
"Content Matrix Architecture" - Made with ❤️ by Candle.
