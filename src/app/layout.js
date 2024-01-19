// import Modal from "@/components/modal";

export default function RootLayout({ children, auth }) {
  return (
    <html lang="en">
      <body>
        {children}

        {auth}
      </body>
    </html>
  );
}
