import HeroPage from "@/components/page-sections/hero-page";

export const metadata = {
  title: "Privacy Policy | North by North East",
};

export default function PageLayout({ children }: { children: React.ReactNode}) {
  return ( 
      <main>
      <HeroPage/>
        {children}
      </main> 
    );
}
