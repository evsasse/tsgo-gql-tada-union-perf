import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1361 } from "./fragment1361";
import type { FragmentToken1362 } from "./fragment1362";

export const FRAGMENT_1363 = gql(`
  fragment Fragment1363 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult1363 = ResultOf<typeof FRAGMENT_1363>;
type FragmentSelf1363 = NonNullable<FragmentResult1363>;

export type FragmentToken1363 =
  | FragmentSelf1363["__typename"]
  | FragmentSelf1363["typenameHint"] | FragmentToken1361 | FragmentToken1362;
