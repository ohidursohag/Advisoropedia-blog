// format Date string To DD MMM format
export const formatDate = (dateString)=>{
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   const date = new Date(dateString);
   const day = date.getDate();
   const month = months[date.getMonth()];
 
   return `${day} ${month}`;
 }
