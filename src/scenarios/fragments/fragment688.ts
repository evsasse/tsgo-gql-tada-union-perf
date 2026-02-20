import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken686 } from "./fragment686";
import type { FragmentToken687 } from "./fragment687";

export const FRAGMENT_688 = gql(`
  fragment Fragment688 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult688 = ResultOf<typeof FRAGMENT_688>;
type FragmentSelf688 = NonNullable<FragmentResult688>;

export type FragmentToken688 =
  | FragmentSelf688["__typename"]
  | FragmentSelf688["typenameHint"] | FragmentToken686 | FragmentToken687;
