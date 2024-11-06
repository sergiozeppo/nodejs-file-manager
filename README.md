# File Manager

## Description

File Manager is implemented using Node.js APIs.

The file manager able to do the following:

- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

## Technical requirements

- No external dependencies used
- Use 22.x.x version (22.9.0 or upper) of Node.js
- The program is started by npm-script `start` in following way:

```bash
npm run start -- --username=your_username
```

- To stop the program work you should press `ctrl + c` or sent `.exit` command into console and the program displays the following text in the console  
  `Thank you for using File Manager, Username, goodbye!`
- Starting working directory is your current home directory (for example, on Windows it's something like `system_drive/Users/Username`)
- In case of unknown operation or invalid input (missing mandatory arguments, wrong data in arguments, etc.) `Invalid input` message shown and you able to enter another command
- In case of error during execution of operation `Operation failed` message shown and you able to enter another command (e.g. attempt to perform an operation on a non-existent file or work on a non-existent path result in the operation fail)
- You can't go upper than root directory (e.g. on Windows it's current local drive root). If you tries to do so, current working directory doesn't change

List of operations and their syntax:

- Navigation & working directory (nwd)
  - Go upper from current directory (when you are in the root folder this operation doesn't change working directory)
  ```bash
  up
  ```
  - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
  ```bash
  cd path_to_directory
  ```
  - Print in console list of all files and folders in current directory. List contains:
    - list contains files and folder names (for files - with extension)
    - folders and files are sorted in alphabetical order ascending, but list of folders goes first
    - type of directory content is marked explicitly (e.g. as a corresponding column value)
  ```bash
  ls
  ```
- Basic operations with files
  - Read file and print it's content in console (done using Readable stream):
  ```bash
  cat path_to_file
  ```
  - Create empty file in current working directory:
  ```bash
  add new_file_name
  ```
  - Rename file (content remains unchanged):
  ```bash
  rn path_to_file new_filename
  ```
  - Copy file (done using Readable and Writable streams):
  ```bash
  cp path_to_file path_to_new_directory
  ```
  - Move file (same as copy but initial file is deleted, copying part done using Readable and Writable streams):
  ```bash
  mv path_to_file path_to_new_directory
  ```
  - Delete file:
  ```bash
  rm path_to_file
  ```
- Operating system info (prints following information in console)
  - Get EOL (default system End-Of-Line) and print it to console
  ```bash
  os --EOL
  ```
  - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
  ```bash
  os --cpus
  ```
  - Get home directory and print it to console
  ```bash
  os --homedir
  ```
  - Get current _system user name_ (Do not confuse with the username that is set when the application starts) and print it to console
  ```bash
  os --username
  ```
  - Get CPU architecture for which Node.js binary has compiled and print it to console
  ```bash
  os --architecture
  ```
- Hash calculation
  - Calculate hash for file and print it into console
  ```bash
  hash path_to_file
  ```
- Compress and decompress operations
  - Compress file (using Brotli algorithm, done using Streams API)
  ```bash
  compress path_to_file path_to_destination
  ```
  - Decompress file (using Brotli algorithm, done using Streams API)
  ```bash
  decompress path_to_file path_to_destination
  ```
