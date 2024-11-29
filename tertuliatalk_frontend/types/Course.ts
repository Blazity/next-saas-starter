
export type CreateCourse =  {
    title: string,
    description: string,
    type: string,
    participants?: number,
    maxParticipant?: number,
    document?: any,
    startDate: string,
    duration: string,
}


export type Course = {
    id: string
    title: string
    description: string
    type: string
    status: string
    participants: number
    maxParticipants: number
    documentUrl: string
    duration: string
    instructorId: string
    createdDate: string
    updatedDate: any
    startDate: string
    instructor: any
  }
