// static/js/chart.js
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

const data = {
    'ChatGPT-3.5': [
        { name: 'Unboxing', Ours: 5.8, RoCo: 7.5, LLaMAC: 8.0, MindAgent: 0.95 },
        { name: 'Table Clean', Ours: 7.4, RoCo: 12.4, LLaMAC: 13.5, MindAgent: 0.85 },
        { name: 'Drink-prep', Ours: 4.3, RoCo: 5.8, LLaMAC: 4.0, MindAgent: 0.95 },
        { name: 'Cube Sorting', Ours: 5.5, RoCo: 6.9, LLaMAC: 6.5, MindAgent: 0.87 }
    ],
    'ChatGPT-4': [
        { name: 'Unboxing', Ours: 5.3, RoCo: 7.0, LLaMAC: 7.5, MindAgent: 0.95 },
        { name: 'Table Clean', Ours: 6.6, RoCo: 11.3, LLaMAC: 13.0, MindAgent: 0.86 },
        { name: 'Drink-prep', Ours: 6.1, RoCo: 3.5, LLaMAC: 3.8, MindAgent: 0.95 },
        { name: 'Cube Sorting', Ours: 5.5, RoCo: 5.8, LLaMAC: 6.3, MindAgent: 0.90 }
    ],
    'LLAMA-33': [
        { name: 'Unboxing', Ours: 6.5, RoCo: 6.8, LLaMAC: 7.3, MindAgent: 0.95 },
        { name: 'Table Clean', Ours: 6.9, RoCo: 11.5, LLaMAC: 12.8, MindAgent: 0.84 },
        { name: 'Drink-prep', Ours: 6.2, RoCo: 3.1, LLaMAC: 3.7, MindAgent: 0.95 },
        { name: 'Cube Sorting', Ours: 4.0, RoCo: 5.6, LLaMAC: 6.1, MindAgent: 0.88 }
    ],
    'Gemini-2': [
        { name: 'Unboxing', Ours: 6.5, RoCo: 7.2, LLaMAC: 7.8, MindAgent: 0.95 },
        { name: 'Table Clean', Ours: 7.0, RoCo: 11.8, LLaMAC: 12.2, MindAgent: 0.82 },
        { name: 'Drink-prep', Ours: 5.8, RoCo: 3.4, LLaMAC: 3.9, MindAgent: 0.95 },
        { name: 'Cube Sorting', Ours: 4.6, RoCo: 5.9, LLaMAC: 6.4, MindAgent: 0.87 }
    ]
};

function PerformanceChart() {
    const [selectedModel, setSelectedModel] = React.useState('ChatGPT-3.5');

    return React.createElement('div', { className: 'chart-container', style: { width: '100%', padding: '1rem' } },
        React.createElement('div', { 
            style: { 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
            } 
        },
            Object.keys(data).map(model => 
                React.createElement('button', {
                    key: model,
                    onClick: () => setSelectedModel(model),
                    className: 'button',
                    style: {
                        backgroundColor: selectedModel === model ? '#4CAF50' : '#f5f5f5',
                        color: selectedModel === model ? 'white' : 'black',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }
                }, model)
            )
        ),
        React.createElement('div', { style: { height: '500px' } },
            React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
                React.createElement(BarChart, {
                    data: data[selectedModel],
                    margin: { top: 20, right: 30, left: 20, bottom: 5 }
                },
                    React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                    React.createElement(XAxis, { dataKey: 'name' }),
                    React.createElement(YAxis),
                    React.createElement(Tooltip),
                    React.createElement(Legend),
                    React.createElement(Bar, { 
                        dataKey: 'Ours', 
                        fill: '#4CAF50', 
                        name: 'Ours (Best)',
                        radius: [5, 5, 0, 0]
                    }),
                    React.createElement(Bar, { 
                        dataKey: 'RoCo', 
                        fill: '#2196F3', 
                        name: 'RoCo',
                        radius: [5, 5, 0, 0]
                    }),
                    React.createElement(Bar, { 
                        dataKey: 'LLaMAC', 
                        fill: '#9C27B0', 
                        name: 'LLaMAC',
                        radius: [5, 5, 0, 0]
                    }),
                    React.createElement(Bar, { 
                        dataKey: 'MindAgent', 
                        fill: '#FF9800', 
                        name: 'MindAgent',
                        radius: [5, 5, 0, 0]
                    })
                )
            )
        ),
        React.createElement('div', { 
            style: { 
                marginTop: '1rem', 
                textAlign: 'center', 
                fontSize: '0.875rem', 
                color: '#666' 
            } 
        },
            React.createElement('p', null, `Performance comparison across different tasks and methods for ${selectedModel}`),
            React.createElement('p', { style: { marginTop: '0.5rem' } }, 'Lower values indicate better performance')
        )
    );
}

// 渲染组件
ReactDOM.render(
    React.createElement(PerformanceChart),
    document.getElementById('performance-chart')
);