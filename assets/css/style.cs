@charset "UTF-8";
body, html {
  font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", 'メイリオ' , Meiryo , Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  font-size: 15px;
  margin: 0;
  padding: 0; }

img {
  vertical-align: middle; }

ul, ol {
  list-style-type: none;
  margin: 0;
  padding: 0; }

p {
  word-break: break-all; }

* {
  box-sizing: border-box; }

a {
  text-decoration: none; }

/*
 * Classes
 */
.text-help {
  color: #555; }

.text-center {
  text-align: center; }

.text-right {
  text-align: right; }

.dib {
  display: inline-block; }

.over-hidden {
  overflow: hidden; }

#remaining-counts {
  font-size: 1.5rem;
  font-weight: bold; }

.ion-clock {
  display: block;
  float: left;
  font-size: .6rem;
  line-height: 1.8;
  margin-right: 4px; }

/* caption */
.caption--form-element {
  float: left;
  font-weight: bold; }

/* margins */
.mb-1 {
  margin-bottom: 1rem; }

.mb-2 {
  margin-bottom: 2rem; }

.ml-1 {
  margin-left: 1rem; }

/* btn */
.btn {
  background-color: #283249;
  border-bottom: 2px solid #666;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: .9rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
  outline: none;
  padding: .5rem .7rem;
  position: relative;
  top: 0;
  -webkit-transition: all .2s;
  -moz-transition: all .2s;
  transition: all .2s; }
  .btn:hover {
    top: 1px; }

.btn--green {
  background-color: #00b900;
  border-bottom: 2px solid #00a000; }
  .btn--green:hover {
    background-color: #2fc62f; }

/* container */
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 1025px;
  width: 100%; }
  .container > div {
    display: block;
    float: left;
    width: 50%; }
  .container > #edit-form {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    z-index: 1; }
  .container > .screen-wrap {
    margin-left: 50%; }

/* screen shot! */
#screen-dump {
  display: block;
  text-align: center; }

/* form */
input[type=text],
input[type=time],
textarea {
  background-color: #eee;
  border-radius: 2px;
  border-style: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.25rem;
  margin-left: 1rem;
  outline: none;
  padding: 5px; }

textarea {
  font-size: .9rem;
  line-height: 1.2;
  min-height: 100px;
  resize: none;
  padding: .5rem;
  width: 220px; }

input[type=text]:focus,
textarea:focus {
  box-shadow: 0 0 5px #aaa inset;
  cursor: text; }

#preview-date {
  display: none;
  margin-top: 1rem;
  margin-left: 6rem; }

#check-time-random:not(:checked) ~ #preview-date {
  display: block; }

/*
 * Header
 */
header.common {
  background-color: #fff;
  box-shadow: 0 0 4px -1px #000;
  margin-bottom: 4rem;
  position: relative;
  z-index: 4; }

.header-top {
  background-color: #00b900;
  padding: .75rem 0; }

.header-bottom {
  padding: 1rem 0; }

