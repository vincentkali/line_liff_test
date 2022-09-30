var liffID = '1657519780-LYMkMPNP';

liff.init({
    liffId: liffID
}).then(function () {
    console.log('LIFF init');

    context = liff.getContext();

    // 此處獲得uid
    uid = context["userId"]
    console.log(uid)

}).catch(function (error) {
    console.log(error);
});