import { z } from "zod";

// Define o esquema da tabela answer no banco de dados
export const answerSchema = z.array(z.object({
    id: z.number(),
    plugin_formcreator_formanswers_id: z.number(),
    plugin_formcreator_questions_id: z.number(),
    answer: z.string().describe('longtext'),
}));

//
export const groupedAnswersSchema = z.array(z.object({
    ticketId: z.number(),
    formAnswerId: z.number(),
    questions: z.record(z.string()),
}));


// Define o esquema da tabela items_ticket no banco de dados
export const itemTicketSchema = z.object({
    id: z.number(),
    itemtype: z.string(),
    items_id: z.number(),
    tickets_id: z.number(),
});

// Define a interface Answer utilizando o tipo inferido do esquema zod
export type Answer = z.infer<typeof answerSchema>[number];

export type GroupedAnswers = z.infer<typeof groupedAnswersSchema>[number];