h1 {
  margin: 0; }
  h1 a {
    color: #fff; }

.global-menu li {
  display: inline-block;
  margin: 0;
  overflow: hidden; }
  .global-menu li a {
    color: #000;
    display: block;
    font-weight: bold;
    padding: 1rem; }
  .global-menu li a.active {
    background-color: #efefef; }

/*
 * line screen
 * iPhone6 screen size - 	375:667 = 290:515.8
 */
.screen,
#screen-shot {
  height: 518.8px;
  width: 290px; }

.screen {
  border: 1px solid #285588;
  margin-right: auto;
  margin-bottom: 1rem;
  margin-left: auto;
  position: relative; }
  .screen .screen-header {
    background-color: #283249;
    color: #fff;
    height: 50px; }
  .screen .screen-body {
    background-size: cover;
    height: 438px;
    width: 100%; }
  .screen .screen-footer {
    align-items: center;
    background-color: #eef1f4;
    bottom: 0;
    box-shadow: 0 0 1px #888;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    height: 30px;
    padding: 6px 6px 6px 8px;
    position: absolute;
    width: 100%; }
    .screen .screen-footer.screen-footer--chats {
      height: 35px; }
  .screen .mb-header-tp,
  .screen .mb-header-bt {
    display: block;
    height: 20px;
    overflow: hidden;
    position: relative;
    width: 100%; }
  .screen .mb-header-bt {
    height: 30px;
    padding: 0 10px 5px; }
  .screen .mobile-time {
    font-size: .72em;
    left: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%; }
  .screen .radiowave-condition {
    background-image: url("");
    display: block;
    float: left;
    width: 50px; }
  .screen .battery-condition {
    display: block;
    float: right;
    line-height: 1;
    margin-right: 3px; }
    .screen .battery-condition > .text {
      display: inline-block;
      font-size: .6rem;
      line-height: 1;
      margin-top: -3px;
      margin-right: 4px;
      vertical-align: middle; }
  .screen .app-caption-edit {
    font-size: .8em; }
  .screen .app-caption-talk {
    font-size: .8em;
    left: 0;
    margin: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%; }
  .screen .app-back-arrow {
    font-size: 1rem; }
  .screen .app-dot {
    border: 1px solid #999;
    border-radius: 50%;
    height: 4px;
    margin-top: -3px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    width: 4px; }
    .screen .app-dot:before, .screen .app-dot:after {
      border-radius: 50%;
      content: '';
      height: 2px;
      position: absolute;
      top: -1px;
      width: 2px; }
    .screen .app-dot:before {
      background-color: #fff;
      border: 1px solid #fff;
      left: -10px; }
    .screen .app-dot:after {
      border: 1px solid #999;
      right: -10px; }
  .screen .chat-history-wrap {
    background-image: url("../image/LINE-BG.jpg");
    overflow-y: scroll; }
  .screen ul.chat-history {
    overflow: hidden;
    padding-right: 5px;
    padding-left: 5px; }
    .screen ul.chat-history li {
      cursor: pointer;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin-bottom: 5px;
      width: 235px; }
      .screen ul.chat-history li:first-child {
        margin-top: 1rem; }
      .screen ul.chat-history li.mine {
        flex-direction: column-reverse;
        float: right;
        padding-left: 100px;
        width: 285px; }
        .screen ul.chat-history li.mine .profile-wrap {
          display: none; }
        .screen ul.chat-history li.mine .chat-wrap .chat-balloon {
          background-color: #85e249;
          color: #1f1f1f;
          float: right; }
      .screen ul.chat-history li .profile-wrap {
        padding-right: 5px; }
        .screen ul.chat-history li .profile-wrap .profile-image {
          align-items: baseline;
          height: 28px;
          width: 28px;
          padding-top: 0; }
          .screen ul.chat-history li .profile-wrap .profile-image img {
            height: 28px;
            margin-top: 0;
            width: 28px; }
      .screen ul.chat-history li .chat-wrap .chat-balloon {
        background-color: #fff;
        border-radius: 15px;
        display: inline-block;
        font-size: .71rem;
        padding: 6px 10px; }
        .screen ul.chat-history li .chat-wrap .chat-balloon a {
          text-decoration: underline; }
      .screen ul.chat-history li .chat-wrap p {
        margin: 0; }

/* talk block */
li.talk-block {
  background-color: #fff;
  cursor: pointer;
  display: block;
  overflow: hidden;
  transition: all .2s;
  width: 288px; }
  li.talk-block:hover {
    box-shadow: 0 0 3px -1px #000;
    transform: scale(1.02); }
  li.talk-block > .inner {
    padding-top: 2px;
    position: relative; }

.last-msg-arrived {
  color: #888;
  font-size: .5rem;
  letter-spacing: 1px;
  position: absolute;
  right: 6px;
  top: 2px; }

.talk-preview-wrap {
  display: block;
  float: left;
  overflow: hidden; }

.profile-image {
  align-items: center;
  display: flex;
  float: left;
  height: 52px;
  justify-content: center;
  text-align: center;
  width: 52px; }
  .profile-image img {
    border-radius: 50%;
    height: 41px;
    width: 41px; }

.talk-preview-wrap {
  border-bottom: 1px solid #eee;
  padding: 8px 2px 14px;
  width: 236px; }

.talk-preview-from {
  font-size: .85rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 2px;
  margin: 0 0 4px 0; }

.talk-preview {
  color: #888;
  font-size: .68rem;
  line-height: 1;
  margin: 0 0 0 1px; }

/*
 * Main
 */
main {
  position: relative;
  z-index: 1; }

#dialog {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  height: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10; }
  #dialog.active {
    display: flex; }
  #dialog > .inner {
    background-color: #fff;
    box-shadow: 0 0 5px -3px #000;
    padding: 2rem; }
  #dialog .close-icon {
    cursor: pointer;
    display: inline-block;
    font-size: 2.5rem;
    margin-top: -0.75rem;
    margin-bottom: 0; }

/*
 * SP
 */
@media screen and (max-width: 600px) {
  .s12 {
    width: 100% !important; }

  .btn {
    padding: .35rem 1.5rem; }

  .container > #edit-form {
    height: auto;
    justify-content: center;
    position: relative; }

  .container > .screen-wrap {
    margin-left: 0; } }

/*# sourceMappingURL=style.cs.map */
