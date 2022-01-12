import convict from 'convict';

const moocConfig = convict({
  env: {
    doc: 'The application enviroment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/mooc-backend-dev'
    }
  },
  typeorm: {
    host: {
      doc: 'The database host',
      format: String,
      env: 'TYPEORM_HOST',
      default: 'localhost'
    },
    port: {
      doc: 'The database port',
      format: Number,
      env: 'TYPEORM_PORT',
      default: 5432
    },
    username: {
      doc: 'The database username',
      format: String,
      env: 'TYPEORM_USERNAME',
      default: 'codely'
    },
    password: {
      doc: 'The database password',
      format: String,
      env: 'TYPEORM_PASSWORD',
      default: '123456'
    },
    database: {
      doc: 'The database database',
      format: String,
      env: 'TYPEORM_HOST',
      default: 'mooc-backend-dev'
    }
  }
});

moocConfig.loadFile([__dirname + '/default.json', __dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;
