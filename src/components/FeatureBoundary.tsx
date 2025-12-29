import { useFeatureFlag } from "@/redux/hooks/useFeatureFlag";
import type { ReactNode } from "react";

interface Props {
  flagKey: string;
  children: ReactNode;
}

export const FeatureBoundary = ({flagKey, children}: Props) => {
    const enabled = useFeatureFlag(flagKey);

    return enabled?  <>{children}</> : null;
}