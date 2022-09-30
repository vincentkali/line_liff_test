var liffID = '1657480183-gEAmDPN5';

liff.init({
    liffId: liffID
}).then(function () {
    console.log('LIFF init');

    // 這邊開始寫使用其他功能
    context = liff.getContext();
    console.log(context)

    $("#uid").text(context)


}).catch(function (error) {
    console.log(error);
});