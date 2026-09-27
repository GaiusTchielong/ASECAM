import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASECAM",
  description:
    "Association des Étudiants Camerounais de Madagascar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
