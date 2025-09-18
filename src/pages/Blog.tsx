import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, User, Search, Tag } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Essential Travel Safety Tips for Solo Travelers",
      excerpt: "Comprehensive guide to staying safe while traveling alone, including preparation tips and emergency protocols.",
      category: "Safety Tips",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How to Use TourSafe's Emergency Features",
      excerpt: "Step-by-step guide to configuring and using emergency alerts and trusted contacts effectively.",
      category: "Product Guide",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Understanding Danger Zones: AI-Powered Risk Assessment",
      excerpt: "Learn how our advanced algorithms identify and assess potential risks in different locations worldwide.",
      category: "Technology",
      author: "Dr. Elena Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Top 10 Safest Destinations for 2024",
      excerpt: "Our data-driven analysis of the world's safest travel destinations based on real user reports and official statistics.",
      category: "Destinations",
      author: "Alex Thompson",
      date: "2024-01-08",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Digital Identity Protection While Traveling",
      excerpt: "How blockchain technology and digital IDs are revolutionizing travel security and identity verification.",
      category: "Technology",
      author: "Lisa Park",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Family Travel Safety: Protecting Your Loved Ones",
      excerpt: "Special considerations and features for keeping families safe during group travel and vacations.",
      category: "Family Travel",
      author: "Jennifer Davis",
      date: "2024-01-03",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Business Travel Security Best Practices",
      excerpt: "Corporate travel safety protocols and how to leverage TourSafe for business trip management.",
      category: "Business Travel",
      author: "Robert Kim",
      date: "2024-01-01",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Emergency Response: What to Do in Crisis Situations",
      excerpt: "Critical steps to take during emergencies and how TourSafe's features can assist in crisis situations.",
      category: "Safety Tips",
      author: "Captain Maria Santos",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "The Psychology of Travel Safety: Mind Over Matter",
      excerpt: "Understanding the psychological aspects of travel anxiety and how preparation can boost confidence.",
      category: "Psychology",
      author: "Dr. Amanda White",
      date: "2023-12-25",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Remote Area Travel: When You're Off the Grid",
      excerpt: "Essential safety protocols for traveling to areas with limited connectivity and emergency services.",
      category: "Adventure Travel",
      author: "Jake Mitchell",
      date: "2023-12-22",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "Weather-Related Travel Risks and Mitigation",
      excerpt: "How to prepare for and respond to weather emergencies while traveling, with real-time monitoring tips.",
      category: "Weather Safety",
      author: "Dr. Rachel Green",
      date: "2023-12-20",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "Cultural Awareness and Personal Safety",
      excerpt: "Navigating cultural differences safely and respectfully while maintaining personal security abroad.",
      category: "Cultural Safety",
      author: "Ahmed Hassan",
      date: "2023-12-18",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    "all",
    "Safety Tips",
    "Technology", 
    "Destinations",
    "Family Travel",
    "Business Travel",
    "Adventure Travel",
    "Psychology",
    "Weather Safety",
    "Cultural Safety",
    "Product Guide"
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Travel Safety Blog
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Expert insights, safety tips, and the latest in travel security technology
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "all" && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="gradient-primary">{featuredPost.category}</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.readTime}</span>
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <Button className="gradient-primary">Read Full Article</Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {searchTerm || selectedCategory !== "all" ? "Search Results" : "Latest Articles"}
            <span className="text-muted-foreground ml-2">({filteredPosts.length})</span>
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <Card className="gradient-hero text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Stay Updated on Travel Safety</CardTitle>
            <CardDescription className="text-white/90">
              Get the latest safety tips, product updates, and travel insights delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;