import { collectionNameObj } from '@/lib/dbConnect'
import React from 'react'

export default async function ServicesDetails({ params }) {
    const p = await params;
    const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
    const data=await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    return (
    <div>
      <p>{JSON.stringify(p)}</p>
    </div>
  )
}
