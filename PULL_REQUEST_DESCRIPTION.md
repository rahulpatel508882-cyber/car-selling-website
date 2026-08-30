# Pull Request: remove duplicated projects

This pull request removes duplicate project folders from the repository that are present elsewhere:

- Todo (submodule)
- backend/
- portfolio/
- weather-mern-app/

These deletions are on branch `remove-unused-projects` for review before merging.

Note: The backend/.env file was deleted in this change — if it contained secrets, rotate them because deleting in a commit does not remove history.
