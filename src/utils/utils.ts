export const getTypeColorClass = (type: string) => {
    switch (type) {
      case 'fire':
        return 'bg-red-400 border-red-600 shadow-md shadow-red-400/40';
      case 'water':
        return 'bg-blue-400 border-blue-600 shadow-md shadow-blue-400/40';
      case 'grass':
        return 'bg-green-400 border-green-600 shadow-md shadow-green-400/40';
      case 'electric':
        return 'bg-yellow-400 border-yellow-600 shadow-md shadow-yellow-400/40';
      case 'ice':
        return 'bg-blue-100 border-blue-200 shadow-md shadow-blue-100/40';
      case 'fighting':
        return 'bg-red-600 border-red-700 shadow-md shadow-red-600/40';
      case 'poison':
        return 'bg-purple-400 border-purple-500 shadow-md shadow-purple-400/40';
      case 'ground':
        return 'bg-yellow-600 border-yellow-700 shadow-md shadow-yellow-600/40';
      case 'flying':
        return 'bg-indigo-400 border-indigo-500 shadow-md shadow-indigo-400/40';
      case 'psychic':
        return 'bg-pink-400 border-pink-500 shadow-md shadow-pink-400/40';
      case 'bug':
        return 'bg-green-600 border-green-700 shadow-md shadow-green-600/40';
      case 'rock':
        return 'bg-gray-600 border-gray-700 shadow-md shadow-gray-600/40';
      case 'ghost':
        return 'bg-indigo-900 border-indigo-900 shadow-md shadow-indigo-900/40';
      case 'dragon':
        return 'bg-purple-800 border-purple-900 shadow-md shadow-purple-800/40';
      case 'dark':
        return 'bg-gray-800 border-gray-900 shadow-md shadow-gray-800/40';
      case 'steel':
        return 'bg-gray-400 border-gray-500 shadow-md shadow-gray-400/40';
      case 'fairy':
        return 'bg-pink-200 border-pink-300 shadow-md shadow-pink-200/40';
      default:
        return 'bg-gray-400 border-gray-500 shadow-md shadow-gray-400/40';
    }
  };
  