"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/schemas";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomePage() {
  const [submitted, setSubmitted] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 500)); // simulate request
    setSubmitted(data);
    reset();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Contact Form</h1>

      <Card className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            label="Name"
            placeholder="Jane Doe"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            label="Email"
            placeholder="jane@email.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <label className="block space-y-1">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Message
            </span>
            <textarea
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-black dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-white"
              rows={4}
              placeholder="How can we help?"
              {...register("message")}
            />
            {errors.message?.message && (
              <span className="text-xs text-red-600 dark:text-red-400">
                {errors.message.message}
              </span>
            )}
          </label>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Card>

      {submitted && (
        <Card>
          <h2 className="mb-2 text-lg font-medium">Last submission</h2>
          <pre className="text-sm opacity-90">
{JSON.stringify(submitted, null, 2)}
          </pre>
        </Card>
      )}
    </div>
  );
}
