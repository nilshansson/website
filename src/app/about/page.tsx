export default function Aboutpage() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-screen px-10 animate-fadeIn">
      {/* Text Section */}
      <div className="w-1/2 pr-8">
        <h1 className="text-xl">
          <strong>Nils Hansson Meng</strong> is a distinguished abstract
          expressionist painter, renowned for his mastery of color and dynamic
          forms. Entirely self-taught, his journey into the art world has been
          one of passion, discovery, and profound emotional expression. His work
          has been showcased in numerous prestigious exhibitions, and he has
          been commissioned by discerning collectors, each seeking to capture a
          piece of his unique artistic vision.
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

      {/* Video Section */}
      <div className="w-1/2">
        <video className="w-full h-auto" autoPlay loop muted playsInline>
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
