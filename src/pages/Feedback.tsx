
import React, { useState } from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { MessageCircle, Star, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you would send this data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your feedback",
        description: "We appreciate you taking the time to share your thoughts.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setRating(null);
      setComment('');
    }, 1000);
  };

  const RatingStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="focus:outline-none"
          >
            <Star
              className={`h-6 w-6 ${
                rating && star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const RecentReviews = () => {
    // Sample reviews - in a real app, these would come from your backend
    const reviews = [
      {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        date: '2025-04-15',
        comment: 'Amazing experience at the wildlife sanctuary! The animals looked so well cared for and the staff was very knowledgeable.'
      },
      {
        id: 2,
        name: 'Michael Chen',
        rating: 4,
        date: '2025-04-10',
        comment: 'Great place to visit with the family. The conservation efforts are impressive. Would definitely recommend.'
      },
      {
        id: 3,
        name: 'Priya Patel',
        rating: 5,
        date: '2025-04-05',
        comment: 'I learned so much about wildlife conservation. The educational programs are excellent and the animals are beautiful.'
      }
    ];

    return (
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base font-medium">{review.name}</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <CardDescription className="text-xs">{new Date(review.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate
      title="Feedback & Reviews"
      description="Share your experience and read what others have to say"
      icon={<MessageCircle className="h-6 w-6" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                Your feedback helps us improve our wildlife sanctuary
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>How would you rate your experience?</Label>
                  <RatingStars />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="comment">Your comments</Label>
                  <Textarea
                    id="comment"
                    placeholder="Tell us about your experience..."
                    className="min-h-[120px]"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting || !rating}>
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Visitor Reviews</CardTitle>
              <CardDescription>
                See what others are saying about their experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentReviews />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Reviews
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Feedback;
