import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken467 } from "./fragment467";
import type { FragmentToken468 } from "./fragment468";

export const FRAGMENT_469 = gql(`
  fragment Fragment469 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult469 = ResultOf<typeof FRAGMENT_469>;
type FragmentSelf469 = NonNullable<FragmentResult469>;

export type FragmentToken469 =
  | FragmentSelf469["__typename"]
  | FragmentSelf469["typenameHint"] | FragmentToken467 | FragmentToken468;
