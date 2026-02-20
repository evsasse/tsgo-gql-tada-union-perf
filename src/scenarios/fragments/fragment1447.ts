import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1445 } from "./fragment1445";
import type { FragmentToken1446 } from "./fragment1446";

export const FRAGMENT_1447 = gql(`
  fragment Fragment1447 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult1447 = ResultOf<typeof FRAGMENT_1447>;
type FragmentSelf1447 = NonNullable<FragmentResult1447>;

export type FragmentToken1447 =
  | FragmentSelf1447["__typename"]
  | FragmentSelf1447["typenameHint"] | FragmentToken1445 | FragmentToken1446;
