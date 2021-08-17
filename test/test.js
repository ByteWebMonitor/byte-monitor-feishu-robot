const Robot = require('byte-monitor-feishu-robot/index');
const webhook = "https://open.feishu.cn/open-apis/bot/v2/hook/fdcfa703-3bdc-4247-a6f5-bfb9476d5cdf"//机器人webhook码
// console.log(Robot())
const Rebot = Robot({ webhook });
// const Rebot=Robot({ webhook })
console.log(Rebot)


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