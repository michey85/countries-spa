import { useHistory } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";


export const CountryPage = ({match}) => {
    const {goBack} = useHistory();

    return (
        <div>
            <button onClick={goBack}>
                <IoArrowBack size="14" /> Back
            </button>
            {match.params.id}
        </div>
    )
}
