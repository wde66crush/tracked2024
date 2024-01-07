import React from 'react'

type Props = {}

export default function TargetCard({}: Props) {
  return (
    <div className="flex">
      <div className="flex-row border-b">
        <h1 className="border-b">Target Title</h1>
        <p>Target description</p>
        <div className="flex-row">
          <p>Target tags feild</p>
          <p>target update button</p>
          <div className="flex-row ">
            <p>Close Window</p>
            <p>Close Target</p>
          </div>
        </div>
      </div>
      targetCard
    </div>
  )
}