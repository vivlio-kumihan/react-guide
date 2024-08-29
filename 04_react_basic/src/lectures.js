/**
 * レクチャーID（フォルダ名）を追加
 */
const lectures = [
  "050_project_sample",
  "060_styling",
  "070_component_nest",
  "073_practice_component",
  "075_fragment",
  "080_expr_in_jsx",
  "085_expr_and_state",
  "087_practice_expr",
  "090_props",
  "100_practice_props",
  "110_props_children",
  "120_props_rules",
  "130_whats_jsx",
  "140_react_element_component",
  "150_memo",
];

export default lectures;

// App.jsのコード
// <div className="App-start">
//   <h2>練習コード（start）</h2>
// // このlecId={lecId}に紐づいている
//   <DynamicLoader lecId={lecId} folder={"start"} />
// </div>
// <div className="App-end">
//   <h2>完成コード（end）</h2>
//   <DynamicLoader lecId={lecId} folder={"end"} />
// </div>