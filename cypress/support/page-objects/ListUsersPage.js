

class ListUsersPage{
        
    elements = {
        listUsersTitle: ()=> cy.contains('Lista dos usuários'),
    }

    verifyPageLoadListaUsuarios(){
        this.elements.listUsersTitle();
    }

    searchUserByName(name){
        cy.contains('td', name).parents('tr');
    }

    deleteUserByName(name){
        cy.contains('td', name).parents('tr').find('button.btn-danger').click();
        cy.wait(400);
        cy.reload();
    }
}

    export default new ListUsersPage();
    

 
