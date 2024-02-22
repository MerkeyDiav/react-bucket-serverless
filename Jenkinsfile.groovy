pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Cloner le code source depuis votre dépôt GitHub
                git 'https://github.com/MerkeyDiav/react-bucket-serverless.git'
                
                // Exécuter d'autres commandes ou scripts selon vos besoins
                sh 'echo "Build step: Insérer vos commandes de construction ici"'
            }
        }
        stage('Test') {
            steps {
                // Exécuter des tests, par exemple des tests unitaires
                sh 'echo "Test step: Insérer vos commandes de test ici"'
            }
        }
        stage('Deploy') {
            steps {
                // Déployer votre application, par exemple sur un serveur
                sh 'echo "Deploy step: Insérer vos commandes de déploiement ici"'
            }
        }
    },
    node('node'){
    ...
}
}
