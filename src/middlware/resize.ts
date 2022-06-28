import sharp from 'sharp';
import path from 'path';

const resize = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  const pathFullImg: string = path.join(
    __dirname,
    '../../images/full',
    `${filename}.jpg`
  );
  const pathThumbImg: string = path.join(
    __dirname,
    '../../images/thumb',
    `${filename}_${width}x${height}.jpg`
  );

  await sharp(pathFullImg).resize(width, height).toFile(pathThumbImg);
};

export default resize;
