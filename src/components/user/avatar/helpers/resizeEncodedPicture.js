const resizeEncodedPicture = async (encoded, width, height) =>
  new Promise(async (resolve) => {
    if (encoded.length) {
      const img = document.createElement('img');
      const destructImage = encoded[0].split(';');
      const mimeType = destructImage[0].split(':')[1];

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const dataURI = canvas.toDataURL(mimeType);
        resolve(dataURI);
      };
      img.src = encoded;
    } else {
      resolve(encoded);
    }
  });

  export default resizeEncodedPicture;