export default function ActionPulse(props) {
  const { danger } = props;

  let className = "wau-pulse";

  if (danger) {
    className += " wau-pulse--danger";
  }

  return <div className={className}></div>;
}
