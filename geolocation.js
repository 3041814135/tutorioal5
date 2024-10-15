// 定义 getGeolocation 函数，当用户点击按钮时调用
function getGeolocation() {
    // 获取页面中 id 为 'geolocation' 的元素，用于显示位置信息或错误信息
    var x = document.getElementById('geolocation');

    // 检查浏览器是否支持 Geolocation API
    if (navigator.geolocation) {
        // 如果支持，调用 getCurrentPosition 方法获取当前位置
        // 成功时调用 showGeolocation 函数，失败时调用 showError 函数
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        // 如果不支持，更新页面元素显示不支持信息
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// 定义 showGeolocation 函数，用于处理成功获取位置信息的情况
function showGeolocation(position) {
    // 从 position 对象中获取纬度和经度
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // 将纬度和经度信息更新到页面的 'geolocation' 元素中
    document.getElementById('geolocation').innerHTML =
        "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

// 定义 showError 函数，用于处理获取位置信息过程中出现的错误
function showError(error) {
    // 使用 switch 语句根据错误代码显示不同的错误信息
    switch (error.code) {
        case error.PERMISSION_DENIED:
            // 用户拒绝提供位置信息
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            // 位置信息不可用
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            // 请求位置信息超时
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            // 发生未知错误
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
