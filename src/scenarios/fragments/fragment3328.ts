import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3326 } from "./fragment3326";
import type { FragmentToken3327 } from "./fragment3327";

export const FRAGMENT_3328 = gql(`
  fragment Fragment3328 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult3328 = ResultOf<typeof FRAGMENT_3328>;
type FragmentSelf3328 = NonNullable<FragmentResult3328>;

export type FragmentToken3328 =
  | FragmentSelf3328["__typename"]
  | FragmentSelf3328["typenameHint"] | FragmentToken3326 | FragmentToken3327;
