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