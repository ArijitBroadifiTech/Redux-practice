import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/slices/counter";
import { toggleAction } from "@/redux/slices/toggle";

function Dashboard() {
  const count = useAppSelector((state) => state.counter);

  const toggleValue = useAppSelector((state)=> state.toggle)
  const dispatch = useAppDispatch();
  
  const handleToggle = ()=>{
    dispatch(toggleAction())
  }

  return (
    <div className="flex h-screen text-white w-full items-center justify-center bg-foreground gap-15 ">
      
      <Card className="flex flex-col space-y-5 justify-center items-center p-5">
        <h1 className="text-white font-semibold">Number of available car is {count} </h1>
        <Button variant="destructive" onClick={() => dispatch(increment())}>
          Increment
        </Button>

        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </Card>

     
        <Card className="flex flex-col space-y-5 justify-center items-center p-5 text-white">
            <h1 className="text-white font-semibold">Set Car Availability</h1>

            {/* <p>Toggle Value {toggleValue ? 'true': 'false'} </p> */}

             <div className="flex items-center space-x-2">
                <Switch id="airplane-mode"
                  checked= {toggleValue}
                  onCheckedChange={()=> handleToggle()}
                  />
              <Label htmlFor="airplane-mode">Availability</Label>
            </div>
            {/* <Button variant={"secondary"}
             onClick={()=> handleToggle()} >Toggle</Button> */}
        </Card>
        
    </div>
  );
}

export default Dashboard;
