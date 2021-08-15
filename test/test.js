const webhook = "https://open.feishu.cn/open-apis/bot/v2/hook/33fe3f57-ca6c-410b-8032-b2476b8742f8"
const Rebot = require('../index')({ webhook });

// 普通文本
Rebot.sendImage("img_ecffc3b9-8f14-400f-a014-05eca1a4310g").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

const message  = {
    title: '日常提示',
    texts: [
        [
            { tag: 'text', text: '第一行：其余标签请' },
            { tag: 'a', text: '点击链接', href: 'https://open.feishu.cn/document/ukTMukTMukTM/uMDMxEjLzATMx4yMwETM' }
        ]
    ]
}
// 富文本
// function Repeat(){
//     Rebot.sendRickText(message.title, message.texts, 'en_us').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err);
// });
//     setTimeout(() => {
//         Repeat()
//     }, 36000);
// };

// Repeat()