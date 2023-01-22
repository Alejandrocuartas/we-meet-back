# Collaborating using Git Workflow

## Clonning the repository

1. Clone the repository to your local machine using the following command:

      git clone https://github.com/Alejandrocuartas/we-meet-back.git
      
2. When it is already cloned, you should create a new branch called development:

      git branch development

## Making changes

1. Before making any changes, make sure to pull the latest changes from the remote repository by running the following command and beeing in the development branch of your local repo:

      git pull origin development

2. Create a new branch for your changes using the following command:

      git branch new-feature

3. Switch to the new branch using the following command:

      git checkout new-feature
      
4. Install new dependencies by running the following command:

      npm install

5. Don't forget to lint the code when you have made the changes with the following command:

      npm run lint:fix

6. Stage your changes using the following command:

      git add .
      
6. Commit your changes using the following command:

      git commit -m "A descriptive commit message"

## Submitting changes

1. Push your changes to the remote repository using the following command:

      git push origin new-feature

2. Create a pull request on GitHub to request that your changes be merged into the development branch.

3. Have a team member review your changes and provide feedback or approve the pull request.

## Merging changes

1. Once the pull request has been approved, the team member with merge rights will merge the changes into the development branch.
2. After changes are merged, it's good practice to delete the feature branch in your local repo with the next command:

      git branch -d new-feature

3. Finally, update your local copy of the development branch by running:

      git pull origin development
      
## Main branch
1. The development branch will be merged into the main branch when each sprint/milestone has ended. This is to protect it from possible errors.
2. Once the development branch is merged into the main branch, you should be in your local repo, locate in the main branch and pull the latest changes by running the following command:

      git pull origin main
