import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4115 } from "./fragment4115";
import type { FragmentToken4116 } from "./fragment4116";

export const FRAGMENT_4117 = gql(`
  fragment Fragment4117 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult4117 = ResultOf<typeof FRAGMENT_4117>;
type FragmentSelf4117 = NonNullable<FragmentResult4117>;

export type FragmentToken4117 =
  | FragmentSelf4117["__typename"]
  | FragmentSelf4117["typenameHint"] | FragmentToken4115 | FragmentToken4116;
