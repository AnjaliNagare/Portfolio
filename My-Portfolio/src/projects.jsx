 import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h2 className="text-5xl font-bold mb-4">Projects</h2>
      <p className="max-w-xl text-xl mb-12">
        Here are some of the projects I have worked on.
      </p>

      <Card className="max-w-3xl w-full shadow-xl">
        {/* 🔹 App Demo */}
        <CardHeader floated={false} className="overflow-hidden">
          <video
            src="/AppDemo.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-full rounded-lg"
          />
        </CardHeader>

        <CardBody className="text-left">
          <Typography variant="h4" className="mb-2">
            Mental Health Journal
          </Typography>

          <Typography color="gray" className="mb-4">
            A full-stack mental health journal app built with React, Tailwind, and Node.Js.
          </Typography>

          <div className="flex gap-4">
  {/* Email */}
  <a
    href="mailto:anjalinagare20@gmail.com"
    className="inline-block"
  >
    <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
      Email Me
    </button>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/anjali-nagare-53b818190"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
      LinkedIn
    </button>
  </a>
</div>


        </CardBody>
      </Card>
    </section>
  );
}
