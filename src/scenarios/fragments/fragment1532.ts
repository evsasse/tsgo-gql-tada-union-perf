import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1530 } from "./fragment1530";
import type { FragmentToken1531 } from "./fragment1531";

export const FRAGMENT_1532 = gql(`
  fragment Fragment1532 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult1532 = ResultOf<typeof FRAGMENT_1532>;
type FragmentSelf1532 = NonNullable<FragmentResult1532>;

export type FragmentToken1532 =
  | FragmentSelf1532["__typename"]
  | FragmentSelf1532["typenameHint"] | FragmentToken1530 | FragmentToken1531;
