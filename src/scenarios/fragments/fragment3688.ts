import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3686 } from "./fragment3686";
import type { FragmentToken3687 } from "./fragment3687";

export const FRAGMENT_3688 = gql(`
  fragment Fragment3688 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult3688 = ResultOf<typeof FRAGMENT_3688>;
type FragmentSelf3688 = NonNullable<FragmentResult3688>;

export type FragmentToken3688 =
  | FragmentSelf3688["__typename"]
  | FragmentSelf3688["typenameHint"] | FragmentToken3686 | FragmentToken3687;
