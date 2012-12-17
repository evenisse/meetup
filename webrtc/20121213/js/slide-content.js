/**
 * Copyright 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.URL = window.URL ? window.URL :
             window.webkitURL ? window.webkitURL : null;

window.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.BlobBuilder;

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                               window.mozRequestAnimationFrame;

/*******************************************************************************
 * PREFLIGHT
 ******************************************************************************/
function hide(id) {
  util.query('#' + id)[0].classList.add('hidden');
}
function unhide(id) {
  util.query('#' + id)[0].classList.remove('hidden');
};
function checkMediaSourceAPI() {
  try {
    if (navigator.webkitGetUserMedia || navigator.getUserMedia || navigator.mozGetUserMedia) {
      unhide('feature-media-stream');
      return;
    }
  } catch(e) {}
  unhide('feature-no-media-stream');
};
function checkBrowser() {
  if (util.isWK) {
    unhide('browser-webkit');
  } else if (util.isFF) {
    unhide('browser-mozilla');
  } else {
    unhide('browser-other');
  }
};
var preflightRun = false;
function runPreflight(e) {
  if (!preflightRun) {
    preflightRun = true;
    checkBrowser();
    checkMediaSourceAPI();
  }
};
document.addEventListener('DOMContentLoaded', runPreflight, false);
window.addEventListener('load', runPreflight, false);

/*******************************************************************************
 * WHO ARE THESE GUYS?
 ******************************************************************************/
(function() {
   var slide = document.querySelector('#profile-slide');
   slide.addEventListener('slideIn', function() {
     slide.classList.remove('out');
   }, false);
   slide.addEventListener('slideOut', function() {
     slide.classList.add('out');
   }, false);
 })();
 

