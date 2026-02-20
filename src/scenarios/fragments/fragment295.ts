import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken293 } from "./fragment293";
import type { FragmentToken294 } from "./fragment294";

export const FRAGMENT_295 = gql(`
  fragment Fragment295 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult295 = ResultOf<typeof FRAGMENT_295>;
type FragmentSelf295 = NonNullable<FragmentResult295>;

export type FragmentToken295 =
  | FragmentSelf295["__typename"]
  | FragmentSelf295["typenameHint"] | FragmentToken293 | FragmentToken294;
