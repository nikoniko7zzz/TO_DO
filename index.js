$(function () {
  // saveボタンを押して保存する
  $("#save").on("click", function () {
    // 入力データをdataという配列にする
    const data = {
      category: $('#category').val(),
      todo: $('#todo').val(),
      // by_when: $('#by_when').val(),
      // textarea: $('#textarea').val(),
    };

    // 配列dataをJSONデータに保存する
    const jsonData = JSON.stringify(data);
    // JSONデータをlocalStorageに保存する。PHPなどでデータを使えるようにする
    // storage.setItem(keyName, keyValue); 保存するキーと値をセットにする
    // localStorage.length.toString() localStorageにあるデータの数を出す
    // キーとvalueをセットにして、保存する キーはデータの数、値は入力されたテキスト
    const keyNum = (localStorage.length.toString());
    localStorage.setItem(keyNum, jsonData);
    // id=categoryとtodoのvalueを消す
    $("#category").val("");
    $("#todo").val("");

    showList();
  });

  showList();
});
  
// // 追加したり、削除した時にリストの表示を更新する
function showList() {
  $("#todo_table").html("");
  for (let keyNum = 0; keyNum < localStorage.length; keyNum++) {
    // if (localStorage.getItem(keyNum)) {
      // localStorageのデータをjsonDataと名前をつけて
      // jsonDataというデータをJSONファイルにする 名前はobj_get
      const jsonData = localStorage.getItem(keyNum);
      const obj_get = JSON.parse(jsonData);
    //   //  変数iに1づつ足して 0〜localStorageにあるデータの数まで繰り返す
      //     // ulの中にリストを追加 append＝追加
      //     // $("todo_table").append("<tr><td></td></tr>") ←テーブルに行を増やす時
      //     // buttonにキーを割り付けて、押したら削除できる
    
    
    
    $("#todo_table").append('<tr><td id="td1">' + obj_get.category + '</td><td id="td2">' + obj_get.todo + '</td><td onclick = "deleteItem(' + obj_get + ')">Delete</td></tr>');

    // onclick = 'deleteItem(" + localStorage.key(i) + ")'
  }
}

// onclick = 'deleteItem(" + obj_get + ")'
// onclick = "deleteItem(' + obj_get + ')"

function deleteItem(obj_get) {
  // const keyNum = obj_get;
  localStorage.removeItem('obj_get');
  showList();
}


// function deleteItem(obj_get) {
//   // const i = obj_get;
//   localStorage.removeItem('obj_get');
//   showList();
// }


// $('#clear').on('click', function () {
//   localStorage.removeItem('memo');
//   $('#input').val('');
//   $('#text_area').val('');
// });

$('.btn').on('click', function () {
  const click = $(this).attr('id');
  localStorage.removeItem('click');
  showList();
});
// // attr メソッド とは、HTML 要素の様々な属性の値を取得や変更ができるメソッド












