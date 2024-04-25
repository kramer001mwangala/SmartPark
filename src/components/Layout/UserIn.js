import classes from './UserIn.module.css';
import { useAppContext } from '../../AppContext';

const UserIn = () => {
	const { email } = useAppContext();
 
	return (
		<div className = {classes.user}>
			<p>
				Hey  {email} welcome to our app!
			</p>
		</div>
	);
};

export default UserIn;