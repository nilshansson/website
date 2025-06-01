import Image from "next/image";
export default function Aboutpage() {
  return (
    <div className="flex flex-row items-start justify-center w-full h-screen px-10 animate-fadeIn ">
      {/* Image Section */}
      <div className="w-[30%] mb-16 ">
        {/* Adjusted top margin */}
        <Image
          src="/images/nils.jpg"
          alt="photo of NIls Hansson"
          className="w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-[40%] text-left pb-10 pl-6">
        <h1 className="text-sm md:text-xl">
          <strong className="text-md">Nils Hansson Meng</strong> is a
          distinguished abstract expressionist painter, renowned for his mastery
          of color and dynamic forms. Entirely self-taught, his journey into the
          art world has been one of passion, discovery, and profound emotional
          expression. His work has been showcased in numerous prestigious
          exhibitions, and he has been commissioned by discerning collectors,
          each seeking to capture a piece of his unique artistic vision.
          <br />
          <br />
          Central to Nils’ creative process is the belief that painting is not
          merely about the final image, but a deeply personal exploration of
          emotion and beauty. Each piece is a journey into the unknown, where
          colors and forms evolve in unexpected ways. This unpredictability,
          though challenging, is what fuels his love for the craft, pushing the
          boundaries of his artistic expression.
          <br />
          <br />
          Nils’ pursuit of beauty is both reflective and transformative. He
          believes that true beauty transcends the visual, stirring something
          deeper within the viewer—a fleeting, yet profound connection to the
          essence of life itself. His work seeks to capture these moments,
          translating the intangible into vibrant, moving canvases that invite
          contemplation and emotional resonance.
          <br />
          <br />
          Throughout his career, Nils has embraced the challenges of being
          self-taught, turning moments of frustration and failure into
          opportunities for growth. His intuitive approach allows each painting
          to find its own path, revealing layers of depth as the work unfolds.
        </h1>
      </div>
    </div>
  );
}
