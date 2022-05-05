package co.com.sofkau.todolist;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITodoRepository  extends CrudRepository<Todo,Long>{
}
