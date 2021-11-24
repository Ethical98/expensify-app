
import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const action = login('id');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'id',
  });
});

test('should setup logout action object', () => {
  const action = logout('id');
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
