

// 新しくカードをつくるを押した時--------------------------------
const com_Num_1 = [];

$(function () {
  $('#new').on('click', function () {

    // ----重複しない配列--ここから↓↓↓↓↓↓↓↓↓↓↓↓-----------------------
    // 1〜24までの配列をつくる
    // 空の配列を作成
    for (let i = 1; i <= 24; i++) {
      // 1〜24まで順番に配列に入れる
      com_Num_1.push(i);
    }
    let len = com_Num_1.length;
    //シャッフルアルゴリズム
    // もともと最後にあった値と、ランダムで選ばれた値を交換する
    // 最後の値は確定させて、残りの0〜最後の一つ前までで再度値を交換していきシャッフルさせる
    while (len) {
      const ran_Num_1 = Math.floor(Math.random() * len);
      let t = com_Num_1[--len];
      com_Num_1[len] = com_Num_1[ran_Num_1];
      com_Num_1[ran_Num_1] = t;
    }
    //シャッフルされた配列の要素を順番に配列に入れる
    com_Num_1.forEach(function (value) { com_Num_1.push(value) });

    // ランダムになっているかの確認
    // for (let i = 0; i < 24; i++) {
    //   console.log(com_Num_1[i]);
    // }
    // ----重複しない配列--ここまで↑↑↑↑↑↑↑↑↑↑↑↑------------------------

    // id="bingo"に枠と数字のついたカードを追加--------------------------------
    // カードのidのとり方は
    // 1行目 0 1 2 3 4 
    // 2行目 5 6 7 8 9
    // 3行目 10 11 Free 12  13
    // 4行目 14 15 16 17 18
    // 5行目 19 20 21 22 23
    // カードにcom_Num_1[0]〜com_Num_1[23]が入る
    for (let i = 0; i < 12; i++) {
      // $("#box").append('<p id="' + i + '">' + i + '</p>');
      $("#box").append('<p style="background-color: orange;" id="' + i + '">' + com_Num_1[i] + '</p>');
    }
    $("#box").append('<p id="free">FREE</p>');
    for (let i = 12; i < 24; i++) {
      // $("#box").append('<p id="' + i + '">' + i + '</p>');
      $("#box").append('<p style="background-color: orange;" id="' + i + '">' + com_Num_1[i] + '</p>');
    }
  });
});


// 抽選をするを押した時--------------------------------
const com_Num_2 = [];

$(function () {
  $('#ok').on('click', function () {

    // ----重複しない配列--ここから↓↓↓↓↓↓↓↓↓↓↓↓-----------------------
    // 1〜24までの配列をつくる
    // 空の配列を作成
    for (let i = 1; i <= 24; i++) {
      // 1〜24まで順番に配列に入れる
      com_Num_2.push(i);
    }
    let len = com_Num_2.length;
    //シャッフルアルゴリズム
    // もともと最後にあった値と、ランダムで選ばれた値を交換する
    // 最後の値は確定させて、残りの0〜最後の一つ前までで再度値を交換していきシャッフルさせる
    while (len) {
      const ran_Num_2 = Math.floor(Math.random() * len);
      let t = com_Num_2[--len];
      com_Num_2[len] = com_Num_2[ran_Num_2];
      com_Num_2[ran_Num_2] = t;
    }
    //シャッフルされた配列の要素を順番に配列に入れる
    com_Num_2.forEach(function (value) { com_Num_2.push(value) });

    // ランダムになっているかの確認
    // for (let i = 0; i < 24; i++) {
    //   console.log(com_Num_2[i]);
    // }
    // ----重複しない配列--ここまで↑↑↑↑↑↑↑↑↑↑↑↑------------------------
    function pushBtn() {
      $('#start').on('click', function () {
        $('#lottery').text(com_Num_2[i]);
        // 配列要素を検索するinArray
        const hit = $.inArray(com_Num_2[i], com_Num_1);
        // console.log(hit);
        // 変数をid名に使用する方法
        // $('#' + hit).css('background-color', 'orange', 3000);
        $('#' + hit).animate({
          opacity: '0',
        }, 1500, 'swing');
        i++;
      });
    };
    while (23) {
      pushBtn();
    }
  });

});



// 出てくる番号をランダムで決める

// 出てきた番号をビンゴカードに反映させる

// ラインができたかのチェック

