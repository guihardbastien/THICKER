
import { randomFloat } from '../random_utils/random_module';

/**
 * Generates point inside sphere
 * @param x0
 * @param y0
 * @param z0
 * @param radius
 */
export function randomSpherePoint(x0:number, y0:number, z0:number, radius:number):number[] {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
    const y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
    const z = z0 + (radius * Math.cos(phi));

    return [x, y, z];
}

/**
 * Generates point belonging to a ring given its center and boundaries
 * @param boundaries
 * @param center
 * @param radius
 *
 * TODO turn into hypersphere
 */
export function randomRingPoint(
    boundaries:number[], center: number, radius: number): number[] {

    // even data distribution inside circles
    const alpha = 2 * Math.PI * Math.random();
    const positiveR = radius * Math.sqrt(randomFloat(boundaries[0], boundaries[1]));
    const x = positiveR * Math.cos(alpha) + center;
    const y = positiveR * Math.sin(alpha) + center;

    return [x, y];
}