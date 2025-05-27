import React from 'react'
import http from './httpServices'

export function getOwnerProjectApi() {
  const {data} =   http.get("/project/owber-projects")
  return data
}

