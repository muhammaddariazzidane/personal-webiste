/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/services/SendEmail";
import { useRef, useState, FormEvent } from "react";
import { toast } from "sonner";
import { FiSend } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | any>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    sendEmail(
      form.current,
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => {
        form.current?.reset();
        toast("Success sending the message", {
          description: `Thank you for getting in touch with me.`,
        });
      })
      .catch((error) => {
        toast("Opps !!", {
          description: error?.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="mt-3 flex flex-col space-y-3"
    >
      <Input
        type="text"
        placeholder="Your Name"
        name="client_name"
        autoComplete="off"
        required
      />
      <Input
        type="email"
        placeholder="Your Email"
        name="email_name"
        autoComplete="off"
        required
      />
      <Textarea
        placeholder="Your Message"
        className="h-36"
        autoComplete="off"
        name="message"
        required
      />
      <Button
        disabled={isLoading}
        className="bg-indigo-600 text-white dark:text-white hover:bg-indigo-700 transition-colors duration-500 w-fit"
      >
        {isLoading ? (
          <>
            Sending
            <ImSpinner2 className="animate-spin ms-2" />
          </>
        ) : (
          <>
            Send Message
            <FiSend className="ms-2" />
          </>
        )}
      </Button>
    </form>
  );
}
