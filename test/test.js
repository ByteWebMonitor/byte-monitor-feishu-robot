const webhook = "https://open.feishu.cn/open-apis/bot/v2/hook/118bfe1d-683d-4a13-a797-f9596a80273e"//机器人webhook码
const Rebot = require('byte-monitor-feishu-robot/index')({ webhook });


//message结构体
// const message  = {
//     title: '监控测试',
//     texts: [
//         [
//             { tag: 'text', text: '这是文本，' },
//             { tag: 'a', text: '这是链接', href: 'https://github.com/ByteWebMonitor' }
//         ]
//     ]
// }

const message={
    title: '监控测试',
    texts: [
        [
            { tag: 'text', text: "1339\n"}, 
            { tag: 'text',text: "9280" }
        ]
     ]
  }
// 一小时循环代码
function Repeat(){
    //富文本
    Rebot.sendRickText(message.title, message.texts, 'en_us')
    //图片
    // Rebot.sendImage("img_ecffc3b9-8f14-400f-a014-05eca1a4310g").then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // });
    setTimeout(() => {
        Repeat()
    }, 3600000);
};

Repeat()