const data = {
    id: '1',
    Role: 'Парадигмы',
    Manager: 'parent',
    children: [
      {
        id: '2',
        Role: 'Императивное',
        Manager: '1',
        children: [
          {
            id: '3',
            Role: 'Структурное',
            Manager: '2',
            children: [
              {
                id: '5',
                Role: 'Процедурное',
                Manager: '4',
              },
              {
                id: '6',
                Role: 'Объектно-ориентированное',
                Manager: '3',
                children: [
                  {
                    id: '8',
                    Role: 'На основе классов',
                    Manager: '4',
                  },
                  {
                    id: '7',
                    Role: 'Прототипное',
                    Manager: '4',
                  },
                ]
              },
              {
                id: '9',
                Role: 'Функциональное',
                Manager: '3',
              },
            ]
          },
          {
            id: '4',
            Role: 'Не структурное',
            Manager: '2',
          
          },
        ],
      },     
      {
        id: '10',
        Role: 'Декларативное',
        Manager: '1',
        children: [
          {
            id: '11',
            Role: 'Логическое',
            Manager: '10',
          },
          {
            id: '12',
            Role: 'Функциональное',
            Manager: '3',
            children: [
              {
                id: '13',
                Role: 'Апликативное',
                Manager: '4',
              },
              {
                id: '14',
                Role: 'Комбинаторное',
                Manager: '4',
              },
            ]
          },
        ],
      },
    ],
  };
  const options = {
    contentKey: 'Role',
    width: '100%',
    height: 500,
    nodeWidth: 320,
    nodeHeight: 80,
    childrenSpacing: 100,
    siblingSpacing: 30,
    direction: 'top',
    nodeTemplate: (content) => {
      return `<div style='display: flex;justify-content: space-around;align-items: center;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'>${content}</div>`;
    },
    tooltipMaxWidth: 120,
    enableTooltip: true,
    tooltipTemplate: (content) => {
      return `<div style='display: flex;justify-content: space-between;text-align: center; align-items: center;padding: 10px;background-color: grey;color: white;'>${content}</div>`;
    },
    fontSize: '24px',
    fontFamily: 'Satisfy, "cursive"',
    fontWeight: '600',
    fontColor: '#388ac4',
    borderColorHover: '#388ac4',
    canvasStyle: 'border: 1px solid black;background: #white;',
  };
  const tree = new ApexTree(document.getElementById('svg-tree'), options);
  tree.render(data);
  