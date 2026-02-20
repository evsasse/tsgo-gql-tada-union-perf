import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4126 } from "./fragment4126";
import type { FragmentToken4127 } from "./fragment4127";

export const FRAGMENT_4128 = gql(`
  fragment Fragment4128 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult4128 = ResultOf<typeof FRAGMENT_4128>;
type FragmentSelf4128 = NonNullable<FragmentResult4128>;

export type FragmentToken4128 =
  | FragmentSelf4128["__typename"]
  | FragmentSelf4128["typenameHint"] | FragmentToken4126 | FragmentToken4127;
