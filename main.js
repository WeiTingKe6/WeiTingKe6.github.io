//兩個圖片之間互相切換
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/27f36125b7141b318b65befa036c13e8.jpg'){
        myImage.setAttribute('src','images/2015110969829025.jpg');
    } else {
        myImage.setAttribute('src','images/27f36125b7141b318b65befa036c13e8.jpg');
    }
}
//我們把一個圖片元素的參考存進了 myImage 變數裡
//我們把這個變數的 onclick 事件處理器設定為一個匿名函式
/*每當這個圖片被點選一次：
1.我們會去取得圖片中 src 屬性的數值
2.用一個條件判斷式，來檢查 src 的數值是否跟原始圖片的位址相同:
(1)屬性兩者相同,將src數值更改為第二個圖片的位置
(2)屬性兩者不同,將src數值更改為原始圖片的位置 */

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    //promot: 要求使用者輸入ㄧ些資料,並在使用者點選確認後,將內容儲存為一個變數裡
    if(!myName || myName === null) { //myName沒有值或是他的值是null,再從頭執行setUserName()
        setUserName();
    } else{
        localStorage.setItem('name',myName);
    //我們呼叫一個名稱為 localStorage 的 API，
    //這個 API 可以讓使用者先將一些資料儲存在瀏覽器裡面，之後有需要的話再取出來使用。
    // localStorage的setItem()函式來建立並且把資料儲存到名稱為 'name' 的變數裡
    //再把包含者用者名字的 myName 的值指定給她。
        myHeading.innerHTML = 'Mozilla is cool,' + myName;
    //最後，我們將一個字串跟使用者的名字指定給標題的 innerHTML 特性
    }
}

//加入這個 if ... else 區塊 — 因為她會在程式一開始被讀取的時候就被啟用，我們稱她為初始化程式碼

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool' + storedName;
}
//使用!邏輯負運算子來檢查name是否存在,如果沒有就執行setUsername()來創造他
//如果有(上次造訪就設定了),我們就使用getItem()來取得儲存的名字.

myButton.onclick = function() {
    setUserName();
}
//最後，把以下的 onclick 事件處理器跟按鈕綁定，如此一來，每次點選按鈕時就會執行 setUserName()。