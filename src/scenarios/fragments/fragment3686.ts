import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3684 } from "./fragment3684";
import type { FragmentToken3685 } from "./fragment3685";

export const FRAGMENT_3686 = gql(`
  fragment Fragment3686 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult3686 = ResultOf<typeof FRAGMENT_3686>;
type FragmentSelf3686 = NonNullable<FragmentResult3686>;

export type FragmentToken3686 =
  | FragmentSelf3686["__typename"]
  | FragmentSelf3686["typenameHint"] | FragmentToken3684 | FragmentToken3685;
