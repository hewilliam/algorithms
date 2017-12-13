var Node = function (value) {
    this.value = value;
    this.next = null;
  }

// function deleteDups(head) {
//     let saved = {}
//     let current = head;
//     let previous

//     while(current) {
//         if(!saved[current.val]) {
//             saved[current.val] = true;
//             previous = current;
//         } else {
//             console.log("prev", previous)
//             previous.next = current.next
//         }
//         current= current.next
//     }
//     return head
// }

function deleteDups(head) {
  let outerNode = head;
  let innerNode;

  while (outerNode && outerNode.next) {
    innerNode = outerNode.next;
    const value = outerNode.value;
    while (innerNode && innerNode.next) {
      if (value === innerNode.next.value) {
        if(innerNode.next.next) {
          innerNode.next = innerNode.next.next;
        } else {
          innerNode.next =null;
        }
      } 
      innerNode = innerNode.next;
      
      
    }
    outerNode = outerNode.next;
  }
  return head;
}


let ll = new Node(5);
ll.next= new Node(5);
ll.next.next = new Node(6);
ll.next.next.next = new Node(7);
//console.log(ll)
deleteDups(ll)