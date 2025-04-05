import Link from "next/link";
import Image from "next/image";
import { Button, type buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Edit,
  ExternalLink,
  Layout,
  Link2,
  List,
  Settings,
  Share2,
} from "lucide-react";
import type { VariantProps } from "class-variance-authority";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LinkHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    One Link to Share All Your Important Links
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create a customizable page that houses all your important
                    links in one place. Share your LinkHub with your audience
                    and track engagement.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Start for Free <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    See Demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-[300px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="bg-primary p-4 text-center text-primary-foreground">
                    <h3 className="font-bold">@username</h3>
                  </div>
                  <div className="flex flex-col gap-3 p-4">
                    {[
                      "My Website",
                      "YouTube Channel",
                      "Instagram",
                      "Twitter",
                      "Latest Blog Post",
                      "Online Store",
                    ].map((link, i) => (
                      <div
                        key={i}
                        className="rounded-lg border bg-card p-3 text-center shadow-sm hover:shadow transition-all"
                      >
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="bg-muted py-20 flex justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need in One Place
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                LinkHub provides all the tools you need to create, manage, and
                share your links effectively.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Edit className="h-6 w-6" />}
                title="Easy Link Management"
                description="Add, edit, delete, and reorder your links with our intuitive drag-and-drop interface."
              />
              <FeatureCard
                icon={<Layout className="h-6 w-6" />}
                title="Customizable Design"
                description="Personalize your page with custom colors, fonts, and themes to match your brand."
              />
              <FeatureCard
                icon={<Share2 className="h-6 w-6" />}
                title="One Link to Share"
                description="Share a single link across all your platforms to connect your audience to all your content."
              />
              <FeatureCard
                icon={<ExternalLink className="h-6 w-6" />}
                title="Click Analytics"
                description="Track link performance with detailed analytics on clicks, visitors, and engagement."
              />
              <FeatureCard
                icon={<Settings className="h-6 w-6" />}
                title="Admin Dashboard"
                description="Manage all your links from a powerful yet simple admin interface."
              />
              <FeatureCard
                icon={<List className="h-6 w-6" />}
                title="Unlimited Links"
                description="Add as many links as you need with no restrictions on your content."
              />
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="py-20 flex justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works best for you and your needs.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <PricingCard
                title="Free"
                price="$0"
                description="Perfect for individuals just getting started."
                features={[
                  "Up to 5 links",
                  "Basic analytics",
                  "Standard themes",
                  "LinkHub branding",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Pro"
                price="$9"
                description="For creators who need more customization."
                features={[
                  "Unlimited links",
                  "Advanced analytics",
                  "Custom themes",
                  "Remove LinkHub branding",
                  "Priority support",
                ]}
                buttonText="Get Pro"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Business"
                price="$19"
                description="For teams and businesses with advanced needs."
                features={[
                  "Everything in Pro",
                  "Team collaboration",
                  "Multiple profiles",
                  "API access",
                  "Custom domain",
                  "24/7 support",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-muted py-20 flex justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Loved by Creators Worldwide
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                See what our users have to say about LinkHub.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
              <TestimonialCard
                quote="LinkHub has completely transformed how I share my content. My audience engagement has increased by 40% since I started using it."
                author="Sarah Johnson"
                role="Content Creator"
              />
              {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
              <TestimonialCard
                quote="The admin interface is so intuitive. I can add and rearrange my links in seconds, which saves me so much time."
                author="Michael Chen"
                role="Digital Marketer"
              />
              {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
              <TestimonialCard
                quote="As a small business owner, LinkHub has been a game-changer for directing customers to our various platforms and promotions."
                author="Emma Rodriguez"
                role="Small Business Owner"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about LinkHub.
              </p>
            </div>
            <div className="mx-auto grid max-w-[900px] gap-4">
              <FaqItem
                question="How do I get started with LinkHub?"
                answer="Simply sign up for a free account, customize your profile, and start adding your links. You'll get a unique LinkHub URL that you can share with your audience."
              />
              <FaqItem
                question="Can I customize the appearance of my LinkHub page?"
                answer="Yes! You can customize colors, fonts, backgrounds, and themes to match your personal brand. Pro and Business plans offer even more customization options."
              />
              <FaqItem
                question="How do I track clicks on my links?"
                answer="LinkHub provides built-in analytics that show you how many clicks each link receives, along with visitor demographics and engagement metrics."
              />
              <FaqItem
                question="Can I use my own domain name?"
                answer="Yes, Business plan users can connect their own custom domain to their LinkHub page for a more professional appearance."
              />
              <FaqItem
                question="Is there a limit to how many links I can add?"
                answer="Free accounts can add up to 5 links. Pro and Business plans offer unlimited links."
              />
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Simplify Your Link Sharing?
                  </h2>
                  <p className="max-w-[600px] md:text-xl">
                    Join thousands of creators, influencers, and businesses who
                    use LinkHub to connect with their audience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Get Started Now <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="LinkHub dashboard preview"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background flex justify-center items-center">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Link2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LinkHub</span>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Cookies
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LinkHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
      <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: VariantProps<typeof buttonVariants>["variant"];
  highlighted: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-lg border ${
        highlighted ? "border-primary shadow-lg" : ""
      } bg-card p-6`}
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-6 flex-1 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={buttonVariant} className="w-full">
        {buttonText}
      </Button>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-4 text-muted-foreground">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500">
            ★
          </span>
        ))}
      </div>
      <blockquote className="mb-4 flex-1">
        <p className="italic">"{quote}"</p>
      </blockquote>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-2 text-lg font-bold">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}
