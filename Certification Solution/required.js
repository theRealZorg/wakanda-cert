function loginFunc(username, pass) {
    var theUser = ds.User({
        username: username
    });

    if (theUser == null)
        return false;
    else {
        if (theUser.password == pass) {
            var theGroups = [];
            switch (theUser.accessType) {
                case 1:
                    theGroups = ['Administrator'];
                    break;
                case 2:
                    theGroups = ['Manager'];
                    break;
            }

            var connectTime = new Date();
            return {
                ID: theUser.ID,
                name: theUser.email,
                fullName: theUser.fullName,
                belongsTo: theGroups,

                storage: {
                    time: connectTime

                }
            };
        }
        else
            return {
                error: 1024,
                errorMessage: "invalid login"
            }
    };
};