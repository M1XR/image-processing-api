import resizeImage from '../../middlware/resizeImage';
import * as fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { mockResponse } from 'mock-req-res';

const mockReq = {
  query: {
    filename: 'bridge',
    width: '250',
    height: '250'
  }
} as never;

const mockRes = mockResponse();

const pathThumbImg = path.join(__dirname, '../../../assets/images/thumb', 'bridge_250x250.jpg');

describe('Image Processing Test', () => {
  afterAll(() => {
    fs.unlinkSync(pathThumbImg);
  });
  describe('saving file', () => {
    it('should save the resized file', async () => {
      await resizeImage(mockReq, mockRes);
      expect(fs.existsSync(pathThumbImg)).toBeTruthy();
    });
  });
  describe('testing dimensions', () => {
    it('should have a width of 250', async () => {
      const meta = await sharp(pathThumbImg).metadata();
      expect(meta.width).toEqual(250);
    });

    it('should have a height of 250', async () => {
      const meta = await sharp(pathThumbImg).metadata();
      expect(meta.height).toEqual(250);
    });
  });
});
