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
const onPageLoad = (): void => { };

/*前月移動処理*/
const onPrev = (): void => { };

/*翌月移動処理*/
const onNext = ():void => { };

/*イベントリスナー*/

/*ページの読み込み完了イベント*/
window.addEventListener("load", onPageLoad);

/*前月移動ナビのクリックイベント*/
elmPrev.addEventListener("click", onPrev);

/*翌月移動ナビのクリックイベント*/
elmNext.addEventListener("click", onNext);