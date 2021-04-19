import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Stupid Questions</Accordion.Title>
			{faqsData.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}

			<OptForm>
				<OptForm.Input placeholder='Email Address' />
				<OptForm.Button>Try it</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Give er' a go? Enter your email to create an account.
				</OptForm.Text>
			</OptForm>
		</Accordion>
	);
}
