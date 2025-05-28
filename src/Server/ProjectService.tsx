import React from 'react'
import http from './httpServices'

export function getOwnerProjectApi() {
  const {data} =  http.get("/project/owber-projects")
  return data
}



export function removeProjectApi (id) {
  const {data} = http.delete(`/project/${id}`)
  return data
} 