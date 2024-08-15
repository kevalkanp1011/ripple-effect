"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKENS = void 0;
const brandi_1 = require("brandi");
exports.TOKENS = {
    userDao: (0, brandi_1.token)('user_dao'),
    authService: (0, brandi_1.token)('auth_service'),
    waterFtCalculatorDao: (0, brandi_1.token)('water_ft_calc_dao'),
    waterFtCalcService: (0, brandi_1.token)('water_ft_calc_service')
};