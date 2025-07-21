import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Brain, 
  Library, 
  Heart, 
  Zap,
  Github,
  MessageCircle,
  Briefcase,
  FileText,
  Lock,
  Eye,
  Coins,
  Clock,
  Smile,
  ChevronRight,
  Star,
  Users,
  TrendingUp
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Progress } from './components/ui/progress'
import { blink } from './blink/client'

const innovations = [
  {
    id: 'reputation',
    icon: Shield,
    title: 'Trustless Reputation Passport',
    description: 'NFTs track behavior across platforms',
    details: 'Track payments, teamwork, and contributions across GitHub, Discord, and Upwork',
    color: 'from-blue-500 to-cyan-500',
    features: ['Cross-platform verification', 'Immutable reputation score', 'Privacy-preserving'],
    integrations: [
      { name: 'GitHub', icon: Github, connected: true },
      { name: 'Discord', icon: MessageCircle, connected: false },
      { name: 'Upwork', icon: Briefcase, connected: true }
    ]
  },
  {
    id: 'consent',
    icon: Brain,
    title: 'AI Consent Ledger',
    description: 'Control AI access to your data',
    details: 'Issue NFTs to allow/restrict AI use of your data with public misuse logging',
    color: 'from-purple-500 to-pink-500',
    features: ['Granular permissions', 'Misuse detection', 'Transparent logging'],
    integrations: [
      { name: 'Data Sources', icon: FileText, connected: true },
      { name: 'AI Models', icon: Brain, connected: true },
      { name: 'Audit Trail', icon: Eye, connected: true }
    ]
  },
  {
    id: 'library',
    icon: Library,
    title: 'Uncensorable Digital Library',
    description: 'IPFS-based content storage',
    details: 'Store books and files on IPFS with NFT-based access and on-chain royalties',
    color: 'from-green-500 to-emerald-500',
    features: ['Censorship resistance', 'Creator royalties', 'Decentralized access'],
    integrations: [
      { name: 'IPFS Storage', icon: Lock, connected: true },
      { name: 'NFT Access', icon: Shield, connected: true },
      { name: 'Royalty System', icon: Coins, connected: false }
    ]
  },
  {
    id: 'inheritance',
    icon: Heart,
    title: 'Crypto Will / Inheritance',
    description: 'Smart contract inheritance system',
    details: 'Lock funds with auto-release after inactivity and optional encrypted messages',
    color: 'from-red-500 to-orange-500',
    features: ['Inactivity oracle', 'Encrypted messages', 'Multi-beneficiary'],
    integrations: [
      { name: 'Smart Contract', icon: Lock, connected: true },
      { name: 'Oracle Network', icon: Clock, connected: true },
      { name: 'Message Vault', icon: Heart, connected: false }
    ]
  },
  {
    id: 'emotion',
    icon: Smile,
    title: 'Emotion NFTs',
    description: 'Sensor-verified emotional reactions',
    details: 'Detect real emotions via sensors and mint NFTs for authentic reactions',
    color: 'from-yellow-500 to-amber-500',
    features: ['Biometric verification', 'Real-time minting', 'Gaming integration'],
    integrations: [
      { name: 'Emotion Sensors', icon: Zap, connected: false },
      { name: 'NFT Minting', icon: Star, connected: true },
      { name: 'Game APIs', icon: Users, connected: false }
    ]
  }
]

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedInnovation, setSelectedInnovation] = useState('reputation')

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Blockchain Innovation Platform...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Blockchain Innovation Platform
            </h1>
            <p className="text-muted-foreground text-lg">
              Revolutionary solutions for blockchain challenges
            </p>
          </div>
          <Button 
            onClick={() => blink.auth.login()}
            size="lg"
            className="glow-effect"
          >
            Enter Platform
          </Button>
        </motion.div>
      </div>
    )
  }

  const currentInnovation = innovations.find(i => i.id === selectedInnovation)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
              <h1 className="text-xl font-bold text-gradient">BlockchainInnovation</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden sm:flex">
                Welcome, {user.email}
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => blink.auth.logout()}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              5 Revolutionary
              <br />
              Blockchain Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Addressing real-world problems with innovative blockchain technology. 
              From trustless reputation systems to emotion-verified NFTs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                5 Innovations
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Cross-Platform
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Trustless
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`innovation-card cursor-pointer h-full ${
                    selectedInnovation === innovation.id ? 'glow-effect' : ''
                  }`}
                  onClick={() => setSelectedInnovation(innovation.id)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${innovation.color} flex items-center justify-center mb-4`}>
                      <innovation.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{innovation.title}</CardTitle>
                    <CardDescription className="text-base">
                      {innovation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {innovation.details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {innovation.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Detailed View */}
          {currentInnovation && (
            <motion.div
              key={selectedInnovation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="innovation-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentInnovation.color} flex items-center justify-center`}>
                        <currentInnovation.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{currentInnovation.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {currentInnovation.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Button className="glow-effect">
                      Launch App
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="integrations">Integrations</TabsTrigger>
                      <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                          <div className="space-y-3">
                            {currentInnovation.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Implementation Status</h3>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Smart Contracts</span>
                                <span>85%</span>
                              </div>
                              <Progress value={85} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Frontend Interface</span>
                                <span>92%</span>
                              </div>
                              <Progress value={92} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>API Integration</span>
                                <span>78%</span>
                              </div>
                              <Progress value={78} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="integrations" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentInnovation.integrations.map((integration) => (
                          <Card key={integration.name} className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <integration.icon className="w-5 h-5 text-muted-foreground" />
                                <span className="font-medium">{integration.name}</span>
                              </div>
                              <Badge 
                                variant={integration.connected ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {integration.connected ? "Connected" : "Pending"}
                              </Badge>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="analytics" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">1,247</div>
                            <div className="text-sm text-muted-foreground">Active Users</div>
                          </div>
                        </Card>
                        <Card className="p-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-secondary mb-2">89.2%</div>
                            <div className="text-sm text-muted-foreground">Success Rate</div>
                          </div>
                        </Card>
                        <Card className="p-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-accent mb-2">24.7K</div>
                            <div className="text-sm text-muted-foreground">Transactions</div>
                          </div>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gradient mb-4">
              Ready to revolutionize blockchain?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers building the future of decentralized technology
            </p>
            <Button size="lg" className="glow-effect">
              Start Building
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App