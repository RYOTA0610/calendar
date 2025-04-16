/*グローバル変数*/

/*表示中の年月*/
const currentDate: Date = new Date();

/*タイトル表示部*/
const elmTitle: HTMLElement = document.querySelector(".cal__title")!;

/*前月移動ナビ*/
const elmPrev: HTMLElement = document.querySelector(".cal__prev")!;

/*翌月移動ナビ*/
const elmNext: HTMLElement = document.querySelector(".cal__next")!;

/*日付表示部*/
const elmDays: HTMLElement = document.querySelector(".cal__days")!;


/*イベントハンドラ*/

/*アプリケーションを初期化*/
const onPageLoad = (): void => {
    //描画を更新
    updateView(currentDate);
};

/*前月移動処理*/
const onPrev = (): void => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateView(currentDate);
};

/*翌月移動処理*/
const onNext = (): void => {
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
function updateView(date: Date): void {
    //タイトル表示部の更新
    updateTitle(date);
    //日付表示部の更新
    updateDays(date);
}

function updateTitle(date: Date): void {
    const title: string = date.getFullYear().toString() + "年" + (date.getMonth() + 1).toString().padStart(2, "0") + "月";
    elmTitle.innerHTML = title;
}

function updateDays(date: Date): void {
    //配列を宣言
    const dateList: number[] = [];
    const classList: string[] = [];
    //日付の表示に必要な情報を求める
    const thisDays: number = getMonthDays(date);
    const prevDays: number = getFirstDayOfWeek(date);
    const prevLastDate: number = getPrevMonthDays(date);
    const rows: number = Math.ceil((thisDays + prevDays) / 7);
    //セルのデータを配列に格納する
    for (let i: number = 0; i < rows * 7; i++) {
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
    let html: string = "";
    for (let i: number = 0; i < rows * 7; i++) {
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

function getMonthDays(date: Date): number {
    const lastDay: Date = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );
    lastDay.setMonth(lastDay.getMonth() + 1);
    lastDay.setDate(0);
    const days: number = lastDay.getDate();
    return days;
}

function getFirstDayOfWeek(date: Date): number {
    const firstDay: Date = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    );
    const day: number = firstDay.getDay();
    return day;
}

function getPrevMonthDays(date: Date): number {
    const prevMonth: Date = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
    );
    const days: number = getMonthDays(prevMonth)
    return days;
}