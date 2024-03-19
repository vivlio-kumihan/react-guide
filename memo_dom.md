# 14.1.4 セレクタAPIによるElementの取得

|セレクタ文字列|記述例|説明|
|---|---|---|
|[attr]|`[disavled]`<br />`<input disabled>`|属性名に一致|
|[attr="value"]|`[type="name"]`<br />`<input type="name">`|属性名の属性値に一致|
|[attr^="value"]|`[href^="https"]`<br />`<a href="https://hoge.com">`|属性名の属性値に部分一致|
|[attr$="value"]|`[href$="pdf"]`<br />`<a href="./hoge.pdf">`|属性名の属性値に部分一致|
|[attr*="value"]|`[name*="text"]`<br />`<input name="text-1">`<br />`<input name="text-2">`|属性名の属性値に部分一致|
|S1 > S2||属性名の属性値に部分一致|セレクター1に含まれる全てのセレクター2に一致
|S1 + S2||セレクター1の直後のセレクター2に一致|
|S1 ~ S2||セレクター1の兄弟要素でセレクター1よりも後方にあるセレクター2に一致|