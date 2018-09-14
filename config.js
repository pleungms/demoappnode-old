// ############################################################################
// File Name: config.js
// Description:
//  Config settings for the application
// Author: Peter Leung (pleungms@hotmail.com)
// Modification history
//  Author         Date       Description
//  -------------- ---------- -------------------------------------------------
//  Peter Leung    13/09/2018 Initial version
// ############################################################################
var config = {
dev: {
    //server details
    server: {
        port: '80'
    },
    application: {
		buildid: $BUILD_ID,
		buildsrcver: $BUILD_SRC_VER
	}
},
prd: {
    //server details
    server: {
        port: '80'
    },
    application: {
		buildid: $BUILD_ID,
		buildsrcver: $BUILD_SRC_VER
	}
},
};
module.exports = config;
