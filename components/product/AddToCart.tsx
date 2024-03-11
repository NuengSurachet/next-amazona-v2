import { OrderItem } from "@/lib/models/OrderModel";
import { useRouter } from "next/navigation";

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();
}
