package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"studapp-blog/api/auth"
	"studapp-blog/api/models"
	"studapp-blog/api/utils"

	"golang.org/x/crypto/bcrypt"
)

func Login(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		utils.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}
	user := models.User{}
	err = json.Unmarshal(body, &user)
	if err != nil {
		utils.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}
	user.Prepare()
	err = user.Validate("login")
	if err != nil {
		utils.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}
	token, user, err := SignIn(user.Email, user.Password)
	if err != nil {
		formattedError := utils.FormatError(err.Error())
		utils.ERROR(w, http.StatusUnprocessableEntity, formattedError)
		fmt.Println(string(err.Error()))
		return
	}
	usr := models.ResponseUser{}
	usr.ID = user.ID
	usr.Token = token
	(w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	utils.JSON(w, http.StatusOK, usr)
}

func SignIn(email, password string) (string, models.User, error) {
	var err error
	user := models.User{}
	err = models.GetDB().Debug().Table("users").Where("email=?", email).First(&user).Error
	if err != nil {
		fmt.Println(string(err.Error()))
		return "", user, err
	}
	err = models.VerifyPassword(user.Password, password)
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", user, err
	}
	err = models.GetDB().Debug().Table("images").Where("id=?", user.ImageID).Take(&user.Image).Error
	token, err := auth.CreateToken(user.ID)
	if err != nil {
		return "", user, err
	}
	return token, user, nil
}
