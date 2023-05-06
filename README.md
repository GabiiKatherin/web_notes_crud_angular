# Angular Project CRUD - Training notes


### <b>About Angular:</b>
- Framework created by Google for front-end and one of the most used today. The version used is 14, released in June 2022.

### <b>About the project:</b>
- Objective: The purpose of this project is to record important notes about my bodybuilding workouts:
  - Advanced techniques I use
  - Perceptions about my body during exercise
  - Exercises I can replace
  - Exercises that generate the most hypertrophy
- <strong>What it does:</strong> create cards containing description, origin, favorite layout and displays those cards/notes in a panel.
- <strong>Language:</strong> HTML, CSS, Typescript, Angular.
- <strong>Methods used:</strong> get, post, put and delete with the HTTP Client tool.

---

If you want learning how to create this project use the tutorial below:

<b>How to install Angular CLI:</b>
- It is necessary to have NodeJS (version 16.14.2) because you will need to use <b>npm</b> package manager.
- To install the Angular CLI, open terminal and use command below it is angular command line interface.

```
npm install -g @angular/cli@14.0.0
```
A layout created in figma was used for this project. You can access here: https://www.figma.com/file/Bud2WYRv0lnVXI1CyKVLTN/Training-Notes?node-id=1%3A361&t=DyKzb0noiQ7QYMVt-1


```
npm new training_notes
```

You will need to something questions:
- In "Would you like to add Angular routing?" Choose <b>YES</b>
- In "Which stylesheet format would you like to use?" Choose <b>CSS</b>

Right away type this command to enter the project diretory:
```
cd training_notes
```

Right away type this command to run the project:
```
ng serve
```
Then copy the link written after "open your browser on".
- The expected link is this: http://localhost:4200/


To create a component type command:
```
ng generate component home
```

not necessary explain all details about the program!! 

--include Angular Extension Pack as option to use in IDE
--include Visual Studio Code and version: 