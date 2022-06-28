import * as fs from 'fs';
import resize from '../../middlware/resize';
import sharp from 'sharp';

describe('Image Processing', () => {
  afterAll(() => {
    fs.unlink('./images/thumb/bridge_200x200.jpg', (err) => {
      if (err) throw err;
    });
  });

  it('should resolve', async () => {
    await expectAsync(resize('bridge', 200, 200)).toBeResolved();
  });

  it('should save the File "bridge_200x200.jpg" to thumb-Folder', () => {
    expect(fs.existsSync('./images/thumb/bridge_200x200.jpg')).toBeTruthy();
  });

  it('should resize the Image to width=200', async () => {
    const meta = await sharp('./images/thumb/bridge_200x200.jpg').metadata();
    expect(meta.width).toEqual(200);
  });

  it('should resize the Image to height=200', async () => {
    const meta = await sharp('./images/thumb/bridge_200x200.jpg').metadata();
    expect(meta.height).toEqual(200);
  });
});
