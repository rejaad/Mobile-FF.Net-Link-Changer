// ==UserScript==
// @name         Mobile FF.Net Link Changer Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button to change Fanfiction.net mobile links to the regular desktop version.
// @author       Re'Jaad
// @match        *://m.fanfiction.net/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==
// © Copyright 2022 Re'Jaad

//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at

//http://www.apache.org/licenses/LICENSE-2.0

//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.


(function() {
    'use strict';

    window.addEventListener("load", function () {
          let trueLink = window.location.href;
          let main = document.querySelector ("#content");

          let l1 = trueLink.replace('https://m.', '');
          let l2 = "https://"+l1;
        console.log(l2)

            if (main){
                const newlink = l2.button;
                let link = document.createElement("a");
                link.innerText = "Desktop Site Link";
                link.href = l2;

                document.querySelector("#content").append(link);

            }

    }, false);

})();
