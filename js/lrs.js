var lrs;
console.log(lrs);
    try {
        lrs = new TinCan.LRS(
            {
                endpoint: "yourLRSEndpoint",
                username: "yourLRSUserNAme",
                password: "yourLRSPassword",
                allowFail: false
            }
        );
        console.log(lrs);
    }
    catch (ex) {
        console.log("Failed to setup LRS object: " + ex);
        // TODO: do something with error, can't communicate with LRS
    }
