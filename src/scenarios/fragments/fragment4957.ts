import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4955 } from "./fragment4955";
import type { FragmentToken4956 } from "./fragment4956";

export const FRAGMENT_4957 = gql(`
  fragment Fragment4957 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult4957 = ResultOf<typeof FRAGMENT_4957>;
type FragmentSelf4957 = NonNullable<FragmentResult4957>;

export type FragmentToken4957 =
  | FragmentSelf4957["__typename"]
  | FragmentSelf4957["typenameHint"] | FragmentToken4955 | FragmentToken4956;
