import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2169 } from "./fragment2169";
import type { FragmentToken2170 } from "./fragment2170";

export const FRAGMENT_2171 = gql(`
  fragment Fragment2171 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult2171 = ResultOf<typeof FRAGMENT_2171>;
type FragmentSelf2171 = NonNullable<FragmentResult2171>;

export type FragmentToken2171 =
  | FragmentSelf2171["__typename"]
  | FragmentSelf2171["typenameHint"] | FragmentToken2169 | FragmentToken2170;
