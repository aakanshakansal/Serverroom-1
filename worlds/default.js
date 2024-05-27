// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js","functionality1.js",
    ]

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0xe0e0e0,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light","Model2"],
                fileName: "/spree_bank_4k.exr",
                dataLocation: "./assets/sky/hamburg_canal_4k.exr",
                dataType: "exr",
                toneMappingExposure: 0.7,
                loadSynchronously: true,
            }
        },
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [3.3637790953713145, 0.5850223148710516, 3.29836130006386],
                rotation: [0, -0.9999985142619046, 0, 0.0017237963869260872],
                spawn: "default",
                // behaviorModules: ["Names"],
            }
        },
    ];
}
