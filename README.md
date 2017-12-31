# jQuery swichTab

## markup
```
<div class="tabGroup tabGroup1">
  <ul class="swichtab-controller">
    <li data-swichtab="controller"><a href="#tab1">tab1</a></li>
    <li data-swichtab="controller"><a href="#tab2">tab2</a></li>
    <li data-swichtab="controller"><a href="#tab3">tab3</a></li>
  </ul>
  <div class="swichtab-contents">
    <div id="tab1" class="swichtab-panel" data-swichtab="target">
      <p>hogehoge</p>
    </div>
 
    <div id="tab2" class="swichtab-panel" data-swichtab="target">
      <p>fugafuga</p>
    </div>
 
    <div id="tab3" class="swichtab-panel" data-swichtab="target">
      <p>piyopiyo</p>
    </div>
  </div>
  <!-- /.swichtab-contents -->
</div>
<!-- /.swichtab -->
```

## usage
```
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
 
<script src="./src/js/jquery.swichTab.js" charset="utf-8"></script>
<script type="text/javascript">
  $('.tabGroup1').swichTab();
</script>
```

## options
<table>
  <thead>
    <tr>
      <th>option name</th>
      <th>value</th>
      <th>type</th>
      <th>description</th>
    </tr>
  </thead>
  <tr>
    <th>cahngePanel</th>
    <td>'toggle'<br>(default)</td>
    <td>string</td>
    <td>エフェクトしないでタブを切り替え</td>
  </tr>
  <tr>
    <td></td>
    <td>'fade'</td>
    <td>string</td>
    <td>フェードインをしながらタブを切り替え</td>
  </tr>
  <tr>
    <th>swiper</th>
    <td>true</td>
    <td>boolean</td>
    <td>タッチイベント対応デバイスでスワイプによるタブ切り替えを許可</td>
  </tr>
  <tr>
    <td></td>
    <td>false<br>(default)</td>
    <td>boolean</td>
    <td>タッチイベント対応デバイスでスワイプによるタブ切り替えを禁止</td>
  </tr>
  <tr>
    <th>index</th>
    <td>number<br>(default : 0)</td>
    <td>number</td>
    <td>初期表示時にアクティブにするタブを指定</td>
  </tr>
</table>

## License
MIT