import profile from "../model/Profile.js";


export const addProfile = async (request, response) => {
  try {
    const { sub } = request.body;
    if (!sub) {
      return response.status(400).json({ msg: 'Sub is required' });
    }

    // Update the profile if it exists, otherwise create a new one
    const updatedProfile = await profile.findOneAndUpdate(
      { sub },
      { $set: request.body },
      { new: true, upsert: true }
    );

    return response.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error while adding or updating profile:', error);
    return response.status(500).json({ msg: 'Internal Server Error' });
  }
};


export async function getProfile(request,response){
  try {
    const profiler =await profile.findOne({sub:request.params.sub})//find the data in message cluster where the condition is ({})
    return response.status(200).json(profiler);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
