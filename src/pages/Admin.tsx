import React, { useState } from 'react';
import { ArrowLeft, Lock, User, Settings, Database, FileText, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Admin = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication
    if (credentials.username === 'admin' && credentials.password === 'ftse2024') {
      setIsAuthenticated(true);
      toast({
        title: 'Login Successful',
        description: 'Welcome to the admin dashboard.',
      });
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid credentials. Try admin/ftse2024',
        variant: 'destructive',
      });
    }
  };

  const stats = [
    { title: 'Total Submissions', value: '156', icon: <FileText className="h-6 w-6" /> },
    { title: 'Active Users', value: '89', icon: <Users className="h-6 w-6" /> },
    { title: 'Page Views', value: '2,847', icon: <BarChart3 className="h-6 w-6" /> },
    { title: 'Conversion Rate', value: '12.4%', icon: <Settings className="h-6 w-6" /> },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <Card className="card-elegant">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Admin Login</CardTitle>
              <CardDescription>
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-premium">
                  Login
                </Button>
              </form>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Demo Credentials:</strong><br />
                  Username: admin<br />
                  Password: ftse2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Management Tabs */}
          <Tabs defaultValue="submissions" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="submissions">Form Submissions</TabsTrigger>
              <TabsTrigger value="content">Content Management</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="submissions">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Enterprise Form Submissions</CardTitle>
                  <CardDescription>
                    Recent submissions from the enterprise information collection form
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-medium">Tech Solutions Inc.</div>
                          <div className="text-sm text-muted-foreground">john.doe@techsolutions.com</div>
                          <div className="text-xs text-muted-foreground">Submitted 2 hours ago</div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>
                    Manage website content, translations, and media assets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Quick Actions</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <FileText className="h-4 w-4 mr-2" />
                          Edit Homepage Content
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="h-4 w-4 mr-2" />
                          Manage Services
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Database className="h-4 w-4 mr-2" />
                          Update Company Info
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Recent Changes</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>• Homepage hero section updated</div>
                        <div>• New service added to portfolio</div>
                        <div>• Contact information revised</div>
                        <div>• Translation updates for Chinese</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage admin users and access permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <User className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-medium">Admin User</div>
                          <div className="text-sm text-muted-foreground">admin@ftsefinance.com</div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Super Admin</div>
                    </div>
                    <Button variant="outline">
                      Add New User
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>
                    Configure system preferences and integrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">General Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Email Notifications</div>
                            <div className="text-sm text-muted-foreground">Receive notifications for new submissions</div>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Backup Settings</div>
                            <div className="text-sm text-muted-foreground">Automatic daily backups</div>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Integration Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Database Connection</div>
                            <div className="text-sm text-green-600">Connected</div>
                          </div>
                          <Button variant="outline" size="sm">Test Connection</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Email Service</div>
                            <div className="text-sm text-green-600">Active</div>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Admin;