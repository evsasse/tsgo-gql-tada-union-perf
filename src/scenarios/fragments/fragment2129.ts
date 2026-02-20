import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2127 } from "./fragment2127";
import type { FragmentToken2128 } from "./fragment2128";

export const FRAGMENT_2129 = gql(`
  fragment Fragment2129 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult2129 = ResultOf<typeof FRAGMENT_2129>;
type FragmentSelf2129 = NonNullable<FragmentResult2129>;

export type FragmentToken2129 =
  | FragmentSelf2129["__typename"]
  | FragmentSelf2129["typenameHint"] | FragmentToken2127 | FragmentToken2128;
