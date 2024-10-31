const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 处理根路径请求
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// 保存 JSON 文件的 API
app.post('/save-annotations', (req, res) => {
    const { username, annotations } = req.body;
    const jsonData = JSON.stringify(annotations, null, 2);

    const filename = `annotations-${username}.json`; // 包含用户名

    // 确保 annotation_buffer 目录存在
    const bufferDir = path.join(__dirname, 'annotation_buffer');
    if (!fs.existsSync(bufferDir)) {
        fs.mkdirSync(bufferDir);
    }

    // 保存新的 JSON 文件到 annotation_buffer 目录
    fs.writeFile(path.join(bufferDir, filename), jsonData, (err) => {
        if (err) {
            return res.status(500).send('Error writing file');
        }
            res.send(`文件已保存`);
        });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});