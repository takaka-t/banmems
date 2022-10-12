/** TODO:公式の型定義どこ??? */
type ValidationRule = (value: string) => string | true;

/** テキストフィールド用ルールinterface */
interface TextFieldRules {
  /** 必須 */
  readonly required: (value: string) => string | true;
  /** 最大桁数 */
  readonly limitLength: (maxLength: number) => (value: string) => string | true;
}

/** テキストフィールド用ルール */
const textFieldRules: TextFieldRules = {
  required: function (value: string): string | true {
    return !!value || "必須です。";
  },
  limitLength: function (maxLength: number): (value: string) => string | true {
    return (value: string) => value.length <= maxLength || maxLength + "文字以内で入力してください";
  },
};

export default textFieldRules;
