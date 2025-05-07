import { Button } from "../";

export default function Tag(props) {
  const { label, onClose = null } = props;

  return (
    <div className="wau-tag">
      {label}
      <Button
        className="wau-tag__close"
        icon={<i className="fa fa-times"></i>}
        type="text"
        round
        small
        onClick={onClose}
      />
    </div>
  );
}
