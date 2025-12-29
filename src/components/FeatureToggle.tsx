import { toggleOptimistic } from "@/features/flags/flagSlice";
import { updateFeatureFlag } from "@/features/flags/flagThunks";
import { useDebouncedCallback } from "@/redux/hooks/useDebouncedCallback";
import { memo } from "react";
import { useDispatch } from "react-redux";

interface Props {
  flagKey: string;
  enabled: boolean;
}

export const FeatureToggle = memo(({flagKey, enabled}:Props)=>{
  const dispatch = useDispatch();

   const debouncedUpdate = useDebouncedCallback((value: boolean) => {
    dispatch(updateFeatureFlag({ key: flagKey, enabled: value }) as any);
  }, 400);

  const onToggle = ()=> {
    dispatch(toggleOptimistic(flagKey));
    debouncedUpdate(!enabled)
  };

  return (
    <button onClick={onToggle}
     className="p-2 bg-gray-500 text-white rounded-md">
        {enabled ? 'Disable' : 'Enable'}
    </button>
  )
}) 