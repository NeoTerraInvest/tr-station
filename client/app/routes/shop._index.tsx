import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Shop - Home" },
  { name: "description", content: "Shop Home Page" },
];

export default function Shop() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Welcome to Our Shop</h2>
      <p className="text-gray-600">
        Discover our amazing products and exclusive deals.
      </p>
    </div>
  );
}
