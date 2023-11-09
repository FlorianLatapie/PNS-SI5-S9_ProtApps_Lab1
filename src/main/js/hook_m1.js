console.log("Script loaded from hook.js");

Java.perform(x => {
    console.log("Inside java perform function");
    const PasswordManager = Java.use("sg.vantagepoint.a.a");
    const javaString = Java.use("java.lang.String");
    
    PasswordManager.a.implementation = function(bArr, bArr2) {
        console.log("Inside the encrypt function");
        console.log("(bArr : " + bArr + " , barr2 : " + bArr2 + ")");
        var result = this.a(bArr, bArr2);
        var decoded = javaString.$new(result);
        console.log("Secret is : " + decoded);
        return result;
    }

    const rootCheckerManager = Java.use("sg.vantagepoint.a.c");
    rootCheckerManager.a.implementation = () => {
        console.log("Inside the root checker function a");
        return false;
    }

    rootCheckerManager.b.implementation = () => {
        console.log("Inside the root checker function b");
        return false;
    }


    rootCheckerManager.c.implementation = () => {
        console.log("Inside the root checker function c");
        return false;
    }
});