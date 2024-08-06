import deepFreeze from 'deep-freeze'
import { describe, expect, test } from 'vitest'
import { initialState, reducer } from './reducer'

describe('unicafe reducer', () => {
  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    deepFreeze(state)
    const action = {
      type: 'UNKNOWN_ACTIOn',
    }

    const newState = reducer(undefined, action)
    expect(newState).toStrictEqual(initialState)
  })

  test('good is incremented', () => {
    const state = initialState
    deepFreeze(state)
    const action = {
      type: 'GOOD',
    }

    const newState = reducer(state, action)
    expect(newState).toStrictEqual({
      good: 1,
      ok: 0,
      bad: 0,
    })
  })

  test('ok is incremented', () => {
    const state = initialState
    deepFreeze(state)
    const action = {
      type: 'OK',
    }

    const newState = reducer(state, action)
    expect(newState).toStrictEqual({
      good: 0,
      ok: 1,
      bad: 0,
    })
  })

  test('bad is incremented', () => {
    const state = initialState
    deepFreeze(state)
    const action = {
      type: 'BAD',
    }

    const newState = reducer(state, action)
    expect(newState).toStrictEqual({
      good: 0,
      ok: 0,
      bad: 1,
    })
  })

  test('state is reset when action type is ZERO', () => {
    const state = {
      good: 6,
      ok: 2,
      bad: 1,
    }
    deepFreeze(state)
    const action = {
      type: 'ZERO',
    }

    const newState = reducer(state, action)
    expect(newState).toStrictEqual(initialState)
  })
})
