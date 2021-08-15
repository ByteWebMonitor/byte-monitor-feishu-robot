const webhook = "https://open.feishu.cn/open-apis/bot/v2/hook/33fe3f57-ca6c-410b-8032-b2476b8742f8"//机器人webhook码
const Rebot = require('../index')({ webhook });


//message结构体
const message  = {
    title: '监控测试',
    texts: [
        [
            { tag: 'text', text: '这是文本，' },
            { tag: 'a', text: '这是链接', href: 'https://github.com/ByteWebMonitor' }
        ]
    ]
}
// 一小时循环代码
function Repeat(){
    //富文本
    Rebot.sendRickText(message.title, message.texts, 'en_us').then(data => {
    console.log(data)//markdown的文本url链接
    }).catch(err => {
        console.log(err);
    });
    //图片
    Rebot.sendImage("img_ecffc3b9-8f14-400f-a014-05eca1a4310g").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
    setTimeout(() => {
        Repeat()
    }, 3600000);
};

Repeat()