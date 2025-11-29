import { use } from 'react';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function UserPage({ params }: PageProps) {
    const { id } = use(params);

    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-emerald-950 to-slate-950 p-4">
            <Card className="w-full max-w-md bg-slate-900 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 ring-2 ring-emerald-400 animate-pulse">
                        <svg
                            className="h-10 w-10 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <CardTitle className="text-2xl text-emerald-400">Berlangganan Berhasil!</CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-300">
                        Terima kasih telah berlangganan. Akun Anda sekarang sudah aktif.
                    </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                    <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/30 p-4 shadow-lg shadow-emerald-500/10">
                        <h3 className="font-semibold text-emerald-400 mb-2">
                            Apa Selanjutnya?
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-0.5">✓</span>
                                <span>Akses penuh ke semua fitur premium</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-0.5">✓</span>
                                <span>Email konfirmasi telah dikirim</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-0.5">✓</span>
                                <span>Dukungan pelanggan prioritas</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg bg-cyan-950/50 border border-cyan-500/30 p-3 shadow-lg shadow-cyan-500/10">
                        <p className="text-sm text-cyan-300">
                            <span className="font-semibold text-cyan-400">User ID:</span> {id}
                        </p>
                    </div>

                    <div className="text-center text-sm text-slate-400">
                        <p>
                            Jika Anda memiliki pertanyaan, hubungi{" "}
                            <a href="mailto:support@example.com" className="text-emerald-400 hover:text-emerald-300 hover:underline">
                                tim dukungan kami
                            </a>
                        </p>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                    <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30">
                        <Link href="/">
                            Kembali ke Beranda
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-emerald-500/50 text-emerald-400 hover:bg-emerald-950/50 hover:text-emerald-300">
                        <Link href={`/user/${id}/dashboard`}>
                            Lihat Dashboard Saya
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}