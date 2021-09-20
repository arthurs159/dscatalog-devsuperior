package com.devsuperior.dscatalog.services.exception;

public class EntitityNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public EntitityNotFoundException(String msg) {
		super(msg);
	}
	
}
