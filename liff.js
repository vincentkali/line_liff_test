var liffID = '1657480183-wom5aNvE';

liff.init({
    liffId: liffID
}).then(function () {
    console.log('LIFF init');

    // 這邊開始寫使用其他功能
    context = liff.getContext();
    console.log(context)

    $("#uid").text(context["userId"])
    console.log("done")


}).catch(function (error) {
    console.log(error);
});