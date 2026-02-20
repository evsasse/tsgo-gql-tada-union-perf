import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4956 } from "./fragment4956";
import type { FragmentToken4957 } from "./fragment4957";

export const FRAGMENT_4958 = gql(`
  fragment Fragment4958 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult4958 = ResultOf<typeof FRAGMENT_4958>;
type FragmentSelf4958 = NonNullable<FragmentResult4958>;

export type FragmentToken4958 =
  | FragmentSelf4958["__typename"]
  | FragmentSelf4958["typenameHint"] | FragmentToken4956 | FragmentToken4957;
