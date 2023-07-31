import { useAppContext } from "../../Context";
import Constants from "../../common/Constants";
import "./css.css";

function Footer() {
  const { state } = useAppContext();
  return (
    <footer className="powered">
      <a href="http://www.pikir.biz" style={{color: state.mode == 'dark' ? '#fff' : '#000', textDecoration: 'none'}} target="_blank">{Constants.Powered}</a>
    </footer>
  );
}

export default Footer;
