const fruits = [
  {
    id: 1,
    title: "Яблоки",
    price: 20,
    img: "C:Users\vithvDesktopJSModal JSplaginsapple.png",
  },
  {
    id: 2,
    title: "Апельсин",
    price: 30,
    img: "C:Users\vithvDesktopJSModal JSplaginsorange.png",
  },
  {
    id: 3,
    title: "Манго",
    price: 40,
    img: "C:Users\vithvDesktopJSModal JSplaginsmango.png",
  },
];

const modal = $.modal({
  title: "Vi Modal",
  closable: true,
  content: `<h4>Modal is working</h4>
		<p>Lorem ipsum sdf  assdflksad vf</p>`,
  width: "400px",
  footerButtons: [
    {
      text: "Ok",
      type: "primary",
      handler() {
        console.log("Primary btn clicked");
        modal.close();
      },
    },
    {
      text: "Cancel",
      type: "danger",
      handler() {
        console.log("Danger btn clicked");
        modal.close();
      },
    },
  ],
});
