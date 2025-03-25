// import sharp from 'sharp';
// import Tesseract from 'tesseract.js';

// class ImageUtils {
//     static async extractTextFromImage(imagePath) {
//         const processedImage = 'processed_image.png';

//         // Process the image
//         await sharp(imagePath)
//             .grayscale()
//             .threshold(150)
//             .toFile(processedImage);

//         // Extract text using the Spanish model
//         const { data: { text } } = await Tesseract.recognize(
//             processedImage,
//             'spa', // Spanish model
//             {
//                 psm: 6,
//                 oem: 1,
//                 tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÁÉÍÓÚáéíóúÜüÑñ -',
//                 logger: m => console.log(m),
//             }
//         );

//         return text.trim();
//     }
// }

// export default ImageUtils;
