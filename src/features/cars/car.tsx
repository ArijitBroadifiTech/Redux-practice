import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";

function Car() {
  const count = useAppSelector((state) => state.counter);
  const toggleValue = useAppSelector((state) => state.toggle);

  console.log(toggleValue);

  return (
    <div className="bg-accent-foreground h-screen flex justify-center items-center text-white">
      <Card className="text-white p-5">
        <h1 className="font-semibold">No of Available cars {count}</h1>
        {/* <p>Toggle Value {toggleValue ? "true" : "false"} </p> */}
        <Button variant={"destructive"} 
        disabled= {!toggleValue}
        className='disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60
          transition duration-300'>Buy Now</Button>
      </Card>
    </div>
  );
}

export default Car;
