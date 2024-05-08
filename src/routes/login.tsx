import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    createFileRoute,
    useNavigate,
    useRouteContext,
    useRouter,
} from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const Route = createFileRoute('/login')({
    component: Login,
});

const loginFormSchema = z.object({
    username: z.string().min(3),
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    // password: z.string().min(8),
});

type LoginFormType = z.infer<typeof loginFormSchema>;

export function Login() {
    const router = useRouter();

    const navigate = useNavigate({ from: '/login' });

    const { login } = useRouteContext({
        from: '__root__',
        select: (c) => ({ ...c.auth }),
    });

    const form = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema),
    });

    function onSubmit(values: LoginFormType) {
        login({
            username: values.username,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
        });
        router.invalidate();
        navigate({
            to: '/',
        });
    }

    return (
        <Card className='mx-auto max-w-sm'>
            <CardHeader>
                <CardTitle className='text-xl'>Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to login to an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid gap-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='grid gap-2'>
                                <Label htmlFor='first-name'>First Name</Label>
                                <Input
                                    id='first-name'
                                    placeholder='Max'
                                    {...form.register('firstName')}
                                />
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor='last-name'>Last Name</Label>
                                <Input
                                    id='last-name'
                                    placeholder='Robinson'
                                    {...form.register('lastName')}
                                />
                            </div>
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='m@example.com'
                                {...form.register('email')}
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='username'>Username</Label>
                            <Input
                                id='username'
                                placeholder='tan_bin'
                                {...form.register('username')}
                            />
                        </div>
                        <Button type='submit' className='w-full'>
                            Login
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default Login;
