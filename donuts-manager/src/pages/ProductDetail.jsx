import DonutsDetailComponent from '@/components/DonutsListComponent/DonutsDetailComponent/DonutsDetailComponent';
import EditDonutsDetailComponent from '@/components/DonutsListComponent/DonutsDetailComponent/EditDonutsDetailComponent';
import HeaderComponent from '@/components/HeaderComponent';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function ProductDetail() {

    const router = useRouter();
    const { id } = router.query;

    const [showDetails, setShowDetails] = useState(false);
    const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <HeaderComponent />
      {
      !showDetails ? <DonutsDetailComponent id={id} setIsEditing={setIsEditing} showDetails={showDetails} setShowDetails={setShowDetails} /> 
      : null
      }

      {
      isEditing ? <EditDonutsDetailComponent id={id}/>
      : null
      }
    </div>
  )
}
