Java.perform(x => {
    const CipherManager = Java.use("sg.vantagepoint.a.a");
    const PasswordManager = Java.use("sg.vantagepoint.uncrackable1.a");
    const Base64Decode = Java.use("android.util.Base64");
    const javaString = Java.use("java.lang.String");

    const key = "8d127684cbc37c17616d806cf50473cc";
    const base64CipherPassword = "5UJiFctbmgbDoLXmpL12mkno8HT4Lv8dlat8FxR2GOc=";

    const plainTextPasswordByteArray = CipherManager.a(PasswordManager.b(key), Base64Decode.decode(base64CipherPassword, 0));

    const plainText = javaString.$new(plainTextPasswordByteArray);
    console.log("The secret is : " + plainText);
});