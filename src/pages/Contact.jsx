import { useState } from "react";
import { send } from '@emailjs/browser';
import Nav from "../components/Nav";
import PageLoader from "../components/PageLoader";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // success, error, or validation message
  const [cooldown, setCooldown] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  // Basic sanitization to remove HTML tags
  const sanitizeInput = (str) => {
    return str.replace(/<[^>]*>?/gm, '').trim();
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (hidden field named "phone")
    const honeypotValue = e.target.phone.value;
    if (honeypotValue) {
      // Bot detected, ignore submission silently
      return;
    }

    if (cooldown) {
      setStatus("Please wait before sending another message.");
      return;
    }

    // Sanitize inputs
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanMessage = sanitizeInput(message);

    // Validate inputs
    if (!isValidEmail(cleanEmail)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    if (cleanName.length === 0 || cleanName.length > 50) {
      setStatus("Name must be between 1 and 50 characters.");
      return;
    }
    if (cleanEmail.length > 100) {
      setStatus("Email is too long.");
      return;
    }
    if (cleanMessage.length === 0 || cleanMessage.length > 500) {
      setStatus("Message must be between 1 and 500 characters.");
      return;
    }

    setSending(true);
    setStatus(null);

    const templateParams = {
      from_name: cleanName,
      from_email: cleanEmail,
      message: cleanMessage,
    };

    try {
      await send(
        'service_3tveg1g',    // from EmailJS dashboard
      'template_g303ub1',   // from EmailJS dashboard
      templateParams,
      '47XIyFkCRXk8DNoSm'
      );

      setSending(false);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      // Cooldown for 60 seconds
      setCooldown(true);
      setTimeout(() => setCooldown(false), 60000);

    } catch (error) {
      setSending(false);
      setStatus("error");
    }
  };

  return (
    <>
    {!loadingDone && <PageLoader onFinish={() => setLoadingDone(true)} />}
      <Nav />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 min-h-[70vh] flex flex-col justify-center">
        <h1 className="font-poppins font-bold text-5xl mb-6">Contact Me.</h1>
        <p className="font-mono mb-8 text-lg max-w-2xl">
          Feel free to reach out for any project inquiries, collaborations, or just to say hi!  
          Use the form below to send me an email directly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-6"
          noValidate
        >
          {/* Honeypot field (hidden) */}
          <input
            type="text"
            name="phone"
            style={{ display: 'none' }}
            autoComplete="off"
            tabIndex={-1}
            value=""
            onChange={() => {}}
          />

          <div>
            <label htmlFor="name" className="block mb-2 font-poppins font-medium text-gray-900">
              Name
            </label>
            <input
              id="name"
              type="text"
              maxLength={50}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-900 px-4 py-2 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-poppins font-medium text-gray-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              maxLength={100}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-900 px-4 py-2 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-poppins font-medium text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              required
              maxLength={500}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-gray-900 px-4 py-2 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={sending || cooldown}
            className="bg-gray-900 hover:bg-white hover:border-2 hover:border-black text-white hover:text-black rounded-md px-6 py-3 font-poppins text-lg font-semibold transition-all duration-300 disabled:opacity-50"
          >
            {sending ? "Sending..." : cooldown ? "Please wait..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 font-semibold">Message sent successfully! Thank you.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-semibold">Oops! Something went wrong. Please try again later.</p>
        )}
        {typeof status === "string" && status !== "success" && status !== "error" && (
          <p className="mt-4 text-red-600 font-semibold">{status}</p>
        )}
      </section>
    </>
  );
}
