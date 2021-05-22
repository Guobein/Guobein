function search() {
    $.ajax({
        url: 'https://tianqiapi.com/free/day',
        type: 'get',
        data: {
            appid: '91581366',
            appsecret: 'pGw4qYwl',
            city: document.getElementById('search-txt').value,
        },
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            htem.innerHTML = data.tem;
            wea.innerHTML = data.wea;
            win.innerHTML = data.win + ' ' + data.win_speed;
        },
        error: function () {
            console.info("网络出错");
        }
    })

    $.ajax({
        url: 'https://tianqiapi.com/free/week',
        type: 'get',
        data: {
            appid: '91581366',
            appsecret: 'pGw4qYwl',
            city: document.getElementById('search-txt').value,
        },
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            tdtem.innerHTML = data.data[0].tem_day + "/" + data.data[0].tem_night;
            tmtem.innerHTML = data.data[1].tem_day + "/" + data.data[1].tem_night;
            tdwea.innerHTML = data.data[0].wea;
            tmwea.innerHTML = data.data[1].wea;
            pica.src = weather(data.data[0].wea_img);
            picb.src = weather(data.data[1].wea_img);
            for (var i = 0; i < 7; i++) {
                time[i].innerHTML = data.data[i].date;
                weath[2 * i].innerHTML = data.data[i].wea;
                weath[2 * i + 1].innerHTML = data.data[i].wea;
                weap[2 * i].src = weather(data.data[i].wea_img);
                weap[2 * i + 1].src = weather(data.data[i].wea_img);
                wind[i].innerHTML = data.data[i].win;
                wins[i].innerHTML = data.data[i].win_speed;
            }
        },
        error: function () {
            console.info("网络出错");
        }
    })

    $.ajax({
        url: 'https://devapi.qweather.com/v7/weather/24h?',
        type: 'get',
        data: {
            location: document.getElementById('search-txt').value,
            key: 'd2a32fa215a84c9d8710eac06d763bdd',
        },
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            for (var i = 0; i < 24; i++) {
                dtime[i].innerHTML = data.hourly[i].fxtime.slice(5, 10);
                pic[i].src = weather(data.hourly[i].icon);
                dtem[i].innerHTML = data.hourly[i].temp;
            }
        },
        error: function () {
            console.info("网络出错");
        }
    })

    $.ajax({
        url: 'https://devapi.qweather.com/v7/indices/1d?',
        type: 'get',
        data: {
            location: document.getElementById('search-txt').value,
            key: 'd2a32fa215a84c9d8710eac06d763bdd',
            type: '0'
        },
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            for (var i = 0; i < 16; i++) {
                detail[i].innerHTML = data.daily[i].category;
            }
        },
        error: function () {
            console.info("网络出错");
        }
    })
}

$.ajax({
    url: 'https://tianqiapi.com/free/day',
    type: 'get',
    data: {
        appid: '91581366',
        appsecret: 'pGw4qYwl',
        city: '北京',
    },
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        htem.innerHTML = data.tem;
        wea.innerHTML = data.wea;
        win.innerHTML = data.win + ' ' + data.win_speed;
    },
    error: function () {
        console.info("网络出错");
    }
})

$.ajax({
    url: 'https://tianqiapi.com/free/week',
    type: 'get',
    data: {
        appid: '91581366',
        appsecret: 'pGw4qYwl',
        city: '北京',
    },
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        tdtem.innerHTML = data.data[0].tem_day + "/" + data.data[0].tem_night;
        tmtem.innerHTML = data.data[1].tem_day + "/" + data.data[1].tem_night;
        tdwea.innerHTML = data.data[0].wea;
        tmwea.innerHTML = data.data[1].wea;
        pica.src = weather(data.data[0].wea_img);
        picb.src = weather(data.data[1].wea_img);
        for (var i = 0; i < 7; i++) {
            time[i].innerHTML = data.data[i].date;
            weath[2 * i].innerHTML = data.data[i].wea;
            weath[2 * i + 1].innerHTML = data.data[i].wea;
            weap[2 * i].src = weather(data.data[i].wea_img);
            weap[2 * i + 1].src = weather(data.data[i].wea_img);
            wind[i].innerHTML = data.data[i].win;
            wins[i].innerHTML = data.data[i].win_speed;
        }
    },
    error: function () {
        console.info("网络出错");
    }
})

$.ajax({
    url: 'https://devapi.qweather.com/v7/weather/24h?',
    type: 'get',
    data: {
        location: place,
        key: 'd2a32fa215a84c9d8710eac06d763bdd',
    },
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        for (var i = 0; i < 24; i++) {
            dtime[i].innerHTML = data.hourly[i].fxtime.slice(5, 10);
            pic[i].src = weather(data.hourly[i].icon);
            dtem[i].innerHTML = data.hourly[i].temp;
        }
    },
    error: function () {
        console.info("网络出错");
    }
})

$.ajax({
    url: 'https://devapi.qweather.com/v7/indices/1d?',
    type: 'get',
    data: {
        location: place,
        key: 'd2a32fa215a84c9d8710eac06d763bdd',
        type: '0'
    },
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        for (var i = 0; i < 16; i++) {
            detail[i].innerHTML = data.daily[i].category;
        }
    },
    error: function () {
        console.info("网络出错");
    }
})

function weather(x) {
    if (x == 'qing') {
        x = "晴.png"
    }
    else if (x == 'yu') {
        x = "雨.png"
    }
    else if (x == 'xue') {
        x = "雪.png"
    }
    else if (x == 'yun') {
        x = "云.png"
    }
    else if (x == 'yin') {
        x = "云.png"
    }
    else if (x == 'lei') {
        x = "雷.png"
    }
    else if (x == 'bingbao') {
        x = "雪.png"
    }
    else if (x == 'shachen') {
        x = "沙尘.png"
    }
    else if (x == 'wu') {
        x = "雾.png"
    }
    return x;
}