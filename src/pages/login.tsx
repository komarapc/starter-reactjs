import Container from "@/components/layouts/container";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";
import { useNavigate } from "@tanstack/react-router";
const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const Login = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    toast({
      title: "Login Success",
      description: "You have successfully logged in",
    });
  };
  const navigate = useNavigate();
  const { errors } = form.formState;

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-full min-h-screen flex items-center justify-center font-inter">
        <Container className="max-w-md">
          <Card className="p-5">
            <CardHeader className="flex flex-col">
              <h2 className="text-lg font-semibold">Login</h2>
              <p className="text-sm text-foreground/50">
                Please sign in to continue
              </p>
            </CardHeader>
            <CardBody>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="email"
                          {...field}
                          onChange={(e) =>
                            form.setValue("email", e.target.value)
                          }
                          autoComplete="false"
                          label="Email"
                          isInvalid={!!errors?.email?.message}
                        />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="password"
                          {...field}
                          onChange={(e) =>
                            form.setValue("password", e.target.value)
                          }
                          autoComplete="false"
                          label="Password"
                          isInvalid={!!errors.password?.message}
                        />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="light"
                    color="primary"
                    radius="sm"
                    fullWidth
                    onClick={() => navigate({ to: "/forgot-password" })}
                  >
                    Forgot Password?
                  </Button>
                  <Button
                    variant="solid"
                    type="submit"
                    color="primary"
                    radius="sm"
                    fullWidth
                  >
                    Sign In
                  </Button>
                </form>
              </Form>
            </CardBody>
          </Card>
          <Toaster />
        </Container>
      </div>
    </>
  );
};

export default Login;
