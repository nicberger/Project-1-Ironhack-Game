function isCollidingWithEnemy(parameterA, parameterB) {
    // this function checks wether the player/bullet is colliding with the enemy
    // conditions for collision are the following:
    // Bottom of A >= Top of B
    // Top of A <= Bottom of B
    // Left of A <= Right of B
    // Right of A >= Left of B
    // player/bullet is parameterA and enemy is parameterB

    const bottomOfA = parameterA.y + parameterA.height;
    const topOfB = parameterB.y;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = parameterA.y;
    const bottomOfB = parameterB.height + parameterB.y;

    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = parameterA.x;
    const rightOfB = parameterB.x + parameterB.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = parameterA.width + parameterA.x;
    const leftOfB = parameterB.x;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
        isBottomOfABiggerThenTopOfB &&
        isTopOfASmallerThanBottomOfB &&
        isLeftOfASmallerThanRightOfB &&
        isRightOfABiggerThanLeftOfB
    );
}
