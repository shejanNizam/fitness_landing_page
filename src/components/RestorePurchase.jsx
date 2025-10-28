import Image from "next/image";
import image from "../assets/restore/restore.png";

export default function RestorePurchase() {
  return (
    // Added responsive padding, rounded corners, and shadow for better presentation
    // The main container will take full width but have max-width on larger screens
    <div className="border shadow-lg p-4 md:p-8 lg:p-12 rounded-lg max-w-5xl mx-auto text-center">
      {/* Container for the image to manage its size better */}
      <div className="w-full max-w-sm mx-auto">
        <Image
          src={image}
          alt="restore_image"
          // Removed static class to allow Next/Image to handle responsiveness if `layout='responsive'`
          // or `fill` is used, but for a simple image, ensure the parent controls width
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Responsive heading font size */}
      <h3 className="text-xl md:text-3xl font-extrabold my-4 md:my-6">
        Restore Purchase
      </h3>

      {/* Responsive paragraph width and text alignment */}
      <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto text-sm sm:text-base text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim,
        tempora tempore architecto id mollitia similique eius autem obcaecati
        tenetur illo maxime delectus accusantium libero necessitatibus, natus
        suscipit impedit iste? Facere tenetur eius harum consectetur sapiente
        odit illum nesciunt neque maxime. Saepe sapiente fugit quidem rerum
        nesciunt itaque repellat hic error nostrum cumque aut eum dicta
        reiciendis, at ea impedit velit laborum nisi veniam totam, suscipit
        voluptatem blanditiis eius? Deserunt sapiente praesentium expedita
        aspernatur soluta magni, cumque quibusdam facilis amet sequi.
        Voluptatibus quod corporis, laudantium minima ipsum iste voluptate,
        quibusdam pariatur, cum ab omnis eius iure quaerat atque enim nihil!
      </p>
    </div>
  );
}
