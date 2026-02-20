import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1384 } from "./fragment1384";
import type { FragmentToken1385 } from "./fragment1385";

export const FRAGMENT_1386 = gql(`
  fragment Fragment1386 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult1386 = ResultOf<typeof FRAGMENT_1386>;
type FragmentSelf1386 = NonNullable<FragmentResult1386>;

export type FragmentToken1386 =
  | FragmentSelf1386["__typename"]
  | FragmentSelf1386["typenameHint"] | FragmentToken1384 | FragmentToken1385;
