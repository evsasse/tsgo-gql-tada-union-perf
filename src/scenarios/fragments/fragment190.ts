import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken188 } from "./fragment188";
import type { FragmentToken189 } from "./fragment189";

export const FRAGMENT_190 = gql(`
  fragment Fragment190 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult190 = ResultOf<typeof FRAGMENT_190>;
type FragmentSelf190 = NonNullable<FragmentResult190>;

export type FragmentToken190 =
  | FragmentSelf190["__typename"]
  | FragmentSelf190["typenameHint"] | FragmentToken188 | FragmentToken189;
