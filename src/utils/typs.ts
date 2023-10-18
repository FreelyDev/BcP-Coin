export interface StakingEngineDetail {
    currentDay: number;
    sharePrice: number;
    hexBalance: number;
    stakingInfoList: StakingInfo[];

    AztecTokenBalance?: number;

    periodForBronze?: number;
    bronzeStaked?: number;
    bronzeStakedTimestamp?: number;
    bronzeRewards?: number;

    periodForSilver?: number;
    silverStaked?: number;
    silverStakedTimestamp?: number;
    silverRewards?: number;

    periodForGold?: number;
    goldStaked?: number;
    goldStakedTimestamp?: number;
    goldRewards?: number;
}

export interface StakingInfo {
    stakedIndex: number;
    stakedId: number;
}