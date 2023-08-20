import fetch from 'node-fetch';

export const slackAlarm = async (host, slackWebHook, statusCode) => {
    try {
        // Slack에 보낼 메시지 생성
        const message = `🚨 Alert | ${host}\nStatus Code: ${statusCode}\nPlease check as soon as possible!`; 

        const response = await fetch(slackWebHook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: message
            })
        });

        if (response.ok) {
            console.log('Slack 메시지가 전송되었습니다.');
        } else {
            console.error('Slack 메시지 전송 중 오류가 발생했습니다.');
        }
    } catch (error) {
        console.error('Slack 메시지 전송 중 오류가 발생했습니다:', error);
    }
};