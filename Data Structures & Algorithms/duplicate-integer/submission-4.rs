impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut track_set = HashSet::new();
        for i in 0..nums.len() {
            if track_set.contains(&nums[i]) {
                return true;
            }
            track_set.insert(nums[i]);
        }
        return false;
    }
}
