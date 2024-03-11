import Container from "@/components/layouts/container";
import Wrapper from "@/components/layouts/wrapper";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useSearch } from "@tanstack/react-router";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { z } from "zod";
const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
type Query = {
  token: string;
};
const ResetPassword = () => {
  const query: Query = useSearch({ from: "/reset-password" });
  console.log(query.token);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log({ data });
  };

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Wrapper className="flex items-center">
        <Container className="max-w-md">
          <Card className="p-5">
            <CardHeader className="flex flex-col items-start">
              <h2 className="text-lg font-semibold">Reset Password</h2>
              <p className="text-sm text-foreground/50">
                Please enter your new password
              </p>
            </CardHeader>
            <CardBody>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Enter your new password"
                        autoCorrect="off"
                        autoComplete="off"
                        isInvalid={!!form.formState.errors.password?.message}
                        errorMessage={form.formState.errors.password?.message}
                      />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Confirm your new password"
                        autoCorrect="off"
                        autoComplete="off"
                        isInvalid={
                          !!form.formState.errors.confirmPassword?.message
                        }
                        errorMessage={
                          form.formState.errors.confirmPassword?.message
                        }
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    variant="solid"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
};

export default ResetPassword;
