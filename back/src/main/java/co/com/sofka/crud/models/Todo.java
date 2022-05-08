package co.com.sofka.crud.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Setter
@Getter
@Table(name = "todo")
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private boolean completed;
    private Long groupListId;

    public Todo() {
    }

    public Todo(String name, boolean completed, Long groupListId) {
        this.name = name;
        this.completed = completed;
        this.groupListId = groupListId;
    }
}
