import SourceActionTypes from '../constants/SourceActionTypes';
interface IActionable {
  type;
  payload?;
  source?: SourceActionTypes;
};

export default IActionable;