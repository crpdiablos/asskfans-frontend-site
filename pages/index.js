
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to AsskFans</h1>
      <a href={process.env.NEXT_PUBLIC_API_URL + '/api/tips/stripe/create-checkout-session'}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Pay with Stripe</button>
      </a>
    </div>
  );
}
