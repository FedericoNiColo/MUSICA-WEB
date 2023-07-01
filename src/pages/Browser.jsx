import React from 'react'
import { LayOutSidebar } from '../router'
import { Browse } from '../components/browse/Browse'

export function Browser() {
  return (
    <>
      <LayOutSidebar>
        <Browse />
      </LayOutSidebar>
    </>
  )
}
