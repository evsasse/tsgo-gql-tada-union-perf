import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken688 } from "./fragment688";
import type { FragmentToken689 } from "./fragment689";

export const FRAGMENT_690 = gql(`
  fragment Fragment690 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult690 = ResultOf<typeof FRAGMENT_690>;
type FragmentSelf690 = NonNullable<FragmentResult690>;

export type FragmentToken690 =
  | FragmentSelf690["__typename"]
  | FragmentSelf690["typenameHint"] | FragmentToken688 | FragmentToken689;
