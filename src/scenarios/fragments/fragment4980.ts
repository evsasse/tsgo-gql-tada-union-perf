import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4978 } from "./fragment4978";
import type { FragmentToken4979 } from "./fragment4979";

export const FRAGMENT_4980 = gql(`
  fragment Fragment4980 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult4980 = ResultOf<typeof FRAGMENT_4980>;
type FragmentSelf4980 = NonNullable<FragmentResult4980>;

export type FragmentToken4980 =
  | FragmentSelf4980["__typename"]
  | FragmentSelf4980["typenameHint"] | FragmentToken4978 | FragmentToken4979;
