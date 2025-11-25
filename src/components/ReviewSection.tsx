import { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageSquare, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
  dislikes: number;
  replies: Reply[];
  userLiked?: boolean;
  userDisliked?: boolean;
}

interface Reply {
  id: number;
  name: string;
  comment: string;
  date: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Ahmed Al Mansouri",
      rating: 5,
      comment: "Excellent service! They installed our commercial freezer room quickly and professionally. The team was very knowledgeable and the after-sales support is outstanding.",
      date: "2024-11-20",
      likes: 24,
      dislikes: 1,
      replies: [
        {
          id: 1,
          name: "Asal Alwadi Team",
          comment: "Thank you for your kind words! We're delighted to have served you.",
          date: "2024-11-21"
        }
      ]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Best refrigeration company in Dubai! They provided a custom solution for our pet shelter container. Very responsive and professional.",
      date: "2024-11-18",
      likes: 18,
      dislikes: 0,
      replies: []
    },
    {
      id: 3,
      name: "Mohammed Ali",
      rating: 4,
      comment: "Great service for our restaurant's walk-in chiller. Installation was smooth and they explained everything clearly. Highly recommend!",
      date: "2024-11-15",
      likes: 15,
      dislikes: 2,
      replies: []
    }
  ]);

  const [showReplyInput, setShowReplyInput] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");

  const handleLike = (reviewId: number) => {
    setReviews(reviews.map(review => {
      if (review.id === reviewId) {
        if (review.userLiked) {
          return { ...review, likes: review.likes - 1, userLiked: false };
        } else {
          return {
            ...review,
            likes: review.likes + 1,
            dislikes: review.userDisliked ? review.dislikes - 1 : review.dislikes,
            userLiked: true,
            userDisliked: false
          };
        }
      }
      return review;
    }));
  };

  const handleDislike = (reviewId: number) => {
    setReviews(reviews.map(review => {
      if (review.id === reviewId) {
        if (review.userDisliked) {
          return { ...review, dislikes: review.dislikes - 1, userDisliked: false };
        } else {
          return {
            ...review,
            dislikes: review.dislikes + 1,
            likes: review.userLiked ? review.likes - 1 : review.likes,
            userDisliked: true,
            userLiked: false
          };
        }
      }
      return review;
    }));
  };

  const handleReply = (reviewId: number) => {
    if (!replyText.trim()) return;

    setReviews(reviews.map(review => {
      if (review.id === reviewId) {
        const newReply: Reply = {
          id: review.replies.length + 1,
          name: "Customer",
          comment: replyText,
          date: new Date().toISOString().split('T')[0]
        };
        return { ...review, replies: [...review.replies, newReply] };
      }
      return review;
    }));

    setReplyText("");
    setShowReplyInput(null);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Customer Reviews
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            See what our clients say about our refrigeration services
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold ml-2">4.9 out of 5</span>
            <span className="text-muted-foreground">({reviews.length} reviews)</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="group hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Review Comment */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {review.comment}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(review.id)}
                    className={`gap-2 hover:bg-primary/10 transition-colors ${
                      review.userLiked ? "text-primary" : ""
                    }`}
                  >
                    <ThumbsUp className={`h-4 w-4 ${review.userLiked ? "fill-primary" : ""}`} />
                    <span>{review.likes}</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDislike(review.id)}
                    className={`gap-2 hover:bg-destructive/10 transition-colors ${
                      review.userDisliked ? "text-destructive" : ""
                    }`}
                  >
                    <ThumbsDown className={`h-4 w-4 ${review.userDisliked ? "fill-destructive" : ""}`} />
                    <span>{review.dislikes}</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowReplyInput(showReplyInput === review.id ? null : review.id)}
                    className="gap-2 hover:bg-accent transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Reply</span>
                  </Button>
                </div>

                {/* Reply Input */}
                {showReplyInput === review.id && (
                  <div className="mt-4 pl-6 border-l-2 border-primary/20 animate-fade-in">
                    <Textarea
                      placeholder="Write your reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="mb-2 min-h-[80px]"
                    />
                    <Button
                      size="sm"
                      onClick={() => handleReply(review.id)}
                      className="gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Post Reply
                    </Button>
                  </div>
                )}

                {/* Replies */}
                {review.replies.length > 0 && (
                  <div className="mt-4 space-y-3 pl-6 border-l-2 border-primary/20">
                    {review.replies.map((reply) => (
                      <div key={reply.id} className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-sm">{reply.name}</h5>
                          <span className="text-xs text-muted-foreground">{reply.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{reply.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
