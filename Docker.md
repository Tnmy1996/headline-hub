# Building and Running a React App with Docker

## Prerequisites

-   Docker installed on your machine

## Instructions

1. **Clone the repository**:

    - Open a terminal or command prompt.
    - Navigate to the directory where you want to clone the repository.
    - Run the following command to clone the repository:
        ```
        git clone https://github.com/Tnmy1996/headline-hub.git
        ```

2. **Navigate to the project directory**:

    - After cloning the repository, navigate to the project directory using the following command:
        ```
        cd <project_directory>
        ```
        Replace `<project_directory>` with the name of the directory containing your React app.

3. **Build the Docker image**:

    - In the project directory, run the following command to build the Docker image:
        ```
        docker build -t <image_name> .
        ```
        Replace `<image_name>` with a name of your choice for the Docker image (e.g., `my-react-app`).

4. **Run the Docker container**:

    - After the image is built successfully, run the following command to start the Docker container:
        ```
        docker run -p 5173:5173 <image_name>
        ```
        Replace `<image_name>` with the name you used in the previous step.
        This command maps the container's port 5173 to the host's port 5173, allowing you to access the React app in your web browser.

5. **Access the React app**:

    - Open your web browser and navigate to `http://localhost:5173` to see your React application running inside the Docker container.

6. **Stop the container (optional)**:

    - If you want to stop the running container, open a new terminal or command prompt window and run the following command:
        ```
        docker ps
        ```
        This will list all running containers. Find the container ID or name of your React app container.
    - Stop the container by running the following command:
        ```
        docker stop <container_id_or_name>
        ```
        Replace `<container_id_or_name>` with the ID or name of your React app container.

7. **Additional notes**:
    - If you need to pass environment variables to your React app, you can add the `-e` flag when running the container:
        ```
        docker run -p 5173:5173 -e VITE_APP_MY_ENV_VAR=value <image_name>
        ```
        Replace `VITE_APP_MY_ENV_VAR` with the name of your environment variable, and `value` with the desired value.
    - If you need to access the React app from a different host or IP address, replace `localhost` with the appropriate IP address or hostname when accessing the app in your web browser.
