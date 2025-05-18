#include<iostream>
using namespace std;
class Node {
	public:
	int data;
	Node *next;
	Node(int a){
		data=a;
		next=NULL;
	}
	
	

};

void inserting_at_head(Node* &head){
	Node *t = new Node(5);
	t->next=head;
	head=t;
	
	
}
void printing(Node* &head){
	
	Node* temp=head;
	while(temp!=NULL){
		
		cout<<temp->data<<"\t";
		temp=temp->next;
	}
	
}
int main(){
	Node *p = new Node(2);
	//printing(p);
	inserting_at_head(p);  // address of the first node
	printing(p);
	
	
	
}
