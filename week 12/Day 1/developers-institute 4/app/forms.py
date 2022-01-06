import flask_wtf
import wtforms
from wtforms import ValidationError


# wrapper functionß
def length(min=-1, max=-1):
	def my_length_check(form, field):
		if len(field.data) > 50:
			raise ValidationError('Field must be less than 50 characters')

	return my_length_check


class Register(flask_wtf.FlaskForm):
	firstName = wtforms.StringField(label="First Name", validators=[wtforms.validators.DataRequired()])
	lastName = wtforms.StringField(label="Last Name", validators=[wtforms.validators.DataRequired()])
	age = wtforms.IntegerField("Age", validators=[wtforms.validators.DataRequired(),wtforms.validators.NumberRange(min=1,max=100)])


	submit = wtforms.SubmitField("Submit")
