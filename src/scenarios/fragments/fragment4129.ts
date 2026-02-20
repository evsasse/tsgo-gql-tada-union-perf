import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4127 } from "./fragment4127";
import type { FragmentToken4128 } from "./fragment4128";

export const FRAGMENT_4129 = gql(`
  fragment Fragment4129 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult4129 = ResultOf<typeof FRAGMENT_4129>;
type FragmentSelf4129 = NonNullable<FragmentResult4129>;

export type FragmentToken4129 =
  | FragmentSelf4129["__typename"]
  | FragmentSelf4129["typenameHint"] | FragmentToken4127 | FragmentToken4128;
