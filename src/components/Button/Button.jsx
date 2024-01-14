import './Button.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Button(props) {
  return <button className="button">{props.children} {props.arrow && <ArrowForwardIcon className="button-icon" />}</button>
}