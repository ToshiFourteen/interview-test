/**
 * @jest-environment jsdom
 */

import { shallowMount } from '@vue/test-utils'
import autoComplete from '../autoComplete.vue'
import { entryList } from '../../utils/mockData'

describe('autoComplete.vue', () => {
  test('suggestion right', () => {
    const wrapper = shallowMount(autoComplete, {
      propsData: { 
        entryList
      }
    })
    wrapper.find('.input').setValue('as')
    setTimeout(() => {
      let suggestionArray = wrapper.findAll('.suggestion')
      expect(suggestionArray.at(1).text()).toBe('as')
      expect(suggestionArray.at(-1).text()).toBe('assss')
    }, 200)
  })
})