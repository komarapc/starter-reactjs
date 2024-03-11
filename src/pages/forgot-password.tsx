import Container from "@/components/layouts/container";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { z } from "zod";
const FormSchema = z.object({
  email: z.string().email(),
});

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log({ data });
  };
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="w-full min-h-screen flex flex-col items-center">
        <Container className="my-auto max-w-xl">
          <Card className="p-5">
            <CardHeader className="flex flex-col items-start">
              <h2 className="text-lg font-semibold">Forgot Password</h2>
              <p className="text-sm text-foreground/50">
                We will send you a link to reset your password.
              </p>
            </CardHeader>
            <CardBody>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex items-center space-x-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your email address"
                        autoCorrect="off"
                        autoComplete="off"
                        isInvalid={!!form.formState.errors.email?.message}
                      />
                    )}
                  />
                  <Button type="submit" variant="solid" color="primary">
                    Send Link
                  </Button>
                </form>
              </Form>
            </CardBody>
            <CardFooter>
              <p className="text-sm text-foreground/50">
                Remember your password?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
