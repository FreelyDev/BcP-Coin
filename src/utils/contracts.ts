import { getContractObj } from ".";
import { StakingEngineDetail, StakingInfo } from "./typs";
import { BigNumber, ethers } from "ethers";
import toast from "react-hot-toast";


export async function scHEXTransfer(chainId, provider, to, amount) {
    const HEXContract = getContractObj('HEX', chainId, provider);
    try {
        if (parseFloat(amount) <= 0) {
            toast.error("The amount must be higher than zero!");
            return false;
        }
        const tokenDecimals = await HEXContract.decimals();
        const etherAmount: BigNumber = ethers.utils.parseUnits(amount.toString(), tokenDecimals);
        const tx = await HEXContract.transfer(to, etherAmount);
        await tx.wait(1);

        return true;
    } catch (e) {
        // console.log(e);
        return false;
    }
}


export async function scHEXStakeStart(chainId, provider, newStakedHex, newStakedDays) {
    const HEXContract = getContractObj('HEX', chainId, provider);
    try {
        if (parseFloat(newStakedHex) <= 0) {
            toast.error("The amount must be higher than zero!");
            return false;
        }
        const tokenDecimals = await HEXContract.decimals();
        const newStakedHearts: BigNumber = ethers.utils.parseUnits(newStakedHex.toString(), tokenDecimals);
        const tx = await HEXContract.stakeStart(newStakedHearts, newStakedDays);
        await tx.wait(1);

        return true;
    } catch (e) {
        // console.log(e);
        return false;
    }
}


export async function scHEXStakeEnd(chainId, provider, stakeIndex, stakeIdParam) {
    const HEXContract = getContractObj('HEX', chainId, provider);
    try {
        const tx = await HEXContract.stakeEnd(stakeIndex, stakeIdParam);
        await tx.wait(1);

        return true;
    } catch (e) {
        // console.log(e);
        return false;
    }
}

export async function scHEXStakeGoodAccounting(chainId, provider, stakerAddr, stakeIndex, stakeIdParam) {
    const HEXContract = getContractObj('HEX', chainId, provider);
    try {
        const tx = await HEXContract.stakeGoodAccounting(stakerAddr, stakeIndex, stakeIdParam);
        await tx.wait(1);

        return true;
    } catch (e) {
        // console.log(e);
        return false;
    }
}
export async function scGetStakingEngineInfo(chainId, provider, account) {
    const HEXContract = getContractObj('HEX', chainId, provider);

    try {
        const [
            currentDay,
            globalInfo,
            hexDecimals,
            hexBalance,
            stakeCount,
        ] = await Promise.all([
            HEXContract.currentDay(),
            HEXContract.globalInfo(),
            HEXContract.decimals(),
            account ? HEXContract.balanceOf(account) : BigNumber.from(0),
            account ? HEXContract.stakeCount(account) : BigNumber.from(0),
        ]);

        const getStakeListsCmds = [];
        for (let i = 0; i < stakeCount.toNumber(); i++) {
            getStakeListsCmds.push(account ? HEXContract.stakeLists(account, i) : null);
        }
        const stakedInfos = await Promise.all(getStakeListsCmds);

        const StakingInfoList: StakingInfo[] = [];
        for (let i = 0; i < stakedInfos.length; i++) {
            if (!stakedInfos[i]) continue;

            const stakeInfo: StakingInfo = {
                stakedIndex: i,
                stakedId: stakedInfos[i].stakeId
            }
            StakingInfoList.push(stakeInfo);
        }

        const stakingDetail: StakingEngineDetail = {
            currentDay: currentDay.toNumber(),
            sharePrice: globalInfo[2].toNumber(),
            hexBalance: parseFloat(ethers.utils.formatUnits(hexBalance, hexDecimals)),
            stakingInfoList: StakingInfoList
        }

        return stakingDetail;
    } catch (e) {
        // console.log(e);
        return null;
    }
}
// export async function scGetStakingEngineInfo(account) {
//     const jsonProvider = new ethers.providers.JsonRpcProvider(polygon.rpcUrls.public.http[0]);
//     const StakingContract = getContractObj('StakingContract', currentNetwork, jsonProvider);
//     const TokenContract = getContractObj('AztecToken', currentNetwork, jsonProvider);

//     try {
//         const [
//             AztecTokenDecimals,
//             AztecTokenBalance,

//             stakedData,

//             periodForBronze,
//             bronzeRewards,

//             periodForSilver,
//             silverRewards,

//             periodForGold,
//             goldRewards,
//         ] = await Promise.all([
//             TokenContract.decimals(),
//             account ? TokenContract.balanceOf(account) : BigNumber.from(0),

//             account ? StakingContract.stakes(account) : null,

