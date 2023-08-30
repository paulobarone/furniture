import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Redirect.css';

export default function Redirect(props) {
    return <a className="redirect" href={props.href}>{props.children} {props.arrow && <ArrowForwardIcon className="redirect-icon" />}</a>
}