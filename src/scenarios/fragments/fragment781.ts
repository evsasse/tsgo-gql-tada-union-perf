import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken779 } from "./fragment779";
import type { FragmentToken780 } from "./fragment780";

export const FRAGMENT_781 = gql(`
  fragment Fragment781 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult781 = ResultOf<typeof FRAGMENT_781>;
type FragmentSelf781 = NonNullable<FragmentResult781>;

export type FragmentToken781 =
  | FragmentSelf781["__typename"]
  | FragmentSelf781["typenameHint"] | FragmentToken779 | FragmentToken780;
