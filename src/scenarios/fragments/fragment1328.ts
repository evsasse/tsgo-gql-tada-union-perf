import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1326 } from "./fragment1326";
import type { FragmentToken1327 } from "./fragment1327";

export const FRAGMENT_1328 = gql(`
  fragment Fragment1328 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult1328 = ResultOf<typeof FRAGMENT_1328>;
type FragmentSelf1328 = NonNullable<FragmentResult1328>;

export type FragmentToken1328 =
  | FragmentSelf1328["__typename"]
  | FragmentSelf1328["typenameHint"] | FragmentToken1326 | FragmentToken1327;
