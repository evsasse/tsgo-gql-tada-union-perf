import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken456 } from "./fragment456";
import type { FragmentToken457 } from "./fragment457";

export const FRAGMENT_458 = gql(`
  fragment Fragment458 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult458 = ResultOf<typeof FRAGMENT_458>;
type FragmentSelf458 = NonNullable<FragmentResult458>;

export type FragmentToken458 =
  | FragmentSelf458["__typename"]
  | FragmentSelf458["typenameHint"] | FragmentToken456 | FragmentToken457;
