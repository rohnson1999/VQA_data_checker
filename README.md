# VQA数据集标注与查看工具

一个用于查看和标注视觉问答(VQA)数据集的简单Web工具。

## 功能特点

- 📝 支持CSV格式数据集的加载和浏览
- 🖼️ 图像预览和标注功能
- ✏️ 在线编辑问题(Q)、答案(A)和视觉基础(VG)信息
- 💾 支持标注数据的保存与导出
- 🌓 支持明暗主题切换
- 🔍 支持图像放大查看
- 📊 支持边界框标注和可视化

## 使用方法

1. 克隆仓库到本地:
```bash
git clone https://github.com/yourusername/data-checker.git
```

2. 安装依赖:
```bash
npm install express cors body-parser
```

3. 启动服务器:
```bash
node server.js
```

4. 在浏览器中打开 data_checker.html


## 文件结构
- data_checker.html - 主界面
- server.js - Node.js服务器
- annotations.json - 保存标注数据

## 数据格式
CSV文件格式要求：

- Index
- ImageName
- Q (问题)
- A (答案)
- VG (视觉基础)

标注数据JSON格式：
```bash
{
  "image_name": [
    {
      "type": "car",
      "bbox2d": [x1, y1, x2, y2]
    }
  ]
}
```


## 开发环境
- Node.js
- 现代浏览器 (Chrome/Firefox/Edge)


## 许可证
待定

## 贡献
欢迎提交Issue和Pull Request！


