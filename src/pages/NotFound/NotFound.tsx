import { WrongPage } from "./styles";
import ErrorPage from '../../fonts/img/error_4041024x512.png'

interface NotFoundProps {
    
}
 
const NotFound: React.FunctionComponent<NotFoundProps> = () => { //Страничка 404 
    return ( <WrongPage src={ErrorPage}></WrongPage> );
}
 
export default NotFound;