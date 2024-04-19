import Method from "./Method";

export default function OurMethods() {
  let methodItems = [
    {
      image: "method1.png",
      heading: "Local projects go glocal",
      text: "Yennenga Progress goes beyond the eye catching problems, with a totally holistic approach, covering all the UN Global Goals and adapting an entrepreneurial thinking. Local needs to support daily life is identified and developed in the village Nakamtenga, in Burkina Faso, West Africa.",
    },
    {
      image: "method2.png",
      heading: "Competence for change",
      text: "Yennenga Progress is now creating a model to achieve the UN Global Goals through social franchising. Jobs are created and the long term goal is for the villages to become independent, funding their own welfare. Lasting progress emerge by local efforts together with international partnership.",
    },
    {
      image: "method3.png",
      heading: "Competence for change",
      text: "The Yennenga Progress global network of competence, gives Change Makers locally, continuous further training, on their request, with tools and knowledge they need for the next step of development. Collaboration is born to find good solutions, fulfill the needs and create best practice to help others achieve the UN Global Goals.",
    },
  ];

  return (
    <section className="text-center section-method flex flex-col items-center px-4 py-20 gap-10">
      <div>
        <h2 className="text-black text-5xl font-bold font-['Apple SD Gothic Neo']">Our method</h2>
      </div>
      <div className="flex items-center gap-6">
        {methodItems.map(({ image, heading, text }) => (
          <Method key={heading} image={image} text={text} heading={heading} />
        ))}
      </div>
    </section>
  );
}
