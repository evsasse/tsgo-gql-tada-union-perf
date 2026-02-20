import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken727 } from "./fragment727";
import type { FragmentToken728 } from "./fragment728";

export const FRAGMENT_729 = gql(`
  fragment Fragment729 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult729 = ResultOf<typeof FRAGMENT_729>;
type FragmentSelf729 = NonNullable<FragmentResult729>;

export type FragmentToken729 =
  | FragmentSelf729["__typename"]
  | FragmentSelf729["typenameHint"] | FragmentToken727 | FragmentToken728;
