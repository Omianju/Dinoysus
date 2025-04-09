import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";

const HomePage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_80%)]"></div>
      <div className="relative z-[10] flex min-h-screen flex-col items-center pt-56">
        <h1 className="inline-block bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-center text-6xl font-bold text-transparent">
          Your Dev Workflow, <br />
          Supercharged with AI.
        </h1>
        <div className="h-4"></div>
        <p className="mb-8 max-w-xl text-center text-xl text-gray-600">
          Dionysus is a minimalistic, AI-powered assistant that empowers you to
          gain deep code insights and effortlessly summarize meetings.
        </p>
        <div className="space-x-4">
          <Button>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Link
            target="_blank"
            href="https://portfolio-omianjus-projects.vercel.app/projects/Dinoysus"
          >
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Experience the power of:
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">AI Code Insights</h3>
              <p className="text-gray-600">
                Analyze your GitHub repos and generate clear, actionable
                documentation with cutting-edge AI.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Instant Code Search
              </h3>
              <p className="text-gray-600">
                Instantly find relevant code snippets and meeting insights with
                our context-aware search.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Effortless Summaries
              </h3>
              <p className="text-gray-600">
                Turn meetings into concise transcriptions and highlights to
                capture what matters most.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/image-1.png"
          alt="demo"
          width={1000}
          height={1000}
          quality={100}
          priority
          className="my-12 h-auto w-[70vw] rounded-md border shadow-xl transition-all delay-75 duration-300 hover:scale-[102%] hover:shadow-2xl"
        />
        <div className="mb-10 flex items-center space-x-4">
          <Link href="/sign-in" className="text-sm hover:underline">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-sm hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
