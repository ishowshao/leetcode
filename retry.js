let i = 0;
function retry(fn, maxRetryCount, interval) {
    return new Promise((resolve, reject) => {
        i++;
        console.log(`第${i}次调用fn，maxRetryCount:${maxRetryCount}`);
        fn().then((data) => {
            console.log(`第${i}次调用fn成功`);
            resolve(data);
        }).catch(() => {
            console.log(`第${i}次调用fn失败，maxRetryCount:${maxRetryCount}`);
            if (maxRetryCount > 0) {
                setTimeout(() => {
                    console.log('timeout retry');
                    retry(fn, --maxRetryCount, interval).then((data) => {
                        resolve(data);
                    }).catch(() => {
                        reject();
                    });
                }, interval);
            } else {
                reject();
            }
        });
    });
}

const foo = () => {
    return new Promise((resolve, reject) => {
        if (i === 2) {
            resolve('获取到了');
        }
        reject();
    });
};

retry(foo, 3, 1000).then((data) => {
    console.log('成功', data);
}).catch(() => {
    console.log('重试以后失败');
});
