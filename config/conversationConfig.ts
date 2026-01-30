// Conversation Configuration
export const conversationConfig = {
  // Language Settings
  language: 'zh-CN', // Use Chinese for all responses
  
  // Timestamp Format
  timestamp: {
    enabled: true,
    format: '[MMDD_HHmmss]', // Format: [MonthDay_HourMinuteSecond], e.g., [0130_124400]
    example: '[0130_124400]' // Example: January 30, 12:44:00
  },

  // Response Settings
  response: {
    prependTimestamp: true, // Prepend timestamp to every response
    useChinese: true,       // Always respond in Chinese
    maintainContext: true,  // Maintain conversation context even after restart
  },

  // Conversation Requirements
  requirements: [
    '所有回答必須使用中文',
    '每次回答開頭都要加上時間戳',
    '時間戳格式為 [MMDD_HHmmss]',
    '即使系統重啟也要保持這些要求'
  ]
};