import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken147 } from "./fragment147";
import type { FragmentToken148 } from "./fragment148";

export const FRAGMENT_149 = gql(`
  fragment Fragment149 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult149 = ResultOf<typeof FRAGMENT_149>;
type FragmentSelf149 = NonNullable<FragmentResult149>;

export type FragmentToken149 =
  | FragmentSelf149["__typename"]
  | FragmentSelf149["typenameHint"] | FragmentToken147 | FragmentToken148;
