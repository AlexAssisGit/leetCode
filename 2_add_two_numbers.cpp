/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        //l1 == [2,4,5], l2 = [5,6,4]
        //result -> 342 + 465 = 807 -> output = [7,0,8]
        ListNode dummy(0);           
        ListNode* current = &dummy;  
        int carry = 0;

        while(l1 || l2 || carry)
        {
            int x = l1 ? l1->val : 0;   //caso l1 seja nulo x = 0
            int y = l2 ? l2->val : 0;

            int sum = x + y + carry;
            carry = sum/10;
            int digit = sum % 10;

            current->next = new ListNode(digit);  //cria o novo no e avança a lista
            current = current->next;

            if (l1) l1 = l1->next;  // avança em l1 se possível
            if (l2) l2 = l2->next;  // avança em l2 se possível

        }
        return dummy.next;
    }
};