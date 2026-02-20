import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4128 } from "./fragment4128";
import type { FragmentToken4129 } from "./fragment4129";

export const FRAGMENT_4130 = gql(`
  fragment Fragment4130 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult4130 = ResultOf<typeof FRAGMENT_4130>;
type FragmentSelf4130 = NonNullable<FragmentResult4130>;

export type FragmentToken4130 =
  | FragmentSelf4130["__typename"]
  | FragmentSelf4130["typenameHint"] | FragmentToken4128 | FragmentToken4129;
