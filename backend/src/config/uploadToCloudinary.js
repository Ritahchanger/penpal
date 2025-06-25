const cloudinary = require("./cloudinary");


const streamifier = require("streamifier");


const uploadToCloudinary = (buffer, folder) => {

  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
      },

      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }


    );

    streamifier.createReadStream(buffer).pipe(stream);

  });
};

module.exports = { uploadToCloudinary };
