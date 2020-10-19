package com.pencet.pennart.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name = "tb_painting")
public class Painting implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	@Column(columnDefinition = "TEXT")
	private String description;
	private Integer year;
	private String dimensions;
	private Double valor;
	//Relacionamento
	private Long id_category;
	//Relacionamento
	private Long id_series;
	
	@ManyToMany
	@JoinTable(name = "tb_painting_technique",
				joinColumns = @JoinColumn(name = "painting_id"),
				inverseJoinColumns = @JoinColumn(name = "technique_id"))
	Set<Technique> techniques = new HashSet<>();
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant updatedAt;
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant createdAt;
	
	
	public Painting() {
		
	}
	public Painting(Long id, String title, String description, Integer year, String dimensions, Double valor,
			Long id_category, Long id_series) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.year = year;
		this.dimensions = dimensions;
		this.valor = valor;
		this.id_category = id_category;
		this.id_series = id_series;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Integer getYear() {
		return year;
	}
	
	public void setYear(Integer year) {
		this.year = year;
	}
	
	public String getDimensions() {
		return dimensions;
	}
	
	public void setDimensions(String dimensions) {
		this.dimensions = dimensions;
	}
	
	public Double getValor() {
		return valor;
	}
	
	public void setValor(Double valor) {
		this.valor = valor;
	}
	
	public Long getId_category() {
		return id_category;
	}
	
	public void setId_category(Long id_category) {
		this.id_category = id_category;
	}
	
	public Long getId_series() {
		return id_series;
	}
	
	public void setId_series(Long id_series) {
		this.id_series = id_series;
	}
	
	@PrePersist
	public void prePersist() {
		createdAt = Instant.now();
	}

	@PreUpdate
	public void preUpdate() {
		updatedAt = Instant.now();
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Painting other = (Painting) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
}
