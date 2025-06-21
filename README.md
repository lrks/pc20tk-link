# pc20tk-link
PC20TKに備わるPC Linkを使う

## 仕組み
* PC20TK（およびPC20）には、PCに接続してデータを出力する「PC Link」が付いている
* 背面の赤外線LEDから、LCD表示用のデータが出力されている
  * 内部のIC、FS9711_LP3による
  * 2400 baud, 8bit, No parity
* フォトトランジスタで受ける
  * L-51ROPT1D1など
  * エミッタ接地にするとアクティブHighにできる
  * 背面に固定するには、M3ネジと`workspace/holder.stl`などのホルダーを使う
* USBシリアル変換モジュールなどでPCに接続する
* WebSerial APIから読む
  * https://lrks.github.io/pc20tk-link/

## 実行例
![実行例](https://raw.githubusercontent.com/lrks/pc20tk-link/refs/heads/main/workspace/anime.gif "実行例")
