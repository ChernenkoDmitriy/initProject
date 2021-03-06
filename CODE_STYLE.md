# Code style


## Variable

### Variable naming

- Constants naming with capiutal laters **I_AM_CONSTANT**
- Boolean - starts with **is**


### Variable locations

Variable for business logic layer located in redux.
Variable for presentation logic layer located located in state of the component to which it relates.


## Functions naming

- Getters (returns some data) starts with **get**
- Setters (set some data) starts with **set**
- Creators (create and return new data) starts with **create**


## Architecture

<p align="center">
  <img height="250" src="https://github.com/ChernenkoDmitriy/initProject/blob/master/img/sheme.JPG" />
</p>


### Business logic layer


**Business logic** - it's logic which can be reused on other projects and does not depends on frameworks, languages and libraries(redux, mobX, saga).
All business logic located an folder **services**.

Functions are imported from business logic via interfaces (wrapper function) to prevent direct dependence of upper-level components from the lower.
Functions that are used for the business logic of one entity should not be reused for the business logic of another entity to prevent accidental changes.
The name of the interface starts with the **I** and next capital leter.

<p align="center">
  <img height="250" src="https://github.com/ChernenkoDmitriy/initProject/blob/master/img/exampleSingle.JPG" />
</p>

### Presentation logic layer


**Presentation logic** - it is a logic representation of a component that depends on business logic.
Presentation logic located next to the component to which it refers.
If the component is reused in several container components, it should be located in the folder **component**, else it should be located in container component folder.

## Planing ## 

1) Function names
2) Function locations (business or presentation layer)
3) Data locations (business or presentation layer)
4) Logic function connection
5) Data dependencies