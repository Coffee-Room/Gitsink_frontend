import { NextResponse } from "next/server"

export default function ApiNotFound() {
  return NextResponse.json(
    {
      error: "Not Found",
      message: "The requested API endpoint does not exist",
      statusCode: 404,
    },
    { status: 404 },
  )
}
