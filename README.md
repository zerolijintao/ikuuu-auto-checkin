## iKuuu 定时自动签到

[![文档](https://img.shields.io/badge/文档-blue)](https://ewigl.github.io/notes/posts/programming/github-actions/)

### 使用

1. Fork 仓库。
2. 启用 Actions。
3. 设置环境变量。

### 环境变量

- **Environments**: `IKUUU`
- **Secrets**:`EMAIL`, `PASSWD`, `HOST`
- 由于 ikuuu 经常更换域名，添加 HOST 环境变量，默认为`ikuuu.one`。若域名更改，修改 HOST 的值为对应域名即可。
