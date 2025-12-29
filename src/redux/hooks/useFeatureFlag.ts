import { selectFlagByKey } from "@/features/flags/flagSelectors"
import { useSelector } from "react-redux"

export const useFeatureFlag = (flagKey: string): boolean => {
    const flag = useSelector(selectFlagByKey(flagKey));

    return flag?.enabled ?? false;
}

