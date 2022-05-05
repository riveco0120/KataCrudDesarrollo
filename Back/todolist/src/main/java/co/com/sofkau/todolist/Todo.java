package co.com.sofkau.todolist;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table
public class Todo {
    @javax.persistence.Id
    @GeneratedValue
    @Column(name = "id_todo", nullable = false)
    private Long idTodo;

    private String name;
    private boolean completed;
    private String groupListId;



}
