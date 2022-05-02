import { useContext } from 'react';
import useCreateContextByMe from '../context/useCreateContextByMe';

function useContextByMe () {
    return useContext(useCreateContextByMe);
}

export default useContextByMe;