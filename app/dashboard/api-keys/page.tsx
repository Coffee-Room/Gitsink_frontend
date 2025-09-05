"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Key } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ApiKeysPage() {
  const [apiKeys, setApiKeys] = useState([
    {
      id: "key_1",
      name: "Production API Key",
      key: "sk_live_Xj5iPDwLcWwXEZdU7Tk9",
      created: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      lastUsed: new Date(Date.now() - 3600000).toISOString(),
      type: "live",
    },
    {
      id: "key_2",
      name: "Development API Key",
      key: "sk_test_7nPjqLmWxRyS2VdF8Gk3",
      created: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      lastUsed: new Date(Date.now() - 24 * 3600000).toISOString(),
      type: "test",
    },
  ])

  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyType, setNewKeyType] = useState("test")
  const [showNewKey, setShowNewKey] = useState(false)
  const [newKey, setNewKey] = useState("")

  const handleCreateKey = () => {
    // In a real app, this would call an API to create a new key
    const key = `sk_${newKeyType}_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
    setNewKey(key)
    setShowNewKey(true)

    // Add to the list
    setApiKeys([
      ...apiKeys,
      {
        id: `key_${apiKeys.length + 1}`,
        name: newKeyName || `${newKeyType === "live" ? "Production" : "Development"} Key ${apiKeys.length + 1}`,
        key,
        created: new Date().toISOString(),
        lastUsed: null,
        type: newKeyType,
      },
    ])

    // Reset form
    setNewKeyName("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real app, you would show a toast notification
  }

  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">API Keys</h1>
        <p className="text-muted-foreground">Manage your API keys for accessing the Gitsink API</p>
      </div>

      {showNewKey && (
        <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <Key className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle>New API key created</AlertTitle>
          <AlertDescription className="flex flex-col gap-2">
            <p>Make sure to copy your API key now. You won't be able to see it again!</p>
            <div className="flex items-center gap-2 mt-2 p-2 bg-background border rounded-md font-mono text-sm">
              {newKey}
              <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto" onClick={() => copyToClipboard(newKey)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm" className="mt-2 w-fit" onClick={() => setShowNewKey(false)}>
              I've copied my key
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="all-keys">
        <TabsList>
          <TabsTrigger value="all-keys">All Keys</TabsTrigger>
          <TabsTrigger value="live-keys">Live Keys</TabsTrigger>
          <TabsTrigger value="test-keys">Test Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="all-keys" className="mt-4">
          <div className="grid gap-4">
            {apiKeys.map((apiKey) => (
              <Card key={apiKey.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {apiKey.name}
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            apiKey.type === "live"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {apiKey.type === "live" ? "Live" : "Test"}
                        </span>
                      </CardTitle>
                      <CardDescription>Created {new Date(apiKey.created).toLocaleDateString()}</CardDescription>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => copyToClipboard(apiKey.key)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-sm bg-muted p-2 rounded-md">
                    {apiKey.key.substring(0, 10)}...{apiKey.key.substring(apiKey.key.length - 4)}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <p className="text-xs text-muted-foreground">
                    {apiKey.lastUsed
                      ? `Last used ${new Date(apiKey.lastUsed).toLocaleDateString()} at ${new Date(apiKey.lastUsed).toLocaleTimeString()}`
                      : "Never used"}
                  </p>
                  <Button variant="destructive" size="sm">
                    Revoke
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live-keys" className="mt-4">
          <div className="grid gap-4">
            {apiKeys
              .filter((key) => key.type === "live")
              .map((apiKey) => (
                <Card key={apiKey.id}>
                  {/* Same content as above */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {apiKey.name}
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                            Live
                          </span>
                        </CardTitle>
                        <CardDescription>Created {new Date(apiKey.created).toLocaleDateString()}</CardDescription>
                      </div>
                      <Button variant="outline" size="icon" onClick={() => copyToClipboard(apiKey.key)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm bg-muted p-2 rounded-md">
                      {apiKey.key.substring(0, 10)}...{apiKey.key.substring(apiKey.key.length - 4)}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <p className="text-xs text-muted-foreground">
                      {apiKey.lastUsed
                        ? `Last used ${new Date(apiKey.lastUsed).toLocaleDateString()} at ${new Date(apiKey.lastUsed).toLocaleTimeString()}`
                        : "Never used"}
                    </p>
                    <Button variant="destructive" size="sm">
                      Revoke
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="test-keys" className="mt-4">
          <div className="grid gap-4">
            {apiKeys
              .filter((key) => key.type === "test")
              .map((apiKey) => (
                <Card key={apiKey.id}>
                  {/* Same content as above */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {apiKey.name}
                          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                            Test
                          </span>
                        </CardTitle>
                        <CardDescription>Created {new Date(apiKey.created).toLocaleDateString()}</CardDescription>
                      </div>
                      <Button variant="outline" size="icon" onClick={() => copyToClipboard(apiKey.key)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm bg-muted p-2 rounded-md">
                      {apiKey.key.substring(0, 10)}...{apiKey.key.substring(apiKey.key.length - 4)}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <p className="text-xs text-muted-foreground">
                      {apiKey.lastUsed
                        ? `Last used ${new Date(apiKey.lastUsed).toLocaleDateString()} at ${new Date(apiKey.lastUsed).toLocaleTimeString()}`
                        : "Never used"}
                    </p>
                    <Button variant="destructive" size="sm">
                      Revoke
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Create New API Key</CardTitle>
          <CardDescription>Generate a new API key for accessing the Gitsink API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="key-name">Key Name</Label>
            <Input
              id="key-name"
              placeholder="e.g. Production Backend"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="key-type">Key Type</Label>
            <Tabs value={newKeyType} onValueChange={setNewKeyType} className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="test" className="flex-1">
                  Test Key
                </TabsTrigger>
                <TabsTrigger value="live" className="flex-1">
                  Live Key
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreateKey} className="gap-2">
            <Key className="h-4 w-4" />
            Generate New Key
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
