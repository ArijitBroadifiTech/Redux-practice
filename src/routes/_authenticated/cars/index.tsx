import Car from "@/features/cars/car";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/cars/")({
  component: () => <Car />,
});
