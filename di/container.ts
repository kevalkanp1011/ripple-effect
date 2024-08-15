import { UserDAOImpl } from '../data/dao/user/UserDAOImpl';
import { Container } from 'brandi';
import { TOKENS } from './tokens';
import { AuthService } from '../services/AuthService';
import { WaterFtCalcDAOImpl } from '../data/dao/waterft_calculator/WaterFtCalcDAOImpl';
import { WaterftCalcService } from '../services/WaterFtCalcService';



export const container = new Container();

container
  .bind(TOKENS.userDao)
  .toInstance(UserDAOImpl)
  .inTransientScope();

  container
  .bind(TOKENS.waterFtCalculatorDao)
  .toInstance(WaterFtCalcDAOImpl)
  .inTransientScope();

container
  .bind(TOKENS.authService)
  .toInstance(AuthService)
  .inTransientScope();

  container
  .bind(TOKENS.waterFtCalcService)
  .toInstance(WaterftCalcService)
  .inTransientScope();

