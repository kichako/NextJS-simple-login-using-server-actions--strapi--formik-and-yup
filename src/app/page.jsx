import { Auth } from '@/components/Auth';

export default function Home() {
    return (
        <main>
            <div className="container mx-auto grid grid-cols-12 gap-8">
                <div className="col-span-12">
                    <h1 className="text-3xl uppercase font-black text-center">Server action - Auth Form</h1>
                </div>
                <Auth />
            </div>
        </main>
    );
}