//             StakingContract.periodForBronze(),
//             account ? StakingContract.getBronzeRewards(account) : BigNumber.from(0),
//             StakingContract.periodForSilver(),
//             account ? StakingContract.getSilverRewards(account) : BigNumber.from(0),
//             StakingContract.periodForGold(),
//             account ? StakingContract.getGoldRewards(account) : BigNumber.from(0),
//         ]);

//         const stakingDetail: StakingEngineDetail = {
//             AztecTokenBalance: parseFloat(ethers.utils.formatUnits(AztecTokenBalance, AztecTokenDecimals)),

//             periodForBronze: periodForBronze.toNumber(),
//             bronzeStaked: stakedData ? parseFloat(ethers.utils.formatUnits(stakedData[0], AztecTokenDecimals)) : 0.00,
//             bronzeStakedTimestamp: stakedData ? stakedData[1].toNumber() : 0,
//             bronzeRewards: parseFloat(ethers.utils.formatUnits(bronzeRewards, AztecTokenDecimals)),

//             periodForSilver: periodForSilver.toNumber(),
//             silverStaked: stakedData ? parseFloat(ethers.utils.formatUnits(stakedData[3], AztecTokenDecimals)) : 0.00,
//             silverStakedTimestamp: stakedData ? stakedData[4].toNumber() : 0,
//             silverRewards: parseFloat(ethers.utils.formatUnits(silverRewards, AztecTokenDecimals)),

//             periodForGold: periodForGold.toNumber(),
//             goldStaked: stakedData ? parseFloat(ethers.utils.formatUnits(stakedData[6], AztecTokenDecimals)) : 0.00,
//             goldStakedTimestamp: stakedData ? stakedData[7].toNumber() : 0,
//             goldRewards: parseFloat(ethers.utils.formatUnits(goldRewards, AztecTokenDecimals)),
//         }

//         return stakingDetail;
//     } catch (e) {
//         console.log(e);
//         return null;
//     }
// }

export async function scStakeBronze(chainId, provider, account, amount) {
    const StakingContract = getContractObj('StakingContract', chainId, provider);
    const TokenContract = getContractObj('AztecToken', chainId, provider);
    try {
        if (parseFloat(amount) <= 0) {
            toast.error("The amount must be higher than zero!");
            return false;
        }
        const tokenDecimals = await TokenContract.decimals();
        const etherAmount: BigNumber = ethers.utils.parseUnits(amount.toString(), tokenDecimals);
        const allowancedAmount: BigNumber = await TokenContract.allowance(account, StakingContract.address);
        if (allowancedAmount.lt(etherAmount)) {
            const tx = await TokenContract.approve(StakingContract.address, ethers.constants.MaxUint256);
            await tx.wait(1);
        }

        const tx = await StakingContract.stakeForBronze(etherAmount);
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function scStakeSilver(chainId, provider, account, amount) {
    const StakingContract = getContractObj('StakingContract', chainId, provider);
    const TokenContract = getContractObj('AztecToken', chainId, provider);
    try {
        if (parseFloat(amount) <= 0) {
            toast.error("The amount must be higher than zero!");
            return false;
        }
        const tokenDecimals = await TokenContract.decimals();
        const etherAmount: BigNumber = ethers.utils.parseUnits(amount.toString(), tokenDecimals);
        const allowancedAmount: BigNumber = await TokenContract.allowance(account, StakingContract.address);
        if (allowancedAmount.lt(etherAmount)) {
            const tx = await TokenContract.approve(StakingContract.address, ethers.constants.MaxUint256);
            await tx.wait(1);
        }

        const tx = await StakingContract.stakeForSilver(etherAmount);
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function scStakeGold(chainId, provider, account, amount) {
    const StakingContract = getContractObj('StakingContract', chainId, provider);
    const TokenContract = getContractObj('AztecToken', chainId, provider);
    try {
        if (parseFloat(amount) <= 0) {
            toast.error("The amount must be higher than zero!");
            return false;
        }
        const tokenDecimals = await TokenContract.decimals();
        const etherAmount: BigNumber = ethers.utils.parseUnits(amount.toString(), tokenDecimals);
        const allowancedAmount: BigNumber = await TokenContract.allowance(account, StakingContract.address);
        if (allowancedAmount.lt(etherAmount)) {
            const tx = await TokenContract.approve(StakingContract.address, ethers.constants.MaxUint256);
            await tx.wait(1);
        }

        const tx = await StakingContract.stakeForGold(etherAmount);
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function scClaimBronze(chainId, provider) {
    const StakingContract = getContractObj('StakingContract', chainId, provider);
    try {
        const tx = await StakingContract.claimForBronze();
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function scClaimSilver(chainId, provider) {
    const StakingContract = getContractObj('StakingContract', chainId, provider);
    try {
        const tx = await StakingContract.claimForSilver();
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function scClaimGold(chainId, provider) {
    const StakingContract = getContractObj('StakingContract', chainId, provider);
    try {
        const tx = await StakingContract.claimForGold();
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}