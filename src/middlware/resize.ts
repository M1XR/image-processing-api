import sharp from 'sharp';
import path from 'path';

// processing image with sharp
const resize = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  // path to image in full folder
  const pathFullImg: string = path.join(
    __dirname,
    '../../images/full',
    `${filename}.jpg`
  );
  // path to image in thumb folder
  const pathThumbImg: string = path.join(
    __dirname,
    '../../images/thumb',
    `${filename}_${width}x${height}.jpg`
  );
  // resize and sace to local disc
  await sharp(pathFullImg).resize(width, height).toFile(pathThumbImg);
};

export default resize;
