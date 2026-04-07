pipeline {
    agent { label 'docker-apps2' }

    environment {
        COMPOSE_FILE = "-f docker-compose.yaml -f docker-compose.production.yaml"
        ENV_FILE = ".env.production"
    }

    stages {

        
        stage('Build Image') {
            steps {
                sh '''
                docker-compose $COMPOSE_FILE --env-file $ENV_FILE build --no-cache
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker-compose $COMPOSE_FILE --env-file $ENV_FILE down
                docker-compose $COMPOSE_FILE --env-file $ENV_FILE up -d --build
                '''
            }
        }
    }
}