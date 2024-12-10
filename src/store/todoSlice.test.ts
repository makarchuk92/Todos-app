import { describe, it, expect } from 'vitest';
import { addTodo, changeFilterTodo, changeStatusTodo, initialState, ITodo, removeTodo } from './todoSlice';
import todoReducer from "./todoSlice"
import { v1 } from 'uuid';

describe('todoSlice', () => {
    it('should handle addTodo correctly', () => {
        const previousState = initialState
        const todoTitle = 'New Todo Item'

        const action = addTodo(todoTitle);
        const newState = todoReducer(previousState, action)

        expect(newState.todos.length).toBe(1)
        expect(newState.todos[0]).toEqual({
            id: expect.any(String), 
            title: todoTitle,
            isDone: false,
        })
    })

    it('should maintain existing todos when adding a new one', () => {
        const existingTodo: ITodo = {
            id: '1',
            title: 'Existing Todo',
            isDone: false,
        }
        
        const previousState = {
            todos: [existingTodo],
            filter: 'all',
        }
        
        const todoTitle = 'Another Todo Item'
        const action = addTodo(todoTitle)
        const newState = todoReducer(previousState, action)
    
        expect(newState.todos.length).toBe(2)
        expect(newState.todos[1]).toEqual({
            id: expect.any(String), 
            title: todoTitle,
            isDone: false,
        })
    })
    const existingTodo: ITodo = {
        id: '1',
        title: 'Test Todo',
        isDone: false
    }

    it('should remove a todo by id', () => {
        const state = {
            ...initialState,
            todos: [existingTodo]
        }
        const newState = todoReducer(state, removeTodo('1'))
        expect(newState.todos).toHaveLength(0)
    })

    const todoId = v1();
    const todoTitle = "Test Todo";
    it('should not remove a todo if the id does not exist', () => {
        const state = {
            ...initialState,
            todos: [existingTodo]
        }

        const newState = todoReducer(state, removeTodo('2'))
        expect(newState.todos).toHaveLength(1);
        expect(newState.todos[0]).toEqual(existingTodo)
    })

    it('should handle changeStatusTodo', () => {
        const startState = {
            ...initialState,
            todos: [{ id: todoId, title: todoTitle, isDone: false }]
        }

        const nextState = todoReducer(startState, changeStatusTodo(todoId))

        expect(nextState.todos[0].isDone).toBe(true)
    })

    it('should toggle status correctly', () => {
        const startState = {
            ...initialState,
            todos: [{ id: todoId, title: todoTitle, isDone: true }]
        }

        const nextState = todoReducer(startState, changeStatusTodo(todoId))

        expect(nextState.todos[0].isDone).toBe(false)
    })

    it('should handle changeFilterTodo', () => {
        const startState = {
            ...initialState,
            filter: 'all'
        }

        const nextState = todoReducer(startState, changeFilterTodo('completed'))

        expect(nextState.filter).toBe('completed')
    })

})
