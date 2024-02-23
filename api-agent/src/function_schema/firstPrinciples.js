
const firstPrinciples = [{
    type: 'function',
    function:
    {
        name: "createFirstPrinciplesFromTopic",
        description: `World's best introduction to {topic}, why its important to learn, how it works, It's foundational/first principles, the assumptions/axioms that underpin it, and practical, simple real world applications of {topic}.`,
        parameters: {
            type: "object",
            properties: {
                topic: {
                    type: "string",
                    description: "Name of the topic to create first principles for",
                },
                importance: {
                    type: "string",
                    description:
                        "strong 1-3 sentence motivation/intro to why this topic is transcendentally and existencially important to understand, know, and learn about. Motivate why it might be important to learn to love a fullfilling and meaningful life.",
                },
                first_principles: {
                    type: "array",
                    description:
                        "Array of dictionaries of the 5st most important principles of the topic.",
                    items: {
                        principle: {
                            type: "dictionary",
                            description: "dictionaries of the 5st most important principles of the topic.",
                            items: {
                                principle: {
                                    type: "string",
                                    description: "Name of first principle of topic. can be cute/catchy if appropriate",
                                },
                                explanation: {
                                    type: "string",
                                    description: "1-3 sentence explanation of the first principle of the topic.",
                                },
                            },
                        },
                    },
                },
                assumptions_and_axioms: {
                    type: "string",
                    description:
                        "2-4 Bullet points of the most important axioms underpining the principle in relation to the topic",
                },
                applications: {
                    type: "string",
                    description:
                        "2-4 Bullet points of the most important practical applications involving this topic",
                },
            },
            required: ["topic", "importance", "first_principles", "assumptions_and_axioms", "applications"],
        },
    },
}
]

module.exports.firstPrinciples = firstPrinciples