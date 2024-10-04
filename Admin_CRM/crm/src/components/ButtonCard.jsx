// import { useNavigate } from 'react-router-dom';

export default function ButtonCard({ buttonText }) {
    // const navigate = useNavigate();

    return (
        <button
            className="btn btn-primary"
            style={{ textAlign: 'center', marginTop: '10px' }}
            // onClick={() => navigate(redirectUrl)}
        >
            {buttonText}
        </button>
    );
}
// import { useNavigate } from 'react-router-dom';

// export default function ButtonCard({ buttonText, redirectUrl }) {
//     const navigate = useNavigate();

//     return (
//         <button
//             className="btn btn-primary"
//             style={{ textAlign: 'center', marginTop: '10px' }}
//             onClick={() => navigate(redirectUrl)}  // Navigate on button click
//         >
//             {buttonText}
//         </button>
//     );
// }



