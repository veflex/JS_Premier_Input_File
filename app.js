/* jshint esversion : 6 */
/* global window */
/* global document */
const app = (function app() {
    "use strict";
    var html = {};

    const handleFormSubmit = function handleFormSubmit(evt) {
        evt.preventDefault();
        //permet d'éviter le comportement par defaut des formulaires qui recharge l'index.html lors de l'envois
    };

    const createImg = function createImg(src) {
        var img = document.createElement("img");
        img.src = src;
        img.className = "img";
        return img;
    };

    const appendImg = function appendImg(img, dad) {
        var newImg = dad.appendChild(img);
        return newImg;
    };

    var verifFiles = function (file, mime) {
        if (file.type.match(mime)) {
            return true
        }
    }

    const getFiles2 = function getFiles2(file) {
        if (verifFiles(file, "image")) {
            const reader = new FileReader();
            reader.onload = function getFile2(evt) {
                const src = evt.target || evt.srcElement;
                appendImg(createImg(src.result), html.div)
            };
            reader.readAsDataURL(file);
        } else {
            window.console.error("mauvais type de fichier");
        }

    };
    const handleFiles = function handleFiles(evt) {
        const src = evt.target || evt.srcElement;
        var arr = Array.from(src.files);
        arr.forEach(getFiles2);
    };

    const handleEvents = function handleEvents() {
        html.input.onchange = handleFiles;
        //        html.btn.onclick = handleFormSubmit;
        html.inputBtn.onclick = function () {
            html.input.click();
        };
    };
    const getDOMRefs = function getDOMRefs() {
        return {
            //            form: document.getElementById("form_file"),
            input: document.getElementById("file_upload"),
            inputBtn: document.getElementById("file_upload_btn"),
            btn: document.getElementById("submit"),
            div: document.getElementById('img_block')
        };
    };
    const start = function start() {
        html = getDOMRefs();
        handleEvents();
    };
    window.addEventListener("DOMContentLoaded", start);
}());
