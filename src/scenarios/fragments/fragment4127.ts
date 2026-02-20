import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4125 } from "./fragment4125";
import type { FragmentToken4126 } from "./fragment4126";

export const FRAGMENT_4127 = gql(`
  fragment Fragment4127 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult4127 = ResultOf<typeof FRAGMENT_4127>;
type FragmentSelf4127 = NonNullable<FragmentResult4127>;

export type FragmentToken4127 =
  | FragmentSelf4127["__typename"]
  | FragmentSelf4127["typenameHint"] | FragmentToken4125 | FragmentToken4126;
