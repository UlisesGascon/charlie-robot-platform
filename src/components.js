module.exports = {
  BUMPERS: {
    B1: 'D22',
    B2: 'D23',
    B3: 'D24'
  },
  PROXIMITY: {
    S1: 'A11',
    S2: 'A12',
    S3: 'A13',
    S4: 'A14',
    S5: 'A15'
  },
  PIEZO: 'D13',
  RGB: {
    R: 'D10',
    G: 'D9',
    B: 'D8'
  },
  SERVO: {
    RIGHT: 'D12',
    LEFT: 'D11'
  },
  RELAY: {
    RIGHT_LIGHT: 'D25',
    LEFT_LIGHT: 'D26',
    SIREN: 'D27'
  },
  MOTOR: {
    RIGHT: {
      pwm: 'D7',
      dir: 'D6'
    },
    LEFT: {
      pwm: 'D5',
      dir: 'D4'
    }
  },
  LCD: {
    controller: 'LCM1602',
    rows: 4,
    cols: 20
  },
  GYRO: {
    controller: 'MPU6050',
    sensitivity: 10
  },
  WEATHER: {
    controller: 'MS5611'
  }
}
