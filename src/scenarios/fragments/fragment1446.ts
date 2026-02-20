import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1444 } from "./fragment1444";
import type { FragmentToken1445 } from "./fragment1445";

export const FRAGMENT_1446 = gql(`
  fragment Fragment1446 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult1446 = ResultOf<typeof FRAGMENT_1446>;
type FragmentSelf1446 = NonNullable<FragmentResult1446>;

export type FragmentToken1446 =
  | FragmentSelf1446["__typename"]
  | FragmentSelf1446["typenameHint"] | FragmentToken1444 | FragmentToken1445;
