import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4282 } from "./fragment4282";
import type { FragmentToken4283 } from "./fragment4283";

export const FRAGMENT_4284 = gql(`
  fragment Fragment4284 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult4284 = ResultOf<typeof FRAGMENT_4284>;
type FragmentSelf4284 = NonNullable<FragmentResult4284>;

export type FragmentToken4284 =
  | FragmentSelf4284["__typename"]
  | FragmentSelf4284["typenameHint"] | FragmentToken4282 | FragmentToken4283;
