# Maintenance Mode

This application includes a comprehensive maintenance mode system that allows you to temporarily disable access to the site while performing updates or maintenance.

## How It Works

When maintenance mode is enabled, all requests to the application are intercepted by the middleware and redirected to a dedicated maintenance page. This page informs users about the maintenance and provides estimated completion time.

## Configuration

Maintenance mode is controlled through environment variables:

- `MAINTENANCE_MODE`: Set to `true` to enable maintenance mode, `false` to disable it
- `MAINTENANCE_TOKEN`: A secret token that can be used to bypass maintenance mode
- `MAINTENANCE_END_TIME`: The estimated time when maintenance will be completed
- `MAINTENANCE_REASON`: The reason for the maintenance

## Bypassing Maintenance Mode

Certain paths automatically bypass maintenance mode:

- `/api/health`
- `/api/status`
- `/_next`
- `/images`
- `/favicon.ico`
- `/maintenance`

For testing or administrative access, you can bypass maintenance mode by:

1. Adding a query parameter: `?maintenance_bypass=YOUR_MAINTENANCE_TOKEN`
2. Once you've used the query parameter, a cookie will be set that allows you to bypass maintenance mode for future requests

## Admin Control

The application includes an admin interface at `/admin/maintenance` that allows you to toggle maintenance mode and update related settings.

## API Status Endpoint

The `/api/status` endpoint provides information about the current maintenance status:

\`\`\`json
{
  "status": "maintenance",
  "maintenance": {
    "isActive": true,
    "endTime": "Today at 6:00 PM UTC",
    "reason": "We're upgrading our infrastructure to improve performance and reliability."
  },
  "timestamp": "2023-05-07T16:25:56.000Z"
}
\`\`\`

## Customization

You can customize the maintenance page by editing `app/maintenance/page.tsx`.
