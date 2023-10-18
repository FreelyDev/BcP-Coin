import { useAccount, useNetwork } from 'wagmi';
import {useState, useEffect} from "react";
import Alert from '@material-ui/lab/Alert';


const CheckAccount = () => {
    const { isConnected, address } = useAccount();
    const [loginStatus, setLoginStatus] = useState(false);
    const { chain } = useNetwork();

    useEffect(() => {
        const isLoggedin = address && isConnected;
        setLoginStatus(isLoggedin);
    }, [address, chain, isConnected]);


    return (
        <div className="check-account-container">
            {
                !loginStatus ? (
                    <Alert
                        severity="warning"
                    >
                        Please allow the HEX website to view your current account address in MetaMask.
                    </Alert>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default CheckAccount;