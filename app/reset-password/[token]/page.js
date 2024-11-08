// app/reset-password/[token]/page.js
import ResetPassword from "@/app/Component/resetPassword";

export default async function ResetPasswordPage({ params }) {
  const { token } = await params; // Extract token from params

  return <ResetPassword token={token} />;
}
