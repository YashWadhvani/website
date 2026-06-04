import ProductForms from "../../../components/ProductForms";
import productsData from "../../../data/products.json";

type Props = { params: Promise<{ id: string }> };

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = (productsData as any).products.find(
        (p: any) => p.id === id,
    );
    if (!product) {
        return (
            <main className="container py-24">
                <h2 className="text-2xl font-heading">Product not found</h2>
            </main>
        );
    }

    return (
        <main className="container py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-heading font-semibold">
                    Product Categories
                </h1>
                <p className="text-[var(--muted)] mt-2">
                    {product.name} — select a format to see detailed
                    specifications.
                </p>
            </div>
            <ProductForms product={product} />
        </main>
    );
}
