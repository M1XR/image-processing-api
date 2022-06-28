"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
describe('Server Test Route "/api"', () => {
    it('should send a status of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.status).toEqual(200);
    }));
    it('should send a Response', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response).toBeTruthy();
    }));
    it('should send a File with type HTML', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.type).toEqual('text/html');
    }));
    it('should send a status of 404 if endpoint not exists', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/9');
        expect(response.status).toEqual(404);
    }));
    it('should send a Response if endpoint not exists', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/9');
        expect(response).toBeTruthy();
    }));
    it('should send a File with type HTML if endpoint not exists', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/9');
        expect(response.type).toEqual('text/html');
    }));
});
