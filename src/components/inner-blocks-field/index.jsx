import { Field } from "../";

export default function InnerBlock(props) {
  const { label = "", InnerBlocks } = props;

  return (
    <div className="wau-inner-block">
      <Field label={label}>{InnerBlocks}</Field>
    </div>
  );
}
