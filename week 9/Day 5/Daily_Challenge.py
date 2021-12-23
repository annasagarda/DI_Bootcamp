import datetime


class Company:

	def __init__(self, company_id: str, name: str):
		self.__company_id = company_id
		self.__name = name
		self.__planes = None

	def add_plane(self, plane):
		self.__planes.append(plane)


class Airport:

	def __init__(self, city: str):
		self.__city = city

		self.__planes = None
		self.__scheduled_departures = None
		self.__scheduled_arrivals = None

	def add_plane(self, plane):
		self.__planes.append(plane)

	def schedule_flight(self, destination, datetime):
		pass

	def info(self, start_date, end_date):
		pass


class Airplane:

	def __init__(self, airplane_id: int, current_location: Airport, company: Company):
		self.airplane_id = airplane_id
		self.current_location = current_location
		self.company = company

		self.next_flights = None
		# self.next_flights = next_flights.sorted(datetime)

	def fly(self, destination) -> None:
		self.current_location = destination
		self.next_flights.pop(0)

	def location_on_date(self, date) -> datetime.date:
		for flight in self.next_flights:
			if flight.date == date:
				return flight.origin_airport

	def available_on_date(self, date, location) -> bool:
		future_location = self.location_on_date(date)

		# if future_location == location:
		# 	return True
		# else:
		# 	return False

		return future_location == location


class Flight:

	def __init__(self, date: datetime.date, destination: Airport, origin: Airport, plane: Airplane, id: str):
		self.date = date
		self.destination_airport = destination
		self.origin_airport = origin
		self.plane = plane

	def take_off(self):
		self.plane.current_location = self.origin_airport

	def land(self):
		self.plane.current_location = self.destination_airport


# creating airports
tlv_airport = Airport("TLV")
usa_airport = Airport("USA")

# creating the company
el_al = Company(company_id="c1", name="EL AL")

# creating airplane
el_al_1 = Airplane(airplane_id=1, current_location=tlv_airport, company=el_al)

d1 = datetime.date(2021, 12, 6)
usa_12_6 = Flight(date=d1, destination=usa_airport, origin=tlv_airport, plane=el_al_1, id="usa_12_6")


el_al.add_plane(plane=el_al_1)