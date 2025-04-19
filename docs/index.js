"use strict";
/*グローバル変数*/
/*表示中の年月*/
const currentDate = new Date();
/*タイトル表示部*/
const elmTitle = document.querySelector(".cal__title");
/*前月移動ナビ*/
const elmPrev = document.querySelector(".cal__prev");
/*翌月移動ナビ*/
const elmNext = document.querySelector(".cal__next");
/*日付表示部*/
const elmDays = document.querySelector(".cal__days");
/*イベントハンドラ*/
/*アプリケーションを初期化*/
const onPageLoad = () => {
    //描画を更新
    updateView(currentDate);
};
/*前月移動処理*/
const onPrev = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateView(currentDate);
};
/*翌月移動処理*/
const onNext = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateView(currentDate);
};
/*イベントリスナー*/
/*ページの読み込み完了イベント*/
window.addEventListener("load", onPageLoad);
/*前月移動ナビのクリックイベント*/
elmPrev.addEventListener("click", onPrev);
/*翌月移動ナビのクリックイベント*/
elmNext.addEventListener("click", onNext);
/*ユーザー定義関数*/
/*描画更新*/
function updateView(date) {
    //タイトル表示部の更新
    updateTitle(date);
    //日付表示部の更新
    updateDays(date);
}
function updateTitle(date) {
    const title = date.getFullYear().toString() + "年" + (date.getMonth() + 1).toString().padStart(2, "0") + "月";
    elmTitle.innerHTML = title;
}
function updateDays(date) {
    //配列を宣言
    const dateList = [];
    const classList = [];
    //日付の表示に必要な情報を求める
    const thisDays = getMonthDays(date);
    const prevDays = getFirstDayOfWeek(date);
    const prevLastDate = getPrevMonthDays(date);
    const rows = Math.ceil((thisDays + prevDays) / 7);
    //セルのデータを配列に格納する
    for (let i = 0; i < rows * 7; i++) {
        if (i < prevDays) {
            dateList.push(prevLastDate - prevDays + 1 + i);
            classList.push("cal__day cal__day--prev");
        }
        else if (prevDays <= i && i < prevDays + thisDays) {
            dateList.push(i - prevDays + 1);
            if (i % 7 === 0) {
                classList.push("cal__day cal__day--sun");
            }
            else if (i % 7 === 6) {
                classList.push("cal_day cal__day--sat");
            }
            else {
                classList.push("cal__day");
            }
        }
        else {
            dateList.push(i - (prevDays + thisDays) + 1);
            classList.push("cal__day cal__day--next");
        }
    }
    //日付表示部のHTMLを編集する
    let html = "";
    for (let i = 0; i < rows * 7; i++) {
        if (i % 7 === 0) {
            html += "<tr>";
        }
        html += '<td class="' + classList.shift() + '">' + dateList.shift()?.toString() + "</td>";
        if (i % 7 === 6) {
            html += "</tr>";
        }
    }
    //日付表示部のHTMLを更新する
    elmDays.innerHTML = html;
}
function getMonthDays(date) {
    const lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    lastDay.setMonth(lastDay.getMonth() + 1);
    lastDay.setDate(0);
    const days = lastDay.getDate();
    return days;
}
function getFirstDayOfWeek(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const day = firstDay.getDay();
    return day;
}
function getPrevMonthDays(date) {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1);
    const days = getMonthDays(prevMonth);
    return days;
}
