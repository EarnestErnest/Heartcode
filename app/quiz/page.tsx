"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Toast } from "@/components/ui/toast"

const FormSchema = z.object({
	name: z.string({
    	required_error: "Please enter a name"
	}).min(2, {
    	message: "name must be more than 2 characters long"
	}).max(20, {
    	message: "name must be no longer than 20 characters"
	}),
	question1: z.string({
    	required_error: "Please select an option"
	}),
	question2: z.string({
    	required_error: "Please select an option"
	}),
	question3: z.string({
    	required_error: "Please select an option"
	}),
	question4: z.string({
    	required_error: "Please select an option"
	}),
	question5: z.string({
    	required_error: "Please select an option"
	})
})


export default function Quiz() {
	const { toast } = useToast();
	const [score, setCalculateScore] = useState<number>(0);
	const [IsSubmitted, setSubmitted] = useState(false);
	const form = useForm<z.infer<typeof FormSchema>>({
    	resolver: zodResolver(FormSchema)
	})
	
	function onSubmit(data: z.infer<typeof FormSchema>) {
		if (IsSubmitted) {
			toast({
				title : "Congratulations",
			});
			return;
		}
		if (data.question1 == 'Stress & Anxiety'){setCalculateScore((prevScore) => prevScore +1)}
		if (data.question2 == '30%'){setCalculateScore((prevScore) => prevScore +1)}
		if (data.question3 == 'Methamphetamine'){setCalculateScore((prevScore) => prevScore +1)}
		if (data.question4 == '30-39'){setCalculateScore((prevScore) => prevScore +1)}
		if (data.question5 == 'Popularity amongst friend group'){setCalculateScore((prevScore) => prevScore +1)}
		setSubmitted(true);
		setCalculateScore((prevScore) => {
			const newScore = prevScore;
			toast({
			  title: `Congratulations ${data.name}! Your score is ${newScore}`,
			  description: "Refresh the page to try again",
			});
			return newScore;
		  });
		}
	return (
    	<Form {...form}>
        	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
            	<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 1:</FormLabel>
                        	<FormDescription>What is your name?</FormDescription>
                            	<FormControl>
                                	<Input placeholder="your name here" {...field}/>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>        
                	)}
            	/>
            	<FormField
                	control={form.control}
                	name="question1"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 2:</FormLabel>
                        	<FormDescription>Which of the following is the most popular reason people turn to drugs?</FormDescription>
                        	<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl>
                                	<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="Social Influence">Social Influence</SelectItem>
									<SelectItem value="Curiosity">Curiosity</SelectItem>
									<SelectItem value="Stress & Anxiety">Stress & Anxiety</SelectItem>
                                	<SelectItem value="Mental Health Disorder">Mental Health Disorder</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>                
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question2"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 3:</FormLabel>
                        	<FormDescription>In 2023, how many % of abusers were new abusers?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
								<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="10%">10%</SelectItem>
                                	<SelectItem value="20%">20%</SelectItem>
									<SelectItem value="30%">30%</SelectItem>
									<SelectItem value="40%">40%</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>                      
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question3"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 4:</FormLabel>
                        	<FormDescription>What is the most popular drug?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
								<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="Methamphetamine">Methamphetamine</SelectItem>
                                	<SelectItem value="Heroin">Heroin</SelectItem>
									<SelectItem value="Cannabis">Cannabis</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>                      
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question4"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 5:</FormLabel>
                        	<FormDescription>Which age group is most likely to abuse drugs?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
								<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="20-29">20-29</SelectItem>
                                	<SelectItem value="30-39">30-39</SelectItem>
									<SelectItem value="40-49%">40-49</SelectItem>
									<SelectItem value="50-59">50-59</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>                      
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question5"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 6:</FormLabel>
                        	<FormDescription>Which of the following is not a consequence of drug abuse?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
								<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="Social Isolation">Social Isolation</SelectItem>
                                	<SelectItem value="Addiction">Addiction</SelectItem>
									<SelectItem value="Popularity amongst friend group">Popularity amongst friend group</SelectItem>
									<SelectItem value="Economic Burden">Economic Burden</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>                      
                	)}
            	/>
            	<Button type="submit">Submit</Button>
        	</form>
    	</Form>        
	)
}    
