__ace_shadowed__.define("ace/theme/cobalt",function(a,b,c){var d=a("pilot/dom"),e=".ace-cobalt .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-cobalt .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-cobalt .ace_gutter {\n  width: 50px;\n  background: #e8e8e8;\n  color: #333;\n  overflow : hidden;\n}\n\n.ace-cobalt .ace_gutter-layer {\n  width: 100%;\n  text-align: right;\n}\n\n.ace-cobalt .ace_gutter-layer .ace_gutter-cell {\n  padding-right: 6px;\n}\n\n.ace-cobalt .ace_print_margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-cobalt .ace_scroller {\n  background-color: #002240;\n}\n\n.ace-cobalt .ace_text-layer {\n  cursor: text;\n  color: #FFFFFF;\n}\n\n.ace-cobalt .ace_cursor {\n  border-left: 2px solid #FFFFFF;\n}\n\n.ace-cobalt .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #FFFFFF;\n}\n \n.ace-cobalt .ace_marker-layer .ace_selection {\n  background: rgba(179, 101, 57, 0.75);\n}\n\n.ace-cobalt .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174);\n}\n\n.ace-cobalt .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n\n.ace-cobalt .ace_marker-layer .ace_active_line {\n  background: rgba(0, 0, 0, 0.35);\n}\n\n       \n.ace-cobalt .ace_invisible {\n  color: rgba(255, 255, 255, 0.15);\n}\n\n.ace-cobalt .ace_keyword {\n  color:#FF9D00;\n}\n\n.ace-cobalt .ace_keyword.ace_operator {\n  \n}\n\n.ace-cobalt .ace_constant {\n  color:#FF628C;\n}\n\n.ace-cobalt .ace_constant.ace_language {\n  \n}\n\n.ace-cobalt .ace_constant.ace_library {\n  \n}\n\n.ace-cobalt .ace_constant.ace_numeric {\n  \n}\n\n.ace-cobalt .ace_invalid {\n  color:#F8F8F8;\nbackground-color:#800F00;\n}\n\n.ace-cobalt .ace_invalid.ace_illegal {\n  \n}\n\n.ace-cobalt .ace_invalid.ace_deprecated {\n  \n}\n\n.ace-cobalt .ace_support {\n  color:#80FFBB;\n}\n\n.ace-cobalt .ace_support.ace_function {\n  color:#FFB054;\n}\n\n.ace-cobalt .ace_function.ace_buildin {\n  \n}\n\n.ace-cobalt .ace_string {\n  \n}\n\n.ace-cobalt .ace_string.ace_regexp {\n  color:#80FFC2;\n}\n\n.ace-cobalt .ace_comment {\n  font-style:italic;\ncolor:#0088FF;\n}\n\n.ace-cobalt .ace_comment.ace_doc {\n  \n}\n\n.ace-cobalt .ace_comment.ace_doc.ace_tag {\n  \n}\n\n.ace-cobalt .ace_variable {\n  color:#CCCCCC;\n}\n\n.ace-cobalt .ace_variable.ace_language {\n  color:#FF80E1;\n}\n\n.ace-cobalt .ace_xml_pe {\n  \n}";d.importCssString(e),b.cssClass="ace-cobalt"})