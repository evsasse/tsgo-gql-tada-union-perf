import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2120 } from "./fragment2120";
import type { FragmentToken2121 } from "./fragment2121";

export const FRAGMENT_2122 = gql(`
  fragment Fragment2122 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult2122 = ResultOf<typeof FRAGMENT_2122>;
type FragmentSelf2122 = NonNullable<FragmentResult2122>;

export type FragmentToken2122 =
  | FragmentSelf2122["__typename"]
  | FragmentSelf2122["typenameHint"] | FragmentToken2120 | FragmentToken2121;